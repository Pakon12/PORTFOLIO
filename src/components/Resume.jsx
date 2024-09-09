import React from 'react'

const Resume = ({active}) => {
    const educationData = [
        {
          title: 'มหาวิทยาลัยราชภัฏเชียงใหม่ ศูนย์แม่ริม',
          dateRange: '2024 — ปัจจุบัน',
          description: 'คอมพิวเตอร์ศึกษา แต่ชอบเขียนโปรแกมมากๆ',
        },
        {
          title: 'มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา ตาก',
          dateRange: '2022 — 2024',
          description: 'วิศกรรมไฟฟ้า แต่เรียนไม่จบ เพราะไม่ชอบ เลยชิวมาเรียนใหม่ ชอบเขียนโปรแกรมมากกว่าเลยมาเรียนคอมพิวเตอร์',
        },
        {
          title: 'โรงเรียนพบพระวิทยาคม',
          dateRange: '2019 — 2022',
          description: 'เรียนสายวิทย์ - คณิต',
        },
      ];

    const timelineData = [
        {
            title: 'Web App จัดการดาวเรือง',
            dateRange: '2024',
            description: 'มีระบบการจัดการดาวเรืองและนับจำนวนดาวเรือง และระบบคำนวนตังให้ลูกน้องแต่ละคน',
        },
        {
            title: 'Web App สั่งอาหาร',
            dateRange: '2024',
            description: 'มีจัดการอาหารเพิ่มลบอาหาร มีระบบOrder รับOrder',
        },
        {
            title: 'Web App จองห้องเล่นเกม',
            dateRange: '2024',
            description: 'มีระบบการจองห้องเล่นเกม และโต๊ะเล่นเกม และการจัดการระบบคิว',
        },
    ];

    const skillsData = [
        { title: 'ชอบเรียนรู้อยู่เสมอ , เรียนรู้ด้วยตนเอง', value: 80 },
        { title: 'React', value: 70 },
        { title: 'Node.Js', value: 60 },
        { title: 'express', value: 70 },
        { title: 'HTML CSS JS', value: 60 },
        { title: 'Python', value: 75 },
        { title: 'RestFul API', value: 60 },
        { title: 'Mongodb', value: 60 },
        { title: 'bootstrap , tailwind', value: 50 },
        { title: 'อื่นๆ', value: 40 },
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
