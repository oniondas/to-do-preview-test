export function Footer() {
  return (
    <footer className="w-full bg-footer-cream rounded-t-[40px] mt-section">
      <div className="flex flex-col md:flex-row justify-between items-center px-lg py-xl max-w-max-width mx-auto">
        <div className="mb-lg md:mb-0 text-center md:text-left">
          <div className="font-display-sm text-display-sm font-semibold text-ink">DailyBite</div>
          <p className="text-secondary font-body-md text-body-md mt-xs">© 2024 DailyBite. Hand-crafted for your kitchen.</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-lg">
          <a href="#" className="text-secondary font-body-md text-body-md hover:text-ink transition-colors">Privacy</a>
          <a href="#" className="text-secondary font-body-md text-body-md hover:text-ink transition-colors">Terms</a>
          <a href="#" className="text-secondary font-body-md text-body-md hover:text-ink transition-colors">Support</a>
          <a href="#" className="text-secondary font-body-md text-body-md hover:text-ink transition-colors">Careers</a>
        </nav>
      </div>
    </footer>
  );
}
