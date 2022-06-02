import React from "react";
import './css/Footer.css';
class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div>
                    <div className="contact" col-lg-4 col-md-4 col-sm-12>
                        <h2>Contact Us</h2>
                        <p>For business inqueries: senem.bilgin@ozu.edu.tr</p>
                        <p>For user account inqueries: yasemin.cevik@ozu.edu.tr</p>
                        <p>For server inqueries: atakan.bodur@ozu.edu.tr</p>
                    </div>
                    <div className="about" col-lg-4 col-md-4 col-sm-12>
                        <a href="/About">
                            <h2>About Us</h2>
                        </a>
                        <p>Our company</p>
                        <p>Our business plan</p>
                        <p>Our team</p>
                    </div>
                    <div className="faq" col-lg-4 col-md-4 col-sm-12>
                        <a href="/FAQ.jsx">
                            <h2>FAQ</h2>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;