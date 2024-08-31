import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import hero from "./hero.png";
const Header =()=>{
    return (
        <>
            <div className="header">
            <nav>
            <div className="logo"><img src={logo}/>Clients<span>Vioce</span></div>
            <ul className="nav-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
            </div>
        </>
    )
}

const Hero=()=>{
    return (<section className="hero">
        <div className="hero-content">
            <h1>Showcase Your Customer Love <span>Effortlessly</span></h1>
            <p>Collect, manage, and display testimonials on your website with beautiful, customizable widgets.</p>
            <a href="#get-started" className="cta-button">Get Started Free</a>
        </div>
        <div className="hero-image">
            <img src={hero} alt="Hero Image"/>
        </div>
    </section>);
}


const Testimonials = ()=>{
    return (
        <section id="testimonials" className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-slider">
           
            <div className="testimonial-card">
                <img src="https://xsgames.co/randomusers/assets/avatars/male/5.jpg" alt="User 1"/>
                <blockquote>“This platform is a game-changer for showcasing client feedback!”</blockquote>
                <p>- John Doe, CEO of TechCorp</p>
            </div>
            <div className="testimonial-card">
                <img src="https://xsgames.co/randomusers/assets/avatars/male/66.jpg" alt="User 2"/>
                <blockquote>“We saw a 30% increase in conversions thanks to FeedbackHub.”</blockquote>
                <p>- Jane Smith, Marketing Lead at Innovate</p>
            </div>
           
        </div>
    </section>
    );
}


const Features =()=>{
    return (
        <section id="features" className="features">
        <h2>Why Choose ClientsVoice?</h2>
        <div className="feature-item">
            <i className="icon">📈</i>
            <h3>Embed Anywhere</h3>
            <p>Easily add testimonials to your website with simple code snippets.</p>
        </div>
        <div className="feature-item">
            <i className="icon">🎨</i>
            <h3>Customizable Themes</h3>
            <p>Match the look and feel of your brand with ease.</p>
        </div>
        <div className="feature-item">
            <i className="icon">🔗</i>
            <h3>Easy Integrations</h3>
            <p>Seamlessly connect with popular platforms and tools.</p>
        </div>
    </section>
    );
}


const CTA = ()=>{
    return (
        <section className="cta">
        <h2>Ready to build trust with testimonials?</h2>
        <a href="#get-started" className="cta-button">Get Started Now</a>
    </section>
    );
}

const Footer =()=>{
    return (
        <footer>
        <div className="footer-links">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
        </div>
        <p>© 2024 ClientsVoice. All rights reserved.</p>
    </footer>
    );
}
const Body=()=>{
    return (<>
        <Header/>
        <Hero/>
        <Testimonials/>
        <Features/>
        <CTA/>
        <Footer/>
    </>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Body/>)