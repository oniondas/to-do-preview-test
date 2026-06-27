import { Search, ChevronRight, ArrowRight, Circle, Droplets, Utensils } from 'lucide-react';

export function SubstituteView() {
  return (
    <div className="w-full animation-fade-in pb-section">
      {/* Hero Section */}
      <section className="py-section grid grid-cols-1 md:grid-cols-12 gap-xl items-center pt-xl">
        <div className="md:col-span-7">
          <h1 className="font-display-xl text-display-xl text-ink mb-md">The Ingredient Switchboard</h1>
          <p className="font-title-lg text-title-lg text-secondary max-w-xl">
            Missing a pinch of that or a cup of this? Our playful switchboard helps you find the perfect swap without losing the soul of your dish.
          </p>
          <div className="mt-xl flex gap-md">
            <span className="bg-brand-ochre text-ink px-md py-xs rounded-full font-label-caps text-label-caps">2,400+ SWAPS</span>
            <span className="bg-brand-pink text-white px-md py-xs rounded-full font-label-caps text-label-caps">BAKING READY</span>
          </div>
        </div>
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-full aspect-square max-w-md">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAVnnThBYNNN2mLCV8RY0UQdUW2js61TwZCf3b8o3ozjy8XyRVbD36iRO5J8DSfzy6UFG0V7uqlmetvOSPhFFUPAV4PJe2p5SXnGjb5Dtp4mqAQBcFmhyNYMVVbrBwFQbKjIztFj8nIu468ZsZbSvOiCxQvxgoDzLIrtVeeIgVlfJu8yhiVDKtkkH5s9tboyCTSBdsNY7FIcxF8yHkXtYgV5RcJwm-kfGBTvmVPIUKE4pDJ5BEHhlCQDyjJzgrxhSVpjg0kwktCq8" 
              alt="Avocado and Butter Swap" 
              className="w-full h-full object-contain clay-shadow"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Main Swap Tool */}
      <section className="mb-section">
        <div className="bg-brand-lavender rounded-[24px] p-xl md:p-[48px] relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-xl items-start">
            <div>
              <h2 className="font-display-lg text-display-lg text-ink mb-lg">What are we swapping?</h2>
              <div className="relative max-w-md group bg-white rounded-xl">
                <input 
                  type="text" 
                  placeholder="Search ingredient (e.g. Greek Yogurt)" 
                  className="w-full bg-transparent border-none rounded-[12px] py-md px-lg font-body-md text-ink focus:outline-none focus:ring-2 focus:ring-ink transition-all"
                />
                <div className="absolute right-md top-1/2 -translate-y-1/2 text-secondary">
                  <Search className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            {/* Swap Result Mockup */}
            <div className="space-y-md">
              <div className="bg-canvas/60 backdrop-blur-md border border-white/40 p-lg rounded-xl">
                <div className="flex items-center justify-between mb-md">
                  <div className="flex items-center gap-sm">
                    <div className="w-10 h-10 rounded-full bg-brand-teal flex items-center justify-center text-white">
                      <Utensils className="w-5 h-5" />
                    </div>
                    <span className="font-title-lg text-title-lg">Sour Cream</span>
                  </div>
                  <span className="font-label-caps text-label-caps bg-ink text-white px-sm py-1 rounded-full">BEST MATCH</span>
                </div>
                <div className="grid grid-cols-2 gap-md">
                  <div className="space-y-xs">
                    <span className="font-label-caps text-label-caps text-secondary">PROS</span>
                    <p className="font-body-md text-body-md text-ink leading-tight">• Identical tanginess<br/>• Perfect texture</p>
                  </div>
                  <div className="space-y-xs">
                    <span className="font-label-caps text-label-caps text-secondary">CONS</span>
                    <p className="font-body-md text-body-md text-ink leading-tight">• Higher fat content<br/>• Less protein</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-canvas/30 backdrop-blur-sm border border-white/20 p-lg rounded-xl opacity-70 cursor-pointer hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-sm">
                    <div className="w-10 h-10 rounded-full bg-brand-peach flex items-center justify-center text-white">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <span className="font-title-lg text-title-lg">Heavy Cream + Lemon</span>
                  </div>
                  <ChevronRight className="w-6 h-6 text-ink/50" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/30 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </section>

      {/* Common Substitutions Grid */}
      <section className="py-section border-t border-hairline/50">
        <div className="flex items-end justify-between mb-xl">
          <div>
            <span className="font-label-caps text-label-caps text-secondary mb-xs block">QUICK REFERENCES</span>
            <h2 className="font-display-md text-display-md text-ink">The Pantry Essentials</h2>
          </div>
          <button className="flex items-center gap-xs font-button text-button text-ink hover:underline">
            View all categories <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {/* Card 1 */}
          <div className="bg-brand-peach rounded-[24px] p-lg flex flex-col h-full transform transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
            <div className="mb-xl">
              <Circle className="w-12 h-12 text-ink" />
            </div>
            <h3 className="font-display-sm text-display-sm text-ink mb-sm">Egg Swaps</h3>
            <ul className="space-y-md mt-auto">
              <li className="flex items-center justify-between border-b border-ink/10 pb-sm">
                <span className="font-body-md text-body-md">Applesauce</span>
                <span className="font-label-caps text-label-caps">1/4 CUP</span>
              </li>
              <li className="flex items-center justify-between border-b border-ink/10 pb-sm">
                <span className="font-body-md text-body-md">Flax Meal</span>
                <span className="font-label-caps text-label-caps">1 TBSP</span>
              </li>
              <li className="flex items-center justify-between border-b border-ink/10 pb-sm">
                <span className="font-body-md text-body-md">Mashed Banana</span>
                <span className="font-label-caps text-label-caps">1/2 FRUIT</span>
              </li>
            </ul>
          </div>
          
          {/* Card 2 */}
          <div className="bg-brand-lavender rounded-[24px] p-lg flex flex-col h-full transform transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
            <div className="mb-xl">
              <Droplets className="w-12 h-12 text-ink" />
            </div>
            <h3 className="font-display-sm text-display-sm text-ink mb-sm">Dairy Swaps</h3>
            <ul className="space-y-md mt-auto">
              <li className="flex items-center justify-between border-b border-ink/10 pb-sm">
                <span className="font-body-md text-body-md">Oat Milk</span>
                <span className="font-label-caps text-label-caps">1:1 RATIO</span>
              </li>
              <li className="flex items-center justify-between border-b border-ink/10 pb-sm">
                <span className="font-body-md text-body-md">Coconut Milk</span>
                <span className="font-label-caps text-label-caps">CREAMY</span>
              </li>
              <li className="flex items-center justify-between border-b border-ink/10 pb-sm">
                <span className="font-body-md text-body-md">Cashew Cream</span>
                <span className="font-label-caps text-label-caps">DIY</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-brand-ochre rounded-[24px] p-lg flex flex-col h-full transform transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
            <div className="mb-xl">
              <Utensils className="w-12 h-12 text-ink" />
            </div>
            <h3 className="font-display-sm text-display-sm text-ink mb-sm">Spice Swaps</h3>
            <ul className="space-y-md mt-auto">
              <li className="flex items-center justify-between border-b border-ink/10 pb-sm">
                <span className="font-body-md text-body-md">Cumin / Coriander</span>
                <span className="font-label-caps text-label-caps">EARTHY</span>
              </li>
              <li className="flex items-center justify-between border-b border-ink/10 pb-sm">
                <span className="font-body-md text-body-md">Honey / Agave</span>
                <span className="font-label-caps text-label-caps">SWEET</span>
              </li>
              <li className="flex items-center justify-between border-b border-ink/10 pb-sm">
                <span className="font-body-md text-body-md">Lemon / Vinegar</span>
                <span className="font-label-caps text-label-caps">ACID</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Dynamic CTA */}
      <section className="py-section text-center max-w-2xl mx-auto">
        <h2 className="font-display-lg text-display-lg mb-md">Can't find it?</h2>
        <p className="font-body-md text-body-md text-secondary mb-xl">
          Our kitchen experts are always testing new combinations. Drop us a line or browse our community-led substitute laboratory.
        </p>
        <div className="flex flex-col md:flex-row gap-md justify-center">
          <button className="bg-ink text-white px-xl py-md rounded-xl font-button text-button hover:bg-black transition-colors">Ask the Chef</button>
          <button className="border-2 border-ink text-ink px-xl py-md rounded-xl font-button text-button hover:bg-ink hover:text-white transition-colors">Join the Lab</button>
        </div>
      </section>
    </div>
  );
}
