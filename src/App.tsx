import { useState } from 'react';
import { ViewMode } from './types';
import { TopNav } from './components/TopNav';
import { Footer } from './components/Footer';
import { RecipeView } from './components/RecipeView';
import { SubstituteView } from './components/SubstituteView';
import { BudgetView } from './components/BudgetView';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>(ViewMode.Recipe);

  const renderView = () => {
    switch (currentView) {
      case ViewMode.Recipe:
        return <RecipeView />;
      case ViewMode.Substitutes:
        return <SubstituteView />;
      case ViewMode.Budget:
        return <BudgetView />;
      default:
        return <RecipeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-peach selection:text-ink">
      <TopNav currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-grow max-w-max-width mx-auto px-lg w-full">
        {renderView()}
      </main>

      <Footer />
    </div>
  );
}
