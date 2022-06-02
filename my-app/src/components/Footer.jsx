import React from "react";
class Footer extends React.Component{
    render(){
         return(
             <div>
                <h2>Contact Us</h2>
                <p>For business inqueries: lorem@ipsum.dolor </p>
                <br></br>
                <p>for user account inqueries: lorem@ipsum.dolor</p>
                <br></br>
                <p>for server inqueries: lorem@ipsum.dolor</p>
                <h2>
                    <a href="About">About Us</a>
                </h2>
                <h2>
                    <a href="FAQ">FAQ</a>
                </h2>
            </div>
    );
 }
}

export default Footer;