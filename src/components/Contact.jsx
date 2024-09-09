import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = ({ active }) => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_3nfvmh8', // ใส่ Service ID ของคุณ
            'template_fhcw43e', // ใส่ Template ID ของคุณ
            formData,
            'VIV_OSUZk0RNJYK-3' // ใส่ User ID ของคุณ
        ).then(
            (result) => {
                alert('ส่งข้อความเรียบร้อยแล้ว!');
            },
            (error) => {
                console.error('ส่งข้อความไม่สำเร็จ:', error.text);
            }
        );
    };

    return (
        <article className={active === "contact" ? "contact active" : "contact"} data-page="contact">
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>
            <section className="mapbox" data-mapbox>
                <figure>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9282.559487390918!2d98.9236424!3d19.0214542!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da168c9ad8fdbf%3A0xb3f4de687af92574!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4Lij4Liy4LiK4Lig4Lix4LiP4LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmIIOC4qOC4ueC4meC4ouC5jOC5geC4oeC5iOC4o-C4tOC4oQ!5e1!3m2!1sth!2sth!4v1725876921026!5m2!1sth!2sth"
                        width="400"
                        height="300"
                        loading="lazy"
                    ></iframe>
                </figure>
            </section>
            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>
                <form onSubmit={handleSubmit} className="form" data-form>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="fullname"
                            className="form-input"
                            placeholder="Full name"
                            required
                            onChange={handleChange}
                            value={formData.fullname}
                        />
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Email address"
                            required
                            onChange={handleChange}
                            value={formData.email}
                        />
                    </div>
                    <textarea
                        name="message"
                        className="form-input"
                        placeholder="Your Message"
                        required
                        onChange={handleChange}
                        value={formData.message}
                    ></textarea>
                    <button className="form-btn" type="submit">
                        <ion-icon name="paper-plane"></ion-icon>
                        <span>Send Message</span>
                    </button>
                </form>
            </section>
        </article>
    );
};

export default Contact;
