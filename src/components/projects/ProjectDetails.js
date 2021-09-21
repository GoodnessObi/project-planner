import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut saepe porro molestias reiciendis nam ipsum, dolor sit, fuga, ipsa autem at doloribus et reprehenderit magnam temporibus! Quidem eaque reiciendis, harum rem quibusdam praesentium cum voluptates enim? Necessitatibus delectus cupiditate dolorum, officiis modi mollitia? Veritatis qui nisi labore veniam! Alias, accusantium!</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Goody</div>
          <div>3rd Sept, 3am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
