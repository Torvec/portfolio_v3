import AppLogo from './AppLogo';
import AppNav from './AppNav';
import ThemeToggle from './ThemeToggle';

function AppHeader() {
  return (
    <header className="flex justify-between px-4 py-6 bg-slate-100">
      <AppLogo />
      <AppNav />
      <ThemeToggle />
    </header>
  );
}

export default AppHeader;
