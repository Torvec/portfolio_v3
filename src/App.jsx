import './App.css';
import './server/server';
import AppHeader from './components/appheader/AppHeader';
import { Routes, Route } from 'react-router-dom';
import { Home, Resume, Portfolio, Project, Socials, Blog } from './pages';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <div className="flex h-screen flex-col bg-gray-50">
      <AppHeader />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
