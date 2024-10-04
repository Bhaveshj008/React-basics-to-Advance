import '../css/aboutUs.css'

function About(){
    return(<>
        <div className="about-modern-container">
            {/* Hero Section */}
            <section className="about-hero-modern">
                
                <div className="hero-content">
                
                    <h1>Welcome to <span>FoodVilla</span></h1>
                    <p>Your go-to destination for delicious and freshly prepared meals.</p>
                    <button className="cta-button-modern">Explore Our Menu</button>
                </div>
            </section>

            {/* Who We Are */}
            <section className="who-we-are-modern">
                
                <h2>Who We Are</h2>
                <p>At FoodVilla, we believe in serving not just food, but a delightful experience. Our meals are crafted with passion, care, and the finest ingredients to bring joy to your table.</p>
            </section>

            {/* Core Values with Animations */}
            <section className="values-modern">
                <h2>Our Values</h2>
                <div className="values-cards-modern">
                    <div className="value-card-modern">
                        <i className="fas fa-leaf"></i>
                        <h3>Fresh Ingredients</h3>
                        <p>Only the best and freshest ingredients make it into our kitchens.</p>
                    </div>
                    <div className="value-card-modern">
                        <i className="fas fa-heart"></i>
                        <h3>Customer Love</h3>
                        <p>We don’t just serve food, we create moments of happiness for our customers.</p>
                    </div>
                    <div className="value-card-modern">
                        <i className="fas fa-recycle"></i>
                        <h3>Sustainability</h3>
                        <p>Our commitment to eco-friendly practices sets us apart.</p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="story-modern">
                <div className="story-content-modern">
                    <h2>Our Story</h2>
                    <p>FoodVilla was born from a love of food and a mission to provide high-quality meals with convenience. Since our inception, we’ve grown into a trusted brand, loved by food enthusiasts for our flavorful dishes and exceptional service.</p>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-modern">
                <h2>Meet Our Team</h2>
                <div className="team-grid-modern">
                    <div className="team-member-modern">
                        <img src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?size=626&ext=jpg&ga=GA1.1.1790961595.1726925944&semt=ais_hybrid" alt="Chef" />
                        <h3>Chef Mario</h3>
                        <p>Head Chef</p>
                    </div>
                    <div className="team-member-modern">
                        <img src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?size=626&ext=jpg&ga=GA1.1.1790961595.1726925944&semt=ais_hybrid" alt="Sous Chef" />
                        <h3>Anna Lopez</h3>
                        <p>Sous Chef</p>
                    </div>
                    <div className="team-member-modern">
                        <img src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?size=626&ext=jpg&ga=GA1.1.1790961595.1726925944&semt=ais_hybrid" alt="Manager" />
                        <h3>John Doe</h3>
                        <p>Restaurant Manager</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-modern">
                <h2>Experience the best food, anytime!</h2>
                <button className="cta-button-modern">Order Now</button>
            </section>
        </div>
    </>)
}
export default About;