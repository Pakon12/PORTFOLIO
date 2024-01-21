import React from 'react';

const Contact = ({active}) => {
    return (
        <article className={active === "contact" ? "contact active" : "contact"} data-page="contact">
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>
            <section className="mapbox" data-mapbox>
                <figure>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4672.794722933767!2d99.12192722048962!3d16.901807266607566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ddd760e394ca5b%3A0x5f2671dd97a763e6!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lij4Liy4LiK4Lih4LiH4LiE4Lil4Lil4LmJ4Liy4LiZ4LiZ4LiyIOC4leC4suC4gQ!5e0!3m2!1sth!2sth!4v1705779823149!5m2!1sth!2sth"
                        width="400"
                        height="300"
                        loading="lazy"
                    ></iframe>
                </figure>
            </section>
            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>
                <form action="#" className="form" data-form>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="fullname"
                            className="form-input"
                            placeholder="Full name"
                            required
                            data-form-input
                        />
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Email address"
                            required
                            data-form-input
                        />
                    </div>
                    <textarea
                        name="message"
                        className="form-input"
                        placeholder="Your Message"
                        required
                        data-form-input
                    ></textarea>
                    <button className="form-btn" type="submit" disabled data-form-btn>
                        <ion-icon name="paper-plane"></ion-icon>
                        <span>Send Message</span>
                    </button>
                </form>
            </section>
        </article>
    );
};

export default Contact;
