
import './projectlist.css'

export default function ProjectList({projects, active }) {

  return (
    <div className='projects-list'>
      <div className='columns'>
        {active === 'All'? projects.map((project, index) => (
          <div className='project' key={index}>
            <img src={project.img} alt={project.category} />
          </div>
        )) : projects.filter((project) => project.category === active).map((project, index) => (
          <div className='project' key={index}>
            <img src={project.img} alt={project.category} />
          </div>
        ))}
      </div>
    </div>
  )
}
