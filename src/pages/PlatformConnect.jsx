import React from 'react';
import Header from '../components/Header';
import LiquidGlass from '../components/LiquidGlassPanel';

const PlatformConnect = () => {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden">

      <Header title="Settings & Integrations" />
      
      <div className="flex-1 w-full max-w-6xl mx-auto pb-10 overflow-y-auto p-6 z-10 custom-scrollbar">
          <LiquidGlass cornerRadius={24} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.15} overLight={true} className="mb-12 p-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                  <div>
                      <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 mb-2">Platform Connections</h2>
                      <p className="text-slate-500 text-sm font-medium">Manage your social media integrations and API keys for seamless multi-streaming.</p>
                  </div>
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-white/70 border border-white shadow-[0_4px_15px_-3px_rgba(0,0,0,0.05),inset_0_1px_0_0_rgba(255,255,255,1)] rounded-xl text-sm font-bold text-slate-800 transition-all hover:bg-white/90">
                      <span className="material-symbols-outlined text-[18px]">add</span> Add Platform
                  </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Kết nối TikTok (TikTok) */}
                  <LiquidGlass cornerRadius={24} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight={true} className="p-6 relative group transition-all hover:-translate-y-1">
                      <div className="flex items-start justify-between mb-5">
                          <div className="bg-black rounded-2xl p-3 shadow-md border border-slate-800">
                              <svg fill="white" height="28" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M19.589 6.686a4.793 4.793 0 0 1-1.29-.181 5.378 5.378 0 0 1-.958-.354c-.31-.17-.61-.39-.897-.648a5.275 5.275 0 0 1-.724-.871 4.316 4.316 0 0 1-.502-1.02A4.908 4.908 0 0 1 15 2.185V2.18h-3.41v12.213a3.546 3.546 0 0 1-.362 1.547 3.546 3.546 0 0 1-1.026 1.258 3.546 3.546 0 0 1-1.468.685 3.546 3.546 0 0 1-3.32-.685 3.546 3.546 0 0 1-1.258-1.258 3.546 3.546 0 0 1-.462-1.547c0-1.95 1.583-3.535 3.535-3.535.485 0 .96.096 1.405.283V7.527a6.953 6.953 0 0 0-1.405-.141C3.385 7.386 0 10.771 0 14.945c0 4.175 3.385 7.56 7.56 7.56 4.175 0 7.56-3.385 7.56-7.56V8.583c1.07.766 2.36 1.218 3.75 1.233v-3.414a5.617 5.617 0 0 1-.281.284z"></path>
                              </svg>
                          </div>
                          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200 shadow-sm">
                              <span className="size-2.5 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-pulse"></span> Connected
                          </span>
                      </div>
                      <h3 className="text-slate-800 text-xl font-extrabold mb-1">TikTok Shop</h3>
                      <p className="text-slate-500 text-xs mb-5 font-semibold">Last synced: 2 mins ago</p>
                      
                      <div className="bg-[#f1f5f999] backdrop-blur-md border border-white/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] rounded-2xl p-3.5 mb-5">
                          <p className="text-[10px] uppercase tracking-wider text-slate-500 font-extrabold mb-1.5">API Key</p>
                          <div className="flex items-center justify-between">
                              <code className="text-sm text-slate-700 font-mono font-bold tracking-wide">tk_live_••••••••92</code>
                              <button className="text-slate-400 hover:text-purple-600 transition-colors bg-white shadow-sm border border-slate-200 p-1.5 rounded-lg"><span className="material-symbols-outlined text-[16px]">content_copy</span></button>
                          </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                          <span className="text-sm font-semibold text-slate-700">Sync Inventory</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                              <input defaultChecked type="checkbox" className="sr-only peer" />
                              <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500 shadow-inner"></div>
                          </label>
                      </div>
                  </LiquidGlass>

                   {/* Kết nối Facebook (Facebook) */}
                   <LiquidGlass cornerRadius={24} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight={true} className="p-6 relative group transition-all hover:-translate-y-1">
                      <div className="flex items-start justify-between mb-5">
                          <div className="bg-white rounded-2xl p-3 shadow-md border border-slate-100">
                              <svg fill="#1877F2" height="28" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                              </svg>
                          </div>
                          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200 shadow-sm">
                              <span className="size-2.5 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-pulse"></span> Connected
                          </span>
                      </div>
                      <h3 className="text-slate-800 text-xl font-extrabold mb-1">Facebook Live</h3>
                      <p className="text-slate-500 text-xs mb-5 font-semibold">Last synced: 1 hour ago</p>
                      
                      <div className="bg-[#f1f5f999] backdrop-blur-md border border-white/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] rounded-2xl p-3.5 mb-5">
                          <p className="text-[10px] uppercase tracking-wider text-slate-500 font-extrabold mb-1.5">API Key</p>
                          <div className="flex items-center justify-between">
                              <code className="text-sm text-slate-700 font-mono font-bold tracking-wide">fb_live_••••••••x7</code>
                              <button className="text-slate-400 hover:text-purple-600 transition-colors bg-white shadow-sm border border-slate-200 p-1.5 rounded-lg"><span className="material-symbols-outlined text-[16px]">content_copy</span></button>
                          </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                          <span className="text-sm font-semibold text-slate-700">Sync Comments</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                              <input defaultChecked type="checkbox" className="sr-only peer" />
                              <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1877F2] shadow-inner"></div>
                          </label>
                      </div>
                  </LiquidGlass>
                  
                  {/* Kết nối Shopee (Shopee) */}
                  <LiquidGlass cornerRadius={24} blurAmount={0.02} saturation={120} displacementScale={8} aberrationIntensity={1} elasticity={0.2} overLight={true} className="p-6 relative group transition-all hover:-translate-y-1">
                      <div className="flex items-start justify-between mb-5">
                          <div className="bg-white rounded-2xl p-3 shadow-md border border-slate-100">
                              <svg fill="#EE4D2D" height="28" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M19.387 7.031c.325.758.325 1.708.325 1.708s1.616-.271 1.616-.832c0-2.484-3.525-4.52-7.85-4.52-4.325 0-7.85 2.036-7.85 4.52 0 .561 1.616.832 1.616.832s0-.95.325-1.708c.575-1.34 3.016-2.27 5.909-2.27 2.893 0 5.334.93 5.909 2.27zm.983 2.96c-.475-.084-2.85-.312-2.85-.312s-.758 1.628-2.616 1.628c-1.858 0-2.616-1.628-2.616-1.628s-2.375.228-2.85.312c-2.85.498-3.083 2.534-3.083 2.534-.233 2.534 2.125 4.392 3.842 4.392.367 0 .733-.036 1.1-.108v-2.09c-.583-.156-1.008-.684-1.008-1.308 0-.75.608-1.356 1.358-1.356.75 0 1.358.606 1.358 1.356 0 .624-.425 1.152-1.008 1.308v2.09c.367.072.733.108 1.1.108 1.717 0 4.075-1.858 3.842-4.392 0 0-.233-2.036-3.083-2.534z"></path>
                              </svg>
                          </div>
                          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200 shadow-sm">
                              <span className="size-2.5 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-pulse"></span> Connected
                          </span>
                      </div>
                      <h3 className="text-slate-800 text-xl font-extrabold mb-1">Shopee</h3>
                      <p className="text-slate-500 text-xs mb-5 font-semibold">Last synced: 15 mins ago</p>
                      
                       <div className="bg-[#f1f5f999] backdrop-blur-md border border-white/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] rounded-2xl p-3.5 mb-5">
                          <p className="text-[10px] uppercase tracking-wider text-slate-500 font-extrabold mb-1.5">API Key</p>
                          <div className="flex items-center justify-between">
                              <code className="text-sm text-slate-700 font-mono font-bold tracking-wide">sh_live_••••••••2b</code>
                              <button className="text-slate-400 hover:text-purple-600 transition-colors bg-white shadow-sm border border-slate-200 p-1.5 rounded-lg"><span className="material-symbols-outlined text-[16px]">content_copy</span></button>
                          </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                          <span className="text-sm font-semibold text-slate-700">Sync Products</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                              <input defaultChecked type="checkbox" className="sr-only peer" />
                              <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#EE4D2D] shadow-inner"></div>
                          </label>
                      </div>
                  </LiquidGlass>
              </div>
          </LiquidGlass>
      </div>
    </div>
  );
};

export default PlatformConnect;
