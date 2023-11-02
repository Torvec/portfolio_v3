import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Resume, Portfolio, Project, Socials, Blog } from './pages';
import './server';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/:project_id" element={<Project />} />
      <Route path="/socials" element={<Socials />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
