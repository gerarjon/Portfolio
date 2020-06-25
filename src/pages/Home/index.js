import React, { Component } from 'react';
import './index.css'

class Home extends Component {
  render() {
    return (
      <section id="home" className="hero is-medium">
        
        {/* Hero Body  */}
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Gerar Suaverdez
            </h1>
            <h1 className="subtitle">
              Full Stack
            </h1>
            <h1 className="subtitle">
              Web Developer
            </h1>
          </div>

          {/* Tabs */}
          <nav className="tabs">
            <div className="container">
              <ul>
                {/* GitHub */}
                <li>
                  <a href="https://github.com/gerarjon" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fab fa-github fa-2x"></i></a>
                </li>
                {/* LinkedIn */}
                <li>
                  <a href="https://www.linkedin.com/in/gerar-suaverdez-002351177/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin fa-2x"></i></a>
                </li>
                {/* Instagram */}
                <li>
                  <a href="https://instagram.com/gerarjon" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="fab fa-instagram fa-2x"></i></a>
                </li>
                {/* Email */}
                <li>
                  <a href="mailto:@gerarsuaverdez@gmail.com" title="Email"><i className="fas fa-envelope fa-2x"></i></a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

      </section>
    )
  }
}

export default Home;