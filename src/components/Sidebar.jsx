import React, { useState } from 'react';

const Sidebar = () => {
  const [isSidebarActive, setSidebarActive] = useState(false);

  const elementToggleFunc = () => {
    setSidebarActive((prev) => !prev);
  };
  return (
      <aside className={isSidebarActive ? "sidebar active" : "sidebar"} data-sidebar>
        <div className="sidebar-info">

          <figure className="avatar-box">
            <img src='./my-avatar.png' alt="Richard hanrick" width="80" />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Richard hanrick">Pakorn Archakeeree</h1>

            <p className="title">beginer Programmer</p>
          </div>

          <button className="info_more-btn" onClick={elementToggleFunc}>
            <span>Show Contacts</span>

            <ion-icon name={isSidebarActive ? "chevron-up" : "chevron-down"}></ion-icon>
          </button>

        </div>

        <div className="sidebar-info_more">

          <div className="separator"></div>

          <ul className="contacts-list">

            <li className="contact-item">

              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:richard@example.com" className="contact-link">pkorn8394@gmail.com</a>
              </div>

            </li>

            <li className="contact-item">

              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+12133522795" className="contact-link">+66 0807799594</a>
              </div>

            </li>

            <li className="contact-item">

              <div className="icon-box">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time datetime="1982-06-23">August 14, 2004</time>
              </div>

            </li>

            <li className="contact-item">

              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>tak city, tak, Thailand</address>
              </div>

            </li>

          </ul>

          <div className="separator"></div>

          <ul className="social-list">

            <li className="social-item">
              <a href="https://www.facebook.com/pakorn.ashakiri/" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

          </ul>

        </div>
      </aside>
    
  )
}

export default Sidebar
