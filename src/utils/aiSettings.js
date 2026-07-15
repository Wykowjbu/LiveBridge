export const DEFAULT_AI_SETTINGS = {
  shopName: 'LiveBridge Official Store',
  context: 'Shop chuyên bán phụ kiện điện thoại, tai nghe, cáp sạc cam kết chính hãng. Khách mua trên livestream được freeship mọi đơn từ 500k. Đơn hàng sẽ được đóng gói và giao trong 24h. Bảo hành 1 đổi 1 trong 30 ngày.',
};

const AI_SETTINGS_KEY = 'livebridge.aiSettings';

export function loadAISettings() {
  if (typeof localStorage === 'undefined') return DEFAULT_AI_SETTINGS;

  try {
    return {
      ...DEFAULT_AI_SETTINGS,
      ...JSON.parse(localStorage.getItem(AI_SETTINGS_KEY) || '{}'),
    };
  } catch {
    return DEFAULT_AI_SETTINGS;
  }
}

export function saveAISettings(settings) {
  localStorage.setItem(AI_SETTINGS_KEY, JSON.stringify(settings));
}
