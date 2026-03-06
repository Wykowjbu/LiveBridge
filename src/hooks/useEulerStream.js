import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to connect to Eulerstream WebSocket for TikTok Live Comments
 */
export const useEulerStream = (uniqueId) => {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  
  const wsRef = useRef(null);
  const apiKey = "euler_YjdkM2FlMDQxZTk1NWU1OWM2MzM2MjRkNTgwYjI0Yjk0YWNhNTRjNzMzMTUyYzYyYzE3YzFi"; // Fixed Phase 1 API Key

  const connect = (id) => {
    // Determine which ID to use
    const targetId = id || uniqueId;
    if (!targetId) return;

    // Clean up existing connection if there is one
    if (wsRef.current) {
        wsRef.current.close();
    }

    try {
        const wsUrl = `wss://ws.eulerstream.com?uniqueId=${targetId}&apiKey=${apiKey}`;
        const ws = new WebSocket(wsUrl);

        ws.onopen = () => {
          setIsConnected(true);
          setError(null);
          // Clear previous messages when connecting to a new streamer
          setMessages([]); 
        };

        ws.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            
            if (data && data.messages && Array.isArray(data.messages)) {
              // Append new messages, keeping max 100 for performance
              setMessages(prev => {
                  const combined = [...prev, ...data.messages];
                  return combined.slice(-100);
              });
            }
          } catch (err) {
            console.error("Failed to parse websocket message", err);
          }
        };

        ws.onerror = () => {
            setError('WebSocket error occurred.');
            setIsConnected(false);
        };

        ws.onclose = () => {
            setIsConnected(false);
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
      }
  };

  // Optional: Auto-connect if uniqueId is provided on mount
  useEffect(() => {
    if (uniqueId) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        connect(uniqueId);
    }
    return () => disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isConnected, messages, error, connect, disconnect };
};
