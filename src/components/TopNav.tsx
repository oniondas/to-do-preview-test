import { UserCircle } from 'lucide-react';
import { ViewMode } from '../types';

interface TopNavProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export function TopNav({ currentView, onViewChange }: TopNavProps) {
  const getNavClass = (viewName: ViewMode) => {
    const isActive = currentView === viewName;
    return `font-display-sm text-display-sm cursor-pointer transition-colors ${
      isActive 
        ? 'text-ink border-b-2 border-ink pb-1' 
        : 'text-secondary hover:text-ink'
    }`;
  };

  return (
    <header className="w-full top-0 sticky z-50 bg-canvas/80 backdrop-blur-md border-b border-hairline/30">
      <nav className="flex justify-between items-center w-full px-lg py-md max-w-max-width mx-auto h-xl">
        <div className="font-display-sm text-display-sm font-bold text-ink cursor-pointer" onClick={() => onViewChange(ViewMode.Recipe)}>
          DailyBite
        </div>
        
        <div className="hidden md:flex items-center gap-xl">
          <button onClick={() => onViewChange(ViewMode.Recipe)} className={getNavClass(ViewMode.Recipe)}>Plan</button>
          <button onClick={() => onViewChange(ViewMode.Recipe)} className={getNavClass(ViewMode.Recipe)}>Grocery</button>
          <button onClick={() => onViewChange(ViewMode.Substitutes)} className={getNavClass(ViewMode.Substitutes)}>Substitutes</button>
          <button onClick={() => onViewChange(ViewMode.Budget)} className={getNavClass(ViewMode.Budget)}>Budget</button>
        </div>

        <div className="flex items-center gap-md">
          <button className="bg-ink text-white font-button text-button px-lg py-sm rounded-xl active:translate-y-[2px] transition-transform hidden sm:block">
            Sign In
          </button>
          <button className="p-xs rounded-full hover:bg-surface-container-low transition-all sm:hidden">
            <UserCircle className="w-6 h-6 text-ink" />
          </button>
        </div>
      </nav>
    </header>
  );
}
