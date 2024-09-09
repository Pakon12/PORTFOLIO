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
          {['All', 'Web development'].map((filter) => (
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
            <a href="https://attention-page.vercel.app/">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
                <img src="./assets/images/profile1.jpg" alt="finance" loading="lazy" />
              </figure>
              <h3 className="project-title">ร้าน attention console game.</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
          <li className="project-item active" data-filter-item data-category="web development">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
                <img src="./assets/images/profile2.jpg" alt="finance" loading="lazy" />
              </figure>
              <h3 className="project-title">เมนูอาหาร</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
          <li className="project-item active" data-filter-item data-category="web development">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
                <img src="./assets/images/profile3.jpg" alt="finance" loading="lazy" />
              </figure>
              <h3 className="project-title">การจัดการ</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
          <li className="project-item active" data-filter-item data-category="web development">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
                <img src="./assets/images/profile3-2.jpg" alt="finance" loading="lazy" />
              </figure>
              <h3 className="project-title">order</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
          <li className="project-item active" data-filter-item data-category="web development">
            <a href="#" >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
                <img src="./assets/images/profile5.jpg" alt="finance" loading="lazy" />
              </figure>
              <h3 className="project-title">การจัดการดาวเรือง</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
          <li className="project-item active" data-filter-item data-category="web development">
            <a href="https://table-study.vercel.app/">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
                <img src="./assets/images/profile6.jpg" alt="finance" loading="lazy" />
              </figure>
              <h3 className="project-title">การจัดการนักเรียน</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
          <li className="project-item active" data-filter-item data-category="web development">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
                <img src="./assets/images/profile4.jpg" alt="finance" loading="lazy" />
              </figure>
              <h3 className="project-title">โปรเจคเล่นๆ</h3>
              <p className="project-category">Mactchin Lerning</p>
            </a>
          </li>
          {/* Repeat the above structure for each project item */}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
