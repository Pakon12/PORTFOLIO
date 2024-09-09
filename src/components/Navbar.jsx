import React from 'react';

const Navbar = (props) => {
    const handleButtonClick = (activeKey) => {
        // Use the activeKey to dynamically set the state based on the clicked button
        props.setActive(activeKey);
    };

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <button
                        className={props.active === 'about' ? 'navbar-link active' : 'navbar-link'}
                        data-nav-link
                        onClick={() => handleButtonClick('about')}
                    >
                        About
                    </button>
                </li>


                <li className="navbar-item">
                    <button
                        className={props.active === 'resume' ? 'navbar-link active' : 'navbar-link'}
                        data-nav-link
                        onClick={() => handleButtonClick('resume')}
                    >
                        Resume
                    </button>
                </li>

                <li className="navbar-item">
                    <button
                        className={props.active === 'portfolio' ? 'navbar-link active' : 'navbar-link'}
                        data-nav-link
                        onClick={() => handleButtonClick('portfolio')}
                    >
                        Portfolio
                    </button>
                </li>  

                <li className="navbar-item">
                    <button
                        className={props.active === 'contact' ? 'navbar-link active' : 'navbar-link'}
                        data-nav-link
                        onClick={() => handleButtonClick('contact')}
                    >
                        Contact
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
