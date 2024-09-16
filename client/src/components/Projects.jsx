import React from 'react'

<<<<<<< HEAD
function Projects() {
  return (
    <div>Projects</div>
  )
}

export default Projects

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Projects = () => {
//     const [projects, setProjects] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:3000/')
//             .then(response => {
//                 // Отримали дані про проекти з сервера
//                 const projectsData = response.data;
//                 // Перетворюємо об'єкт у масив
//                 const projectsArray = Object.values(projectsData);

//                 // Зберігаємо отриманий масив проектів у стані компонента
//                 setProjects(projectsArray);
//                 console.log(projects)
//             })
//             .catch(error => {
//                 console.error('Error fetching projects:', error);
//             });
//     }, []);

//     return (
//         <div className="projects-container">
//             <div className='min-h-[100vh] mt-[150px]'>

//                 {projects.map((project) => {
//                     <div key={project._id}>{project.title}</div>
//                 })}
//             </div>
//             {/* {projects.map((project) => (
//                 <div key={project._id} className="project">
                  
//                     <h3>{project._id}</h3>

//                 </div>
//             ))} */}
//         </div>
//     );
// }

// export default Projects;

=======
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
>>>>>>> 7eb299f43217556ba63e8a7df0d97cc734d29822
