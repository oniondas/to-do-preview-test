import { Utensils, Circle, Package, Wine, PiggyBank, Receipt } from 'lucide-react';

export function BudgetView() {
  return (
    <div className="w-full animation-fade-in pb-section">
      {/* Hero Section */}
      <header className="py-section grid grid-cols-1 md:grid-cols-12 items-center gap-xl pt-xl">
        <div className="md:col-span-7">
          <h1 className="font-display-lg text-display-lg mb-md">Kitchen Finance</h1>
          <p className="font-body-md text-body-md text-secondary max-w-lg leading-relaxed">
            Master your pantry economy. We track every cent so you can focus on every bite. Your kitchen, your rules, your savings.
          </p>
          <div className="mt-xl flex gap-md">
            <button className="bg-brand-teal text-white px-xl py-md rounded-xl font-button text-button hover:opacity-90 transition-all active:translate-y-[2px]">
              Export Report
            </button>
            <button className="border border-hairline px-xl py-md rounded-xl font-button text-button text-ink hover:bg-surface-container-low transition-all active:translate-y-[2px] bg-white">
              Set Limits
            </button>
          </div>
        </div>
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-full aspect-square max-w-[400px]">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMnlcw8wbSXZXo-QWJWjTz1ibCes8DLdbG8GG33ohWwHXI7zguIGpq4xp9PaydE-Xd7EC6nBIMRUqPaPV5A9VvTVSEceV0f06wqKTZmKuOwGnBLlUI5jLxrSnbylm-YE1ogmk70ZTEdBrvSvYBjMSukEdrNATi-NrQRLv1gS2xuybqQxvdrj4VmIAhBHABhyqQEOi9qSL-Co1CcR6IL7X2S2rK8EGCdanii1HUsM325U6S88saBHh6ygISK-LRwnknIsenjExACEY" 
              alt="Kitchen Finance Character" 
              className="w-full h-full object-contain clay-shadow"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      {/* Main Content: Budget Feasibility Index */}
      <section className="mb-section">
        <div className="bg-brand-peach rounded-[24px] p-xl grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="space-y-lg">
            <div>
              <span className="bg-white/40 backdrop-blur-md px-md py-xs rounded-full font-label-caps text-label-caps text-ink">CORE METRIC</span>
              <h2 className="font-display-md text-display-md mt-sm">Budget Feasibility Index</h2>
            </div>
            
            <div className="space-y-sm">
              <div className="flex justify-between items-end">
                <span className="font-display-sm text-display-sm">85% <span className="text-ink/60 font-body-md text-body-md ml-2">Utilized</span></span>
                <span className="font-body-md text-body-md font-semibold">$850.00 / $1,000.00</span>
              </div>
              
              {/* Progress Bar */}
              <div className="h-8 w-full bg-white/30 rounded-full overflow-hidden border border-white/40 p-1">
                <div className="h-full bg-ink rounded-full transition-all duration-1000 ease-out" style={{ width: '85%' }}></div>
              </div>
              <p className="font-body-md text-body-md text-ink/80 italic mt-2">You have 15% ($150.00) remaining for the next 4 days.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-md pt-md">
              <div className="bg-white/40 p-md rounded-xl border border-white/20">
                <p className="font-label-caps text-label-caps text-ink/70">AVG. COST PER MEAL</p>
                <p className="font-title-lg text-title-lg mt-1">$4.20</p>
              </div>
              <div className="bg-white/40 p-md rounded-xl border border-white/20">
                <p className="font-label-caps text-label-caps text-ink/70">PROJECTED SAVINGS</p>
                <p className="font-title-lg text-title-lg text-brand-teal mt-1">+$42.10</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/30 backdrop-blur-sm p-lg rounded-[24px] border border-white/40 h-full flex flex-col">
            <h3 className="font-title-lg text-title-lg mb-lg">Cost Breakdown</h3>
            <ul className="space-y-md flex-grow flex flex-col justify-center">
              <li className="flex items-center justify-between p-md bg-white/50 rounded-xl hover:bg-white/70 transition-colors cursor-default">
                <div className="flex items-center gap-md">
                  <Utensils className="w-5 h-5 text-ink" />
                  <span className="font-body-md text-body-md font-medium">Fresh Produce</span>
                </div>
                <span className="font-body-md text-body-md">$340.50</span>
              </li>
              <li className="flex items-center justify-between p-md bg-white/50 rounded-xl hover:bg-white/70 transition-colors cursor-default">
                <div className="flex items-center gap-md">
                  <Circle className="w-5 h-5 text-ink" />
                  <span className="font-body-md text-body-md font-medium">Protein & Dairy</span>
                </div>
                <span className="font-body-md text-body-md">$285.00</span>
              </li>
              <li className="flex items-center justify-between p-md bg-white/50 rounded-xl hover:bg-white/70 transition-colors cursor-default">
                <div className="flex items-center gap-md">
                  <Package className="w-5 h-5 text-ink" />
                  <span className="font-body-md text-body-md font-medium">Pantry Staples</span>
                </div>
                <span className="font-body-md text-body-md">$142.20</span>
              </li>
              <li className="flex items-center justify-between p-md bg-white/50 rounded-xl hover:bg-white/70 transition-colors cursor-default">
                <div className="flex items-center gap-md">
                  <Wine className="w-5 h-5 text-ink" />
                  <span className="font-body-md text-body-md font-medium">Beverages</span>
                </div>
                <span className="font-body-md text-body-md">$82.30</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Analytics Section: Bento Style */}
      <section className="mb-section grid grid-cols-1 md:grid-cols-3 gap-lg">
        {/* Potential Savings Card */}
        <div className="bg-brand-lavender rounded-[24px] p-lg flex flex-col justify-between hover:-translate-y-1 transition-transform cursor-pointer shadow-sm">
          <div>
            <div className="flex justify-between items-start mb-md">
              <span className="p-sm bg-white/40 rounded-xl inline-block"><PiggyBank className="w-6 h-6 text-ink" /></span>
              <span className="bg-white/40 px-sm py-1 rounded-full font-label-caps text-[10px]">AI INSIGHT</span>
            </div>
            <h4 className="font-title-lg text-title-lg mb-sm">Potential Savings</h4>
            <p className="font-body-md text-body-md text-ink/80">Swap name-brand grains for bulk alternatives.</p>
          </div>
          <div className="mt-xl">
            <div className="text-display-sm font-display-sm text-ink">-$12.40</div>
            <p className="text-label-caps font-label-caps text-ink/60 mt-1">ESTIMATED WEEKLY REDUCTION</p>
            <button className="mt-md w-full bg-ink text-white py-sm rounded-xl font-button text-button hover:opacity-90 active:scale-95 transition-all">
              Apply Smart Swap
            </button>
          </div>
        </div>
        
        {/* Price Trends Card */}
        <div className="md:col-span-2 bg-white rounded-[24px] p-lg border border-hairline flex flex-col gap-lg shadow-sm">
          <div className="flex justify-between items-center">
            <h4 className="font-title-lg text-title-lg">Price Trends (30 Days)</h4>
            <div className="flex gap-xs items-center">
              <span className="w-3 h-3 rounded-full bg-brand-pink"></span>
              <span className="font-label-caps text-[10px]">MARKET PRICE</span>
            </div>
          </div>
          <div className="flex-grow flex items-end gap-md h-48 px-sm md:px-lg mt-auto">
            {/* Simple CSS bar chart visualization */}
            <div className="flex-1 bg-surface-container-highest rounded-t-lg h-[66%] hover:bg-surface-dim transition-colors cursor-pointer"></div>
            <div className="flex-1 bg-surface-container-highest rounded-t-lg h-[50%] hover:bg-surface-dim transition-colors cursor-pointer"></div>
            <div className="flex-1 bg-surface-container-highest rounded-t-lg h-[75%] hover:bg-surface-dim transition-colors cursor-pointer"></div>
            <div className="flex-1 bg-brand-pink rounded-t-lg h-[80%] shadow-lg shadow-brand-pink/20 relative cursor-pointer">
               <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-ink text-white text-xs px-2 py-1 rounded hidden hover-visible group-hover:block">Peak</div>
            </div>
            <div className="flex-1 bg-surface-container-highest rounded-t-lg h-[66%] hover:bg-surface-dim transition-colors cursor-pointer"></div>
            <div className="flex-1 bg-surface-container-highest rounded-t-lg h-[50%] hover:bg-surface-dim transition-colors cursor-pointer"></div>
            <div className="flex-1 bg-surface-container-highest rounded-t-lg h-[60%] hover:bg-surface-dim transition-colors cursor-pointer"></div>
          </div>
          <div className="flex justify-between font-label-caps text-[10px] text-secondary px-sm md:px-lg mt-2">
            <span>WEEK 1</span>
            <span>WEEK 2</span>
            <span>WEEK 3</span>
            <span>CURRENT</span>
          </div>
        </div>
        
        {/* Secondary Detail Cards */}
        <div className="bg-brand-ochre rounded-[24px] p-lg hover:-translate-y-1 transition-transform cursor-pointer shadow-sm">
          <h5 className="font-title-lg text-title-lg mb-md">Coupon Wallet</h5>
          <div className="bg-white/40 rounded-xl p-md border border-white/30 mb-md hover:bg-white/60 transition-colors">
            <div className="flex justify-between items-center mb-1">
              <span className="font-body-md font-bold">WHOLE FOODS</span>
              <span className="text-brand-pink font-bold">15% OFF</span>
            </div>
            <p className="font-body-md text-sm opacity-80">Exp: Tomorrow</p>
          </div>
          <button className="w-full border-2 border-ink py-sm rounded-xl font-button text-button hover:bg-ink hover:text-white transition-colors">
            View All (6)
          </button>
        </div>
        
        <div className="bg-brand-teal text-white rounded-[24px] p-lg flex flex-col justify-between hover:-translate-y-1 transition-transform shadow-sm">
          <h5 className="font-title-lg text-title-lg">Next Goal</h5>
          <div className="space-y-sm mt-auto">
            <p className="font-body-md text-body-md opacity-90 mb-2">Save $50 for a professional knife set</p>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-brand-ochre" style={{ width: '40%' }}></div>
            </div>
            <p className="font-label-caps text-[10px] mt-2 opacity-80">$20 / $50 REACHED</p>
          </div>
        </div>
        
        <div className="bg-white border border-hairline rounded-[24px] p-lg flex flex-col justify-center items-center text-center hover:bg-surface-container-low transition-colors cursor-pointer group shadow-sm">
          <Receipt className="w-12 h-12 text-brand-pink mb-md group-hover:scale-110 transition-transform" />
          <p className="font-title-lg text-title-lg">Snap Receipt</p>
          <p className="font-body-md text-body-md text-secondary mt-1">Instantly update your budget</p>
          <button className="mt-lg bg-ink text-white px-lg py-md rounded-xl font-button active:scale-95 transition-transform w-full">
            Open Camera
          </button>
        </div>
      </section>
    </div>
  );
}
