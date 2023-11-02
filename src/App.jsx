import './App.css';
import './server';
import AppHeader from './components/appheader/AppHeader';
import { Routes, Route } from 'react-router-dom';
import { Home, Resume, Portfolio, Project, Socials, Blog } from './pages';
import AppFooter from './components/AppFooter';


function App() {
  return (
    <>
      <AppHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:project_id" element={<Project />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <AppFooter />
    </>
  );
}

export default App;
