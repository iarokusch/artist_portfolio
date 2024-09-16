import React from 'react'

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

