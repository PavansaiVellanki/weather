import "../component-styles/Footer.css";
function Footer(){
    return (
        <div className="footer">
            <div className="footer-content">
                <p>
                    This application uses the Visualcrossing API to fetch weather data.
                    You can learn more about the API and its features at 
                    <a href="https://www.visualcrossing.com/" target="_blank" rel="noopener noreferrer"> Visualcrossing API</a>.
                </p>
                <div className="contact-details">
                    <h3>Contact Us</h3>
                    <p>Email: <a href="mailto:support@example.com">support@example.com</a></p>
                    <p>Phone: +1 (234) 567-890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} My Weather App. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;