import React from 'react';
import Header from '../components/Header';
import LiquidGlass from '../components/LiquidGlassPanel';

const InventoryManager = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <Header title="Inventory & Product Manager" />
      
      <div className="flex flex-1 overflow-hidden relative p-6 gap-6">
        {/* Khu vực nội dung chính (Main Content Area) */}
        <LiquidGlass cornerRadius={16} blurAmount={0.01} saturation={120} displacementScale={5} aberrationIntensity={0.5} elasticity={0.15} overLight={true} className="flex-1 flex flex-col h-full overflow-hidden relative border border-white/60">
          {/* Thanh công cụ (Toolbar) */}
          <div className="px-8 py-6 flex flex-col gap-6 flex-none z-10 border-b border-black/5 bg-white/20 backdrop-blur-md rounded-t-2xl">
              <div className="flex items-end justify-between">
                  <div>
                      <h1 className="text-slate-800 tracking-tight text-3xl font-bold leading-tight drop-shadow-sm">Inventory Manager</h1>
                      <p className="text-slate-500 text-sm mt-2 font-medium">Manage stock across platforms in real-time.</p>
                  </div>
                  <div className="flex gap-4">
                      <button className="flex items-center justify-center rounded-full h-10 px-5 bg-white/80 border border-white/50 text-slate-700 hover:bg-white transition-all text-sm font-medium shadow-[0_2px_10px_rgba(0,0,0,0.05)] backdrop-blur-md">
                          <span className="material-symbols-outlined mr-2 text-[20px]">file_upload</span> Import
                      </button>
                      <button className="flex items-center justify-center rounded-full h-10 px-5 bg-gradient-to-r from-cyan-400/90 to-blue-400/90 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-[0_4px_15px_rgba(0,208,224,0.3)] transition-all border border-white/60 backdrop-blur-md">
                          <span className="material-symbols-outlined mr-2 text-[20px]">add</span> <span className="truncate">Add Product</span>
                      </button>
                  </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex flex-1 items-center bg-white/60 rounded-full border border-black/5 focus-within:border-cyan-300 focus-within:shadow-[0_0_15px_rgba(0,208,224,0.15)] focus-within:bg-white transition-all h-10 px-4 min-w-[280px] backdrop-blur-md shadow-inner">
                      <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
                      <input className="w-full bg-transparent border-none text-slate-800 placeholder:text-slate-400 focus:ring-0 text-sm ml-2 font-medium" placeholder="Search by product name, SKU, or AI tag..." />
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                      <button className="px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold whitespace-nowrap border border-cyan-200 shadow-sm backdrop-blur-sm">All Items</button>
                      <button className="px-4 py-2 rounded-full bg-white/60 text-slate-600 hover:bg-white hover:text-slate-900 transition-colors text-xs font-medium whitespace-nowrap border border-black/5 shadow-sm backdrop-blur-sm">Low Stock (3)</button>
                      <button className="px-4 py-2 rounded-full bg-white/60 text-slate-600 hover:bg-white hover:text-slate-900 transition-colors text-xs font-medium whitespace-nowrap border border-black/5 shadow-sm backdrop-blur-sm">TikTok Live</button>
                      <div className="h-5 w-px bg-black/10 mx-2"></div>
                      <button className="p-2 rounded-full bg-white/60 text-slate-600 hover:text-cyan-600 hover:bg-white transition-colors border border-black/5 shadow-sm">
                          <span className="material-symbols-outlined text-[18px]">filter_list</span>
                      </button>
                  </div>
              </div>
          </div>

          {/* Khu vực bảng dữ liệu (Table Area) */}
          <div className="flex-1 overflow-auto px-8 pb-6 w-full pt-4 custom-scrollbar">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-4 py-2 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider sticky top-0 z-10 bg-white/70 backdrop-blur-xl rounded-lg border border-white shadow-sm">
                <div className="col-span-1 w-8">
                    <input className="rounded border-slate-300 bg-white text-cyan-500 focus:ring-offset-0 focus:ring-cyan-500/50 shadow-inner" type="checkbox" />
                </div>
                <div className="col-span-3">Product</div>
                <div className="col-span-2">SKU & Category</div>
                <div className="col-span-1 text-right">Price</div>
                <div className="col-span-2 pl-4">Stock Status</div>
                <div className="col-span-2">Platforms</div>
                <div className="col-span-1 text-right">Actions</div>
            </div>

            {/* Table Rows */}
            <div className="space-y-3">
              {/* Row 1 */}
              <div className="glass-row grid grid-cols-12 gap-4 items-center p-4 relative overflow-hidden ring-1 ring-cyan-200 bg-cyan-50/30">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 to-blue-500 shadow-[2px_0_10px_rgba(0,208,224,0.3)]"></div>
                  <div className="col-span-1 w-8 pl-1">
                      <input className="rounded border-slate-300 bg-white text-cyan-500 focus:ring-offset-0 focus:ring-cyan-500/50 shadow-inner" type="checkbox" />
                  </div>
                  <div className="col-span-3">
                      <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-xl bg-cover bg-center border border-white shadow-md ring-1 ring-black/5" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUihVEMbioSVmLsDTsGUyWrKKktk88PGBXcAR9-TWM_u7gUprXtXEZZ-4PtSwB9NBvPPziY1bBUc_4n0-tfSGj_b-n-ZhhPuIfI0sOqsF1tHkZ0YzwaIAanchCx20D2dyKRConX79KcvUEnBSzBd2CPCkdYo35GmG93znMUIQMBaZh07wQzL5phTRPTRpELD6Fe-EC0GONJyveX32mW_kAYGuNqn1V-kwA3dyC3E-MKOd7srdiPORtjZARrQ4-EqBZmtojP-ox9uaK')" }}></div>
                          <div>
                              <div className="font-bold text-slate-800 text-sm">Neon Runner X1</div>
                              <div className="text-[11px] text-slate-500 mt-0.5 font-medium">Updated 2m ago</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-span-2">
                      <div className="text-xs text-slate-700 font-mono bg-slate-100 px-2 py-1 rounded-md inline-block border border-slate-200/60 shadow-inner">NR-2024-RED</div>
                      <div className="mt-1"><span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-700 border border-purple-200">Footwear</span></div>
                  </div>
                  <div className="col-span-1 text-right">
                      <div className="text-sm font-bold text-slate-800">$129.00</div>
                      <div className="text-xs text-slate-400 line-through font-medium">$150.00</div>
                  </div>
                  <div className="col-span-2 pl-4">
                      <div className="flex flex-col gap-1.5">
                          <div className="flex items-center gap-2">
                              <div className="h-2 w-16 bg-slate-100 rounded-full overflow-hidden border border-slate-200 shadow-inner">
                                  <div className="h-full bg-emerald-500 w-[80%] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
                              </div>
                              <span className="text-xs font-bold text-emerald-600">42 left</span>
                          </div>
                          <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Safe level</span>
                      </div>
                  </div>
                  <div className="col-span-2">
                      <div className="flex items-center -space-x-2">
                          <div className="h-8 w-8 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-white text-[10px] shadow-md backdrop-blur-md" title="TikTok">
                              <span className="font-bold">Tk</span>
                          </div>
                          <div className="h-8 w-8 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white text-[10px] shadow-md backdrop-blur-md" title="Shopify">
                              <span className="font-bold">S</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-span-1 text-right flex justify-end gap-1">
                      <button className="h-8 w-8 rounded-full bg-white/50 hover:bg-cyan-50 text-slate-500 hover:text-cyan-600 transition-all border border-transparent hover:border-cyan-200 flex items-center justify-center shadow-sm">
                          <span className="material-symbols-outlined text-[16px]">edit_square</span>
                      </button>
                      <button className="h-8 w-8 rounded-full bg-white/50 hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-all border border-transparent hover:border-slate-200 flex items-center justify-center shadow-sm">
                          <span className="material-symbols-outlined text-[16px]">more_vert</span>
                      </button>
                  </div>
              </div>

              {/* Row 2 */}
              <div className="glass-row grid grid-cols-12 gap-4 items-center p-4">
                  <div className="col-span-1 w-8 pl-1">
                      <input className="rounded border-slate-300 bg-white text-cyan-500 focus:ring-offset-0 focus:ring-cyan-500/50 shadow-inner" type="checkbox" />
                  </div>
                  <div className="col-span-3">
                      <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-xl bg-cover bg-center border border-white shadow-md ring-1 ring-black/5" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaJUPtPAYoadMww13hw2Te5oL2z75SShn1cVeKAbovG68M72TUYlP6XHfTYXX2jqOCEdXzjsau3S0B5s_3-fir1t_AI0DG4TEW-PDBlTdY0JKuzP1Y_cORLg0Gu56ZGHsRh6SgZwiO47sRYY3mdXXlbvHsb_LmyBHmLjA7ALMgGDbEdMU9CCQULKVoiMCqdwvzpeMvuYjPEnDisnUWFKLmHiyex_l93kBhLPt7QWdvCnR4QXjVmefN6hqv2jBWpaTg4gd1iRcrQ3b9')" }}></div>
                          <div>
                              <div className="font-bold text-slate-800 text-sm">Smart Watch Series 5</div>
                              <div className="text-[11px] text-slate-500 mt-0.5 font-medium">Updated 1h ago</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-span-2">
                      <div className="text-xs text-slate-700 font-mono bg-slate-100 px-2 py-1 rounded-md inline-block border border-slate-200/60 shadow-inner">SW-SER5-WHT</div>
                      <div className="mt-1"><span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700 border border-blue-200">Electronics</span></div>
                  </div>
                  <div className="col-span-1 text-right">
                      <div className="text-sm font-bold text-slate-800">$299.00</div>
                  </div>
                  <div className="col-span-2 pl-4">
                      <div className="flex flex-col gap-1.5">
                          <div className="flex items-center gap-2">
                              <div className="h-2 w-16 bg-slate-100 rounded-full overflow-hidden border border-slate-200 shadow-inner">
                                  <div className="h-full bg-rose-500 w-[15%] rounded-full shadow-[0_0_8px_rgba(244,63,94,0.5)] animate-pulse"></div>
                              </div>
                              <span className="text-xs font-bold text-rose-600">3 left</span>
                          </div>
                          <span className="text-[10px] text-rose-500 uppercase tracking-wider font-semibold">Reorder needed</span>
                      </div>
                  </div>
                  <div className="col-span-2">
                      <div className="flex items-center -space-x-2">
                          <div className="h-8 w-8 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-white text-[10px] shadow-md backdrop-blur-md" title="TikTok">
                              <span className="font-bold">Tk</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-span-1 text-right flex justify-end gap-1">
                      <button className="h-8 w-8 rounded-full bg-white/50 hover:bg-cyan-50 text-slate-500 hover:text-cyan-600 transition-all border border-transparent hover:border-cyan-200 flex items-center justify-center shadow-sm">
                          <span className="material-symbols-outlined text-[16px]">edit_square</span>
                      </button>
                      <button className="h-8 w-8 rounded-full bg-white/50 hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-all border border-transparent hover:border-slate-200 flex items-center justify-center shadow-sm">
                          <span className="material-symbols-outlined text-[16px]">more_vert</span>
                      </button>
                  </div>
              </div>
            </div>
          </div>

          <div className="px-8 py-4 border-t border-black/5 flex items-center justify-between z-10 bg-white/30 backdrop-blur-xl rounded-b-2xl shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
              <div className="text-xs text-slate-500 font-medium">Showing <span className="font-bold text-slate-800">1-10</span> of <span className="font-bold text-slate-800">45</span> items</div>
              <div className="flex gap-2">
                  <button className="px-4 py-1.5 rounded-full bg-white/60 text-slate-600 hover:bg-white hover:text-slate-900 border border-transparent hover:border-slate-200 text-xs font-bold transition-all shadow-sm">1</button>
                  <button className="px-4 py-1.5 rounded-full bg-white/80 text-slate-700 hover:bg-white hover:text-slate-900 text-xs font-bold transition-all border border-slate-200 backdrop-blur-sm shadow-sm">Next</button>
              </div>
          </div>
        </LiquidGlass>
        
        {/* Ngăn kéo bên phải (Right Drawer) */}
        <aside className="w-[420px] rounded-2xl glass-drawer flex flex-col relative z-30 transition-transform duration-300 transform translate-x-0 overflow-hidden border border-white/80">
          <div className="px-6 py-6 border-b border-black/5 flex justify-between items-start relative z-10 bg-white/40">
              <div>
                  <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold text-cyan-700 bg-cyan-100 border border-cyan-200 px-2 py-0.5 rounded-full shadow-sm tracking-wider uppercase">Editing</span>
                      <span className="text-xs text-slate-500 font-mono bg-white/80 px-2 py-0.5 rounded-md border border-slate-200 shadow-sm">#NR-2024-RED</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Neon Runner X1</h2>
              </div>
              <button className="h-8 w-8 rounded-full bg-white/80 hover:bg-white text-slate-500 hover:text-slate-800 transition-all border border-slate-200 hover:border-slate-300 flex items-center justify-center backdrop-blur-md shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-8 relative z-10 custom-scrollbar">
              <section>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <div className="h-6 w-6 rounded-lg bg-cyan-100 flex items-center justify-center border border-cyan-200 shadow-sm">
                          <span className="material-symbols-outlined text-cyan-600 text-[14px]">inventory</span>
                      </div>
                      Real-time Stock
                  </h3>
                  <div className="bg-white/60 rounded-2xl p-5 border border-white shadow-[0_4px_15px_rgba(0,0,0,0.03)] backdrop-blur-md">
                      <div className="flex justify-between items-center mb-5">
                          <span className="text-sm font-medium text-slate-500">Current Total</span>
                          <span className="text-3xl font-black text-slate-800 drop-shadow-sm">42</span>
                      </div>
                      <div className="flex gap-3 mb-5 p-1 bg-slate-100/50 rounded-xl border border-slate-200/50 shadow-inner">
                          <button className="flex-1 py-2 rounded-lg bg-white text-rose-500 hover:bg-rose-50 border border-slate-200 transition-all font-bold text-xl shadow-sm">-</button>
                          <input className="w-24 text-center bg-transparent border-none text-slate-800 font-bold text-lg focus:ring-0" type="number" defaultValue="42" />
                          <button className="flex-1 py-2 rounded-lg bg-white text-emerald-500 hover:bg-emerald-50 border border-slate-200 transition-all font-bold text-xl shadow-sm">+</button>
                      </div>
                  </div>
              </section>

              <section>
                  <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                          <div className="h-6 w-6 rounded-lg bg-purple-100 flex items-center justify-center border border-purple-200 shadow-sm">
                              <span className="material-symbols-outlined text-purple-600 text-[14px]">smart_toy</span>
                          </div>
                          AI Assistant Context
                      </h3>
                  </div>
                  <div className="space-y-4">
                      <div>
                          <label className="block text-xs font-bold text-slate-500 mb-2">Key Selling Points (AI uses this during live)</label>
                          <textarea className="w-full h-24 bg-white/80 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 p-4 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 resize-none shadow-inner backdrop-blur-sm" defaultValue="Lightweight breathable mesh material.&#10;Sole glows in the dark after light exposure.&#10;Limited edition 2024 colorway."></textarea>
                      </div>
                  </div>
              </section>
          </div>
          
          <div className="p-6 border-t border-white bg-white/70 relative z-10 backdrop-blur-xl shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
              <div className="flex gap-4">
                  <button className="flex-1 h-12 rounded-xl border border-slate-300 text-slate-600 font-bold text-sm hover:bg-white hover:text-slate-800 transition-all backdrop-blur-sm shadow-sm bg-white/50">Cancel</button>
                  <button className="flex-1 h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold text-sm shadow-[0_4px_15px_rgba(0,208,224,0.3)] hover:shadow-[0_6px_20px_rgba(0,208,224,0.4)] transition-all border border-white/50">Save Changes</button>
              </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default InventoryManager;
