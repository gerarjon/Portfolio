import React, { Component } from 'react';
import projects from '../../data.json'
import SingleProject from '../SingleProject';
import './style.css'

class Projects extends Component {
  state = {
    background: '',
    title: 'Click a Project on the Side',
    github: '',
    link: '',
    image: '',
    logo: '',
    id: null
  }

  // Sets the default background image to Meme House
  componentDidMount() {
    this.setState({ 
      title: projects[0].title,
      link: projects[0].link,
      github: projects[0].github,
      background: process.env.PUBLIC_URL + "/assets/images/" + projects[0].image })
  }

  // Clicking on thumbnail changes the background image and links
  getProjectDetails = (event) => {
    event.preventDefault()
    let clickedProject = projects[parseInt(event.currentTarget.dataset.id)]
    console.log(clickedProject)
    this.setState(
      { 
        title: clickedProject.title, 
        id: clickedProject.id, 
        github: clickedProject.github, 
        link: clickedProject.link,
        image: clickedProject.image,
        background: process.env.PUBLIC_URL + "/assets/images/" + clickedProject.image,
        logo: clickedProject.logo,
      }
    )
  }

  render () {
    return (
      <section 
      id="projects" 
      className="section"
      >
        {/* Thumbnail Wrapper */}
        <div id="thumbnails-wrapper">
          <div id="outer-container">
            <div className="thumbScroller">
              <div className="container">
                <div className="content">
                  <SingleProject 
                  getProjectDetails={this.getProjectDetails}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Project Information and Background  */}
        <div id="project-container"
        style={{
          backgroundImage:`url(${this.state.background})`
          }}>
            <nav className="tabs">
              <div className="container">
                <ul>
                  {/* Title */}
                  <li>
                    <p className="is-size-4 has-text-white">{this.state.title}</p>
                  </li>
                  {/* GitHub */}
                  <li>
                    <a href={this.state.github} target="_blank" rel="noopener noreferrer" title="GitHub">Github</a>
                  </li>
                  {/* LinkedIn */}
                  <li>
                    <a href={this.state.link} target="_blank" rel="noopener noreferrer" title="Deployed">Deployed</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
      </section>
    )
  }
}

export default Projects;