import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3000/api/projects')
            .then(response => {
                setProjects(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="projects-container">
            <div className='min-h-[100vh] mt-[150px]'>
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <div key={project.id}>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            {project.imgUrl && <img src={project.imgUrl} alt={project.title} />}
                        </div>
                    ))
                ) : (
                    <p>No projects available</p>
                )}
            </div>
        </div>
    );
}

export default Projects;
