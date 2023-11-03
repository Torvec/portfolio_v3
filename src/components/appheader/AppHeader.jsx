import AppLogo from './AppLogo';
import AppNav from './AppNav';
import ThemeToggle from './ThemeToggle';

function AppHeader() {
  return (
    <header className="flex justify-between items-center px-4 py-6 container m-auto">
      <AppLogo />
      <AppNav />
      <ThemeToggle />
    </header>
  );
}

export default AppHeader;
