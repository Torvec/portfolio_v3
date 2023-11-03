import {useState, useEffect} from 'react';

function FeaturedProjects() {
    let [featuredProjects, setFeaturedProjects] = useState([]);
    useEffect(() => {
        fetch('/api/projects')
        .then(response => response.json())
        .then(json => setFeaturedProjects(json.projects));
    }, []);
    
    return (
      <div className="min-h-screen bg-orange-500">
        <h1>Featured Projects</h1>
        <ul>
          {featuredProjects.map(project => (
            <li key={project.id}>{project.title}</li>
          ))}
        </ul>
      </div>
    );
}
export default FeaturedProjects;