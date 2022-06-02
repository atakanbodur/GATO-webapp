import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';


class SocialMedia extends React.Component {
    render() {
        return (

            <div col-lg-12 col-md-12 col-sm-12>
                <h2>Follow us on social media</h2>
                <br></br><br></br>
                <a href="https://www.linkedin.com/in/senem-bilgin-391b71174/">
                    <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/2560px-LinkedIn_Logo_2013.svg.png" alt="Linkedin"></img>
                    </a>
                <a href="https://www.instagram.com/yasemincevikk/?hl=en">
                    <img className="img-fluid" src="https://marka-logo.com/wp-content/uploads/2020/04/Instagram-Logo.png" alt="Instagram"></img>
                </a>
                <a href="https://twitter.com/_boduratakan">
                    <img className="img-fluid" src="https://wispers.co.uk/wp-content/uploads/2018/04/twitter-logo.png" alt="Twitter"></img>
                </a>
            </div>
        );
    }
}

export default SocialMedia;