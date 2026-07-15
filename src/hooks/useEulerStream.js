import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to connect to Eulerstream WebSocket for TikTok Live Comments
 */

/**
 * Normalize a raw Eulerstream message into { type, nickname, uniqueId, comment }.
 * Eulerstream format: { type: 'chat'|'gift'|'workerInfo'|..., data: { ... } }
 * data fields follow TikTok Live Connector schema.
 */
function normalizeMessage(raw) {
  // Unwrap { type, data } envelope — Eulerstream always uses this wrapper
  const payload = (raw.type !== undefined && raw.data !== undefined) ? raw.data : raw;
  const user = payload.user || payload.author || payload.sender || {};

  return {
    type:     raw.type || 'chat',
    nickname: payload.nickname   || user.nickname   || user.displayName || user.name || payload.displayName || payload.name || '',
    uniqueId: payload.uniqueId   || user.uniqueId   || user.handle      || payload.userId || user.userId || '',
    comment:  payload.comment    || payload.text     || payload.content  || payload.message || '',
    _raw: raw,
  };
}

const CHAT_TYPES = new Set(['chat', 'CHAT', 'WebcastChatMessage']);
let messageSeq = 0;

export const useEulerStream = (uniqueId) => {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  const wsRef = useRef(null);
  const apiKey = "euler_YjdkM2FlMDQxZTk1NWU1OWM2MzM2MjRkNTgwYjI0Yjk0YWNhNTRjNzMzMTUyYzYyYzE3YzFi";

  const connect = (id) => {
    const targetId = id || uniqueId;
    if (!targetId) return;

    if (wsRef.current) {
      wsRef.current.close();
    }

    try {
      const wsUrl = `wss://ws.eulerstream.com?uniqueId=${targetId}&apiKey=${apiKey}`;
      const ws = new WebSocket(wsUrl);

      ws.onopen = () => {
        setIsConnected(true);
        setError(null);
        setMessages([]);
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          // DEBUG: log raw payload — xem format thật, xóa sau khi confirm
          console.log('[Eulerstream RAW]', data);

          // Eulerstream có thể gửi nhiều dạng — thử tất cả
          let rawList = [];

          if (Array.isArray(data)) {
            // dạng: [ { comment, user, ... }, ... ]
            rawList = data;
          } else if (data.messages && Array.isArray(data.messages)) {
            // dạng: { messages: [...] }
            rawList = data.messages;
          } else if (data.data && Array.isArray(data.data)) {
            // dạng: { event: "chat", data: [...] }
            rawList = data.data;
          } else if (data.comment !== undefined || data.text !== undefined) {
            // dạng: single message object
            rawList = [data];
          } else if (data.data && typeof data.data === 'object') {
            // dạng: { event: "chat", data: { comment, user } }
            rawList = [data.data];
          }

          if (rawList.length > 0) {
            // Log first message of each batch để xem inner data structure
            console.log('[Eulerstream MSG[0]]', rawList[0]);

            // Chỉ lấy chat messages — filter bỏ workerInfo, gift, like, v.v.
            const chatOnly = rawList.filter(m => !m.type || CHAT_TYPES.has(m.type));
            if (chatOnly.length === 0) return;

            const normalized = chatOnly.map(m => ({
              ...normalizeMessage(m),
              _id: `${Date.now()}-${messageSeq++}`,
            }));
            setMessages(prev => [...prev, ...normalized].slice(-100));
          }
        } catch (err) {
          console.error('[Eulerstream] Failed to parse message', err);
        }
      };

      ws.onerror = () => {
        setError('WebSocket error occurred.');
        setIsConnected(false);
      };

      ws.onclose = () => {
        setIsConnected(false);
        // KHÔNG clear messages khi connection tự đóng — user vẫn đọc được
      };

      wsRef.current = ws;

    } catch (err) {
      setError(err.message || 'Failed to initialize connection');
      setIsConnected(false);
    }
  };

  const disconnect = () => {
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
      setIsConnected(false);
      setMessages([]); // chỉ clear khi user chủ động ngắt
    }
  };

  useEffect(() => {
    if (uniqueId) {
      connect(uniqueId);
    }
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isConnected, messages, error, connect, disconnect };
};
