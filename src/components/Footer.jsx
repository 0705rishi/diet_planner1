function Footer() {
  return (
    <footer className="bg-surface-container-highest border-t border-outline-variant mt-12">
      <div className="w-full py-12 px-4 lg:px-10 max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">lens_blur</span>
            <span className="text-2xl font-black text-primary">NutriGlass</span>
          </div>
          <p className="text-sm text-on-surface-variant text-center md:text-left max-w-xs">
            © 2024 NutriGlass Premium. All rights reserved. Crafted for health-conscious living.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="text-on-surface-variant hover:text-secondary transition-colors text-sm" href="#">
            Privacy Policy
          </a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors text-sm" href="#">
            Terms of Service
          </a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors text-sm" href="#">
            Cookie Policy
          </a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors text-sm" href="#">
            Support Center
          </a>
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-outline-variant/30 hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined">public</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-outline-variant/30 hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined">smartphone</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
