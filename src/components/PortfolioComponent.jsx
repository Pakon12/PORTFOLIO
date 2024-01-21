import React, { useState } from 'react';

const Portfolio = ({active}) => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Function to handle filter button click
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <article className={active === "portfolio" ? "portfolio active" :"portfolio"} data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        <ul className="filter-list">
          {/* Map through the filters and render buttons */}
          {['All', 'Web design', 'Applications', 'Web development'].map((filter) => (
            <li className="filter-item" key={filter}>
              <button
                className={activeFilter === filter ? 'active' : ''}
                data-filter-btn
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>
        <ul className="project-list">
          {/* Replace the following project items with your actual project data */}
          <li className="project-item active" data-filter-item data-category="web development">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
                <img src="./assets/images/project-1.jpg" alt="finance" loading="lazy" />
              </figure>
              <h3 className="project-title">Finance</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
          {/* Repeat the above structure for each project item */}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
