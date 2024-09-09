import React, { useState } from 'react'

const About = ({ active }) => {

  return (
    <article className={active === "about" ? "about active" : "about"} data-page="about">
      <header>
        <h2 className="h2 article-title" >About me</h2>
      </header>

      <section className="about-text">
        <p>
          ตั้งแต่เด็ก ผมชอบเขียนโปรแกรมมาโดยตลอด แต่ด้วยความที่ผมเติบโตมาในชนบท ทำให้ไม่มีโอกาสได้เรียนรู้มากนัก จนกระทั่งผมได้เข้าร่วมการแข่งขันคอมพิวเตอร์ตอนอยู่มัธยมต้น การแข่งขันครั้งนั้นทำให้ผมค้นพบความหลงใหลในตัวเอง ตั้งแต่นั้นผมก็ตั้งใจศึกษาด้านนี้มาโดยตลอด จนเมื่อเข้าสู่มัธยมปลาย ผมมีคอมพิวเตอร์เป็นของตัวเอง และได้ฝึกฝนทักษะการเขียนโปรแกรมอย่างจริงจัง ซึ่งผมยังคงพัฒนาความสามารถเรื่อยมาจนถึงปัจจุบัน
        </p>

       
      </section>
      <section className="service">

        <h3 className="h3 service-title">What I am studying</h3>

        <ul className="service-list">

          <li className="service-item">

            <div className="service-icon-box">
              <img src="./assets/images/icon-design.svg" alt="design icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web design</h4>

              <p className="service-item-text">
              การออกแบบเว็บที่สวยและมีคุณภาพสูงที่สุดในระดับมืออาชีพ
              </p>
            </div>

          </li>

          <li className="service-item">

            <div className="service-icon-box">
              <img src="./assets/images/icon-dev.svg" alt="Web development icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>

              <p className="service-item-text">
              การพัฒนาเว็บไซต์ให้มีคุณภาพสูงในระดับมืออาชีพ
              </p>
            </div>

          </li>

          <li className="service-item">

            <div className="service-icon-box">
              <img src="./assets/images/icon-app.svg" alt="mobile app icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web apps</h4>

              <p className="service-item-text">
                การพัฒนาเว็บแอพพลิเคชันระดับมืออาชีพ
              </p>
            </div>

          </li>

          <li className="service-item">

            <div className="service-icon-box">
              <img src="./assets/images/icon-ai.svg" alt="camera icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Matching Learning</h4>

              <p className="service-item-text">
               ทำโมเดล Deep Learning ต่างๆ และคณิตของ AI เช่น CNN RNN GANs. 
              </p>
            </div>

          </li>

        </ul>

      </section>
    </article>
  )
}

export default About
