function AppFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center py-6">
      <p>
        Copyright © Edward Vonschondorf {currentYear}, All rights reserved.
      </p>
    </footer>
  );
}

export default AppFooter;
