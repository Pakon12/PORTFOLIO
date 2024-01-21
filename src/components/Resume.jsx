import React from 'react'

const Resume = ({active}) => {
    const educationData = [
        {
          title: 'University school of the arts',
          dateRange: '2007 — 2008',
          description: 'Nemo enims ipsam voluptatem...',
        },
        {
          title: 'New york academy of art',
          dateRange: '2006 — 2007',
          description: 'Ratione voluptatem sequi nesciunt...',
        },
        {
          title: 'High school of art and design',
          dateRange: '2002 — 2004',
          description: 'Duis aute irure dolor in reprehenderit...',
        },
      ];

    const timelineData = [
        {
            title: 'Creative director',
            dateRange: '2015 — Present',
            description: 'Nemo enim ipsam voluptatem...',
        },
        {
            title: 'Art director',
            dateRange: '2013 — 2015',
            description: 'Nemo enims ipsam voluptatem...',
        },
        {
            title: 'Web designer',
            dateRange: '2010 — 2013',
            description: 'Nemo enims ipsam voluptatem...',
        },
    ];

    const skillsData = [
        { title: 'Graphic design', value: 70 },
        { title: 'Branding', value: 90 },
        { title: 'WordPress', value: 50 },
        // Add more skills as needed
    ];

    return (
        <article className={active === "resume" ? "resume active" : "resume"} data-page="resume">

            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>
            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <ion-icon name="book-outline"></ion-icon>
                    </div>
                    <h3 className="h3">Education</h3>
                </div>
                <ol className="timeline-list">
                    {educationData.map((item, index) => (
                        <li className="timeline-item" key={index}>
                            <h4 className="h4 timeline-item-title">{item.title}</h4>
                            <span>{item.dateRange}</span>
                            <p className="timeline-text">{item.description}</p>
                        </li>
                    ))}
                </ol>
            </section>
            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <ion-icon name="book-outline"></ion-icon>
                    </div>
                    <h3 className="h3">Experience</h3>
                </div>
                <ol className="timeline-list">
                    {timelineData.map((item, index) => (
                        <li className="timeline-item" key={index}>
                            <h4 className="h4 timeline-item-title">{item.title}</h4>
                            <span>{item.dateRange}</span>
                            <p className="timeline-text">{item.description}</p>
                        </li>
                    ))}
                </ol>
            </section>
            <section className="skill">
                <h3 className="h3 skills-title">My skills</h3>
                <ul className="skills-list content-card">
                    {skillsData.map((skill, index) => (
                        <li className="skills-item" key={index}>
                            <div className="title-wrapper">
                                <h5 className="h5">{skill.title}</h5>
                                <data value={skill.value}>{skill.value}%</data>
                            </div>
                            <div className="skill-progress-bg">
                                <div className="skill-progress-fill" style={{ width: `${skill.value}%` }}></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

        </article>
    )
}

export default Resume
