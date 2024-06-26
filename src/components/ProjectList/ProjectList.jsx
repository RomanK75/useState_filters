
import './projectlist.css'

export default function ProjectList({projects, active }) {
  let filtredProjects = projects;
  if (active !== 'All') {
    filtredProjects = projects.filter((project) => project.category === active);
  }

  return (
    <div className='projects-list'>
      <div className='columns'>
        {filtredProjects.map((project, index) => (
          <div className='project' key={index}>
            <img src={project.img} alt={project.category} />
          </div>
        ))}
      </div>
    </div>
  )
}
