import React from 'react';
import Header from '../components/Header';
import LiquidGlass from '../components/LiquidGlassPanel';

const AILogic = () => {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden selection:bg-purple-500/20 selection:text-purple-600">

      <Header title="AI Settings" />

      <div className="flex-1 flex flex-col max-w-[1600px] mx-auto w-full p-6 pb-24 overflow-y-auto relative z-10 custom-scrollbar">
          <div className="mb-10 pl-2">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-3 drop-shadow-sm">AI Personality & Logic</h2>
              <p className="text-slate-500 text-lg max-w-2xl font-medium">Configure how your AI assistant interacts with customers, what it knows, and how it sells.</p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
              {/* Cấu hình cột trái (Left Column Config) */}
              <div className="xl:col-span-7 flex flex-col gap-8">
                  <LiquidGlass cornerRadius={24} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.15} overLight={true} className="p-8 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#7436f2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      <div className="flex items-center justify-between mb-8 relative z-10">
                          <div className="flex items-center gap-4">
                              <div className="bg-white border border-slate-200 p-2.5 rounded-xl text-purple-600 shadow-sm backdrop-blur-md">
                                  <span className="material-symbols-outlined text-2xl">sentiment_satisfied</span>
                              </div>
                              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Personality Traits</h3>
                          </div>
                      </div>

                      <div className="mb-10 relative z-10">
                          <div className="flex justify-between items-center mb-5">
                              <span className="text-slate-500 font-bold text-sm uppercase tracking-wider">Tone</span>
                              <span className="text-purple-600 text-sm font-bold bg-purple-100/50 px-3 py-1 rounded-full border border-purple-200">Energetic</span>
                          </div>
                          
                          <div className="relative h-3 bg-black/5 rounded-full w-full border border-black/5 shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)]">
                              <div className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#9b6af6] to-[#7436f2] shadow-[0_0_15px_rgba(116,54,242,0.3)]" style={{ width: '75%' }}></div>
                              <div className="absolute top-1/2 -translate-y-1/2 size-6 rounded-full bg-white border-2 border-[#7436f2] shadow-[0_0_10px_rgba(116,54,242,0.4),inset_0_2px_4px_rgba(255,255,255,0.8)] cursor-pointer hover:scale-110 transition-transform" style={{ left: '75%' }}></div>
                          </div>
                          
                          <div className="flex justify-between mt-3 text-xs font-bold text-slate-400">
                              <span>Formal</span>
                              <span>Casual</span>
                              <span>Energetic</span>
                          </div>
                      </div>

                      <div className="mb-1 relative z-10">
                          <div className="flex justify-between items-center mb-5">
                              <span className="text-slate-500 font-bold text-sm uppercase tracking-wider">Sales Aggressiveness</span>
                              <span className="text-purple-600 text-sm font-bold bg-purple-100/50 px-3 py-1 rounded-full border border-purple-200">Consultative</span>
                          </div>
                          
                          <div className="relative h-3 bg-black/5 rounded-full w-full border border-black/5 shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)]">
                              <div className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#9b6af6] to-[#7436f2] shadow-[0_0_15px_rgba(116,54,242,0.3)]" style={{ width: '40%' }}></div>
                              <div className="absolute top-1/2 -translate-y-1/2 size-6 rounded-full bg-white border-2 border-[#7436f2] shadow-[0_0_10px_rgba(116,54,242,0.4),inset_0_2px_4px_rgba(255,255,255,0.8)] cursor-pointer hover:scale-110 transition-transform" style={{ left: '40%' }}></div>
                          </div>
                          
                          <div className="flex justify-between mt-3 text-xs font-bold text-slate-400">
                              <span>Passive</span>
                              <span>Consultative</span>
                              <span>Pushy</span>
                          </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-200 relative z-10">
                          <div>
                              <p className="text-slate-900 font-bold text-lg">Use Emoji & Humor</p>
                              <p className="text-slate-500 text-sm mt-1 font-medium">Allow the AI to use emojis and light jokes.</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                              <input defaultChecked type="checkbox" className="sr-only peer" />
                              <div className="w-14 h-8 bg-slate-200 border border-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-transparent after:content-[''] after:absolute after:top-[3px] after:start-[3px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#7436f2]/15 peer-checked:border-[#7436f2]/30 shadow-inner peer-checked:after:bg-[#7436f2] peer-checked:after:shadow-[0_0_10px_rgba(116,54,242,0.4)]"></div>
                          </label>
                      </div>
                  </LiquidGlass>
                  
                  {/* Bộ máy quy tắc (Rules Engine) */}
                  <LiquidGlass cornerRadius={24} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.15} overLight={true} className="p-8 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      <div className="flex items-center justify-between mb-8 relative z-10">
                          <div className="flex items-center gap-4">
                              <div className="bg-white border border-slate-200 p-2.5 rounded-xl text-blue-500 shadow-sm backdrop-blur-md">
                                  <span className="material-symbols-outlined text-2xl">schema</span>
                              </div>
                              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Rules Engine</h3>
                          </div>
                          <button className="text-sm bg-white hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-xl border border-slate-200 shadow-sm transition-all duration-300 flex items-center gap-2 font-semibold">
                              <span className="material-symbols-outlined text-sm">add</span> Add Rule
                          </button>
                      </div>
                      
                      <div className="space-y-4 relative z-10">
                          <div className="bg-white/80 rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm">
                              <div className="flex items-center gap-3 mb-4">
                                  <span className="bg-purple-100 text-purple-600 text-xs font-black px-3 py-1.5 rounded-md border border-purple-200 tracking-wider">IF</span>
                                  <span className="text-slate-600 text-[15px] font-medium">Customer asks about <span className="text-slate-900 font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-200">"Shipping Time"</span></span>
                              </div>
                              <div className="flex items-center gap-3 ml-6 relative">
                                  <div className="absolute -left-[26px] top-1/2 -translate-y-1/2 w-4 h-[2px] bg-slate-300"></div>
                                  <div className="absolute -left-[26px] -top-6 bottom-1/2 w-[2px] bg-slate-300"></div>
                                  <span className="bg-emerald-100 text-emerald-600 text-xs font-black px-3 py-1.5 rounded-md border border-emerald-200 tracking-wider">THEN</span>
                                  <span className="text-slate-600 text-[15px] font-medium">Reply with <span className="text-slate-900 font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-200">"Standard Shipping (3-5 Days)"</span></span>
                              </div>
                          </div>
                          
                          <div className="bg-white/80 rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm">
                              <div className="flex items-center gap-3 mb-4">
                                  <span className="bg-purple-100 text-purple-600 text-xs font-black px-3 py-1.5 rounded-md border border-purple-200 tracking-wider">IF</span>
                                  <span className="text-slate-600 text-[15px] font-medium">Sentiment is <span className="text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded border border-red-200">Negative</span></span>
                              </div>
                              <div className="flex items-center gap-3 ml-6 relative">
                                  <div className="absolute -left-[26px] top-1/2 -translate-y-1/2 w-4 h-[2px] bg-slate-300"></div>
                                  <div className="absolute -left-[26px] -top-6 bottom-1/2 w-[2px] bg-slate-300"></div>
                                  <span className="bg-emerald-100 text-emerald-600 text-xs font-black px-3 py-1.5 rounded-md border border-emerald-200 tracking-wider">THEN</span>
                                  <span className="text-slate-600 text-[15px] font-medium">Escalate to <span className="text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Human Moderator</span></span>
                              </div>
                          </div>
                      </div>
                  </LiquidGlass>
              </div>
              
              {/* Cấu hình cột phải (Right Column Config) */}
              <div className="xl:col-span-5 flex flex-col gap-8">
                  <LiquidGlass cornerRadius={24} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.15} overLight={true} className="p-8 relative overflow-hidden group flex-1">
                      <div className="flex items-center gap-4 mb-8 relative z-10">
                          <div className="bg-white border border-slate-200 p-2.5 rounded-xl text-fuchsia-500 shadow-sm backdrop-blur-md">
                              <span className="material-symbols-outlined text-2xl">library_books</span>
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Knowledge Base</h3>
                      </div>
                      
                      <div className="bg-white/40 backdrop-blur-md border-2 border-dashed border-[#7436f2]/20 hover:border-[#7436f2]/50 hover:bg-[#7436f2]/5 rounded-2xl p-10 flex flex-col items-center justify-center text-center cursor-pointer mb-8 transition-all duration-300 relative overflow-hidden group/upload">
                          <div className="absolute inset-0 bg-white/40 opacity-0 group-hover/upload:opacity-100 transition-opacity duration-300"></div>
                          <div className="size-16 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover/upload:scale-110 transition-transform duration-300 shadow-sm backdrop-blur-md z-10">
                              <span className="material-symbols-outlined text-3xl text-purple-600">cloud_upload</span>
                          </div>
                          <p className="text-slate-900 font-bold text-lg z-10 relative">Click to upload or drag & drop</p>
                          <p className="text-slate-500 text-sm mt-2 font-medium z-10 relative">PDF, DOCX, or TXT files (Max 10MB)</p>
                      </div>
                      
                      <div className="space-y-3 relative z-10">
                          <div className="bg-white/80 backdrop-blur-md border border-black/5 shadow-[0_4px_15px_rgba(0,0,0,0.03)] rounded-xl p-4 flex items-center justify-between hover:border-purple-600/30 transition-colors group/chip">
                              <div className="flex items-center gap-4">
                                  <div className="bg-red-50 text-red-500 p-2.5 rounded-lg border border-red-100 flex items-center justify-center">
                                      <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
                                  </div>
                                  <div>
                                      <p className="text-[15px] font-bold text-slate-900 truncate max-w-[200px]">Summer_Collection_2024.pdf</p>
                                      <div className="flex items-center gap-2 mt-0.5">
                                          <span className="text-xs text-slate-500 font-medium">2.4 MB</span>
                                          <span className="size-1 rounded-full bg-slate-300"></span>
                                          <span className="text-xs text-emerald-500 font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">check_circle</span> Processed</span>
                                      </div>
                                  </div>
                              </div>
                              <button className="text-slate-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-colors opacity-0 group-hover/chip:opacity-100 focus:opacity-100">
                                  <span className="material-symbols-outlined">delete</span>
                              </button>
                          </div>
                      </div>
                  </LiquidGlass>
              </div>
          </div>
      </div>
    </div>
  );
};

export default AILogic;
