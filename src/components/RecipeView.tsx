import { useState } from 'react';
import { Clock, BarChart, Users, ShoppingBasket, Activity, Flame, Search, Utensils, Timer, PlayCircle } from 'lucide-react';

export function RecipeView() {
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({});

  const toggleStep = (index: number) => {
    setCheckedSteps(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const steps = [
    {
      title: "Marinate the Chicken",
      desc: "Combine yogurt, ginger-garlic paste, biryani masala, and lemon juice. Coat chicken pieces thoroughly and refrigerate for at least 30 minutes."
    },
    {
      title: "Par-boil the Rice",
      desc: "Boil basmati rice with whole spices (cloves, cardamom, cinnamon) until it's 70% cooked. Drain and set aside."
    },
    {
      title: "Sauté Aromatics",
      desc: "In a heavy-bottomed pot, fry thinly sliced onions until golden brown (birista). Set half aside for garnish."
    },
    {
      title: "Layering (Dum)",
      desc: "Layer the marinated chicken, followed by par-boiled rice. Top with saffron milk, ghee, and reserved fried onions."
    },
    {
      title: "Final Steaming",
      desc: "Seal the pot with dough or a tight lid. Cook on low heat (Dum) for 20-25 minutes until chicken is tender."
    }
  ];

  return (
    <div className="w-full animation-fade-in pb-section">
      {/* Hero Section */}
      <section className="mb-section pt-xl">
        <div className="bg-brand-ochre rounded-2xl p-xl md:p-section flex flex-col md:flex-row items-center gap-xl relative overflow-hidden">
          <div className="w-full md:w-7/12 z-10">
            <div className="mb-md">
              <span className="inline-block px-md py-1 bg-ink text-white rounded-full font-label-caps text-label-caps tracking-widest">MAIN COURSE</span>
            </div>
            <h1 className="font-display-lg text-display-lg md:text-display-xl text-ink mb-md">Chicken Biryani</h1>
            <p className="font-body-md text-ink/80 max-w-xl text-lg leading-relaxed">
              A fragrant, layered celebration of spiced basmati rice, tender marinated chicken, and aromatic herbs. This clay-pot inspired recipe brings the heart of Mughlai cuisine straight to your digital kitchen.
            </p>
            <div className="mt-xl flex flex-wrap gap-md">
              <div className="flex items-center gap-xs bg-white/30 backdrop-blur-sm px-md py-sm rounded-xl">
                <Clock className="w-5 h-5 text-ink" />
                <span className="font-button text-ink">45 Mins</span>
              </div>
              <div className="flex items-center gap-xs bg-white/30 backdrop-blur-sm px-md py-sm rounded-xl">
                <BarChart className="w-5 h-5 text-ink" />
                <span className="font-button text-ink">Intermediate</span>
              </div>
              <div className="flex items-center gap-xs bg-white/30 backdrop-blur-sm px-md py-sm rounded-xl">
                <Users className="w-5 h-5 text-ink" />
                <span className="font-button text-ink">4 Servings</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12 flex justify-center items-center">
            <div className="relative w-full aspect-square md:aspect-auto">
              <img 
                src="https://lh3.googleusercontent.com/aida/AP1WRLt8pfTlAEgdhGWu2t4sI0-35qxMthlnnZL9Ti-TZG34gxIQCG-ZfheBKb2pPWLHoWVFFamflY0BqDgZDtFSutzcZXgovBD5NqxlJIfewGrxmoUUrB5ihCtQp1pZ92tT818HXYckZ7fKK7XTwENx3RLBbrHSmPjb78bb_C8KESo80b-HmA4I-RlM0CxLTHxqnJIcwCS-sEWE_V4imS2nMAgyJafpnF_YK1GfjawNQI7O9fQF3Xe69tZ9YTI" 
                alt="Chicken Biryani Hero" 
                className="w-full h-auto object-contain scale-110 clay-shadow"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detail Grid */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-xl items-start">
        
        {/* Left Column: Cooking Steps */}
        <div className="md:col-span-7 bg-white rounded-2xl p-xl border border-hairline">
          <div className="flex items-center justify-between mb-xl">
            <h2 className="font-display-sm text-display-sm text-ink">Cooking Steps</h2>
            <span className="text-secondary font-label-caps tracking-widest">08 STAGES</span>
          </div>
          
          <div className="space-y-lg">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-md group">
                <div className="flex flex-col items-center">
                  <input 
                    type="checkbox" 
                    id={`step-${idx}`}
                    checked={!!checkedSteps[idx]}
                    onChange={() => toggleStep(idx)}
                    className="w-6 h-6 rounded-full border-2 border-brand-ochre text-brand-ochre focus:ring-brand-ochre appearance-none checked:bg-brand-ochre cursor-pointer transition-colors relative before:content-[''] checked:before:absolute checked:before:inset-0 checked:before:bg-brand-ochre checked:before:rounded-full"
                  />
                  {idx !== steps.length - 1 && (
                    <div className="w-px h-full bg-hairline mt-2"></div>
                  )}
                </div>
                <label 
                  htmlFor={`step-${idx}`} 
                  className={`pb-lg flex-1 cursor-pointer transition-opacity ${checkedSteps[idx] ? 'opacity-50 line-through' : ''}`}
                >
                  <span className="block font-title-lg text-ink mb-xs">{step.title}</span>
                  <p className="text-secondary leading-relaxed font-body-md text-body-md">{step.desc}</p>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Info Stack */}
        <div className="md:col-span-3 flex flex-col gap-xl">
          
          {/* Ingredients Card */}
          <div className="bg-brand-lavender rounded-2xl p-lg border border-ink/5">
            <div className="flex items-center gap-sm mb-lg">
              <ShoppingBasket className="w-6 h-6 text-ink" />
              <h3 className="font-title-lg text-ink">Ingredients</h3>
            </div>
            <ul className="space-y-sm">
              <li className="flex items-center justify-between py-2 border-b border-ink/10 font-body-md">
                <span className="text-ink">Chicken Thighs</span>
                <span className="font-bold">500g</span>
              </li>
              <li className="flex items-center justify-between py-2 border-b border-ink/10 font-body-md">
                <span className="text-ink">Basmati Rice</span>
                <span className="font-bold">2 Cups</span>
              </li>
              <li className="flex items-center justify-between py-2 border-b border-ink/10 font-body-md">
                <span className="text-ink">Greek Yogurt</span>
                <span className="font-bold">1/2 Cup</span>
              </li>
              <li className="flex items-center justify-between py-2 border-b border-ink/10 font-body-md">
                <span className="text-ink">Red Onion</span>
                <span className="font-bold">2 Large</span>
              </li>
              <li className="flex items-center justify-between py-2 font-body-md">
                <span className="text-ink text-sm italic">+ Spices & Herbs</span>
              </li>
            </ul>
          </div>

          {/* Nutritional Facts Card */}
          <div className="bg-brand-teal rounded-2xl p-lg text-white">
            <div className="flex items-center gap-sm mb-lg">
              <Activity className="w-6 h-6" />
              <h3 className="font-title-lg">Nutrition</h3>
            </div>
            <div className="grid grid-cols-2 gap-md">
              <div className="p-md bg-white/10 rounded-xl text-center">
                <span className="block font-display-sm text-display-sm">450</span>
                <span className="font-label-caps text-label-caps opacity-80">CALORIES</span>
              </div>
              <div className="p-md bg-white/10 rounded-xl text-center">
                <span className="block font-display-sm text-display-sm">32g</span>
                <span className="font-label-caps text-label-caps opacity-80">PROTEIN</span>
              </div>
              <div className="p-md bg-white/10 rounded-xl text-center">
                <span className="block font-display-sm text-display-sm">54g</span>
                <span className="font-label-caps text-label-caps opacity-80">CARBS</span>
              </div>
              <div className="p-md bg-white/10 rounded-xl text-center">
                <span className="block font-display-sm text-display-sm">18g</span>
                <span className="font-label-caps text-label-caps opacity-80">FAT</span>
              </div>
            </div>
          </div>

          {/* Appliances Needed Card */}
          <div className="bg-brand-peach rounded-2xl p-lg border border-ink/5">
            <div className="flex items-center gap-sm mb-lg">
              <Flame className="w-6 h-6 text-ink" />
              <h3 className="font-title-lg text-ink">Appliances</h3>
            </div>
            <div className="flex flex-wrap gap-sm">
              <div className="flex items-center gap-xs bg-ink/10 px-sm py-1 rounded-full">
                <span className="text-sm font-medium">Deep Pot</span>
              </div>
              <div className="flex items-center gap-xs bg-ink/10 px-sm py-1 rounded-full">
                <span className="text-sm font-medium">Grinder</span>
              </div>
              <div className="flex items-center gap-xs bg-ink/10 px-sm py-1 rounded-full">
                <Timer className="w-4 h-4" />
                <span className="text-sm font-medium">Timer</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Pre-footer CTA */}
      <div className="w-full bg-footer-cream py-section mt-section rounded-2xl text-center">
        <h2 className="font-display-md text-display-md text-ink mb-xl">Ready to turn up the heat?</h2>
        <button className="bg-ink text-white px-xl py-lg rounded-2xl font-button text-lg flex items-center gap-md mx-auto hover:scale-105 transition-transform">
          Start Cooking Now
          <PlayCircle className="w-6 h-6" />
        </button>
        <p className="mt-md text-secondary font-body-md italic">Interactive mode will guide you through every step with voice commands.</p>
      </div>
    </div>
  );
}
