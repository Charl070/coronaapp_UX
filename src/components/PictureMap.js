import React from 'react';
import zim from '../assets/zw.svg';
import './map.css';
import facebook from "../assets/facebook-logo.svg";
import whatsapp from "../assets/whatsapp.svg";
import twitter from "../assets/twitter.svg";

export default class PictureMap extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="pictureMapComponent">
                <div className="pictureContainer">
                    <img src={zim} alt="Zimbabwe Map" width="400px" height="400px"></img>
                </div>

                <div className="VicFalls">
                    <p><strong>1</strong></p>
                </div>

                <div className="Harare">
                    <p><strong>2</strong></p>
                </div>

                <div className="stats">
                    <p className="heading"><strong>Latest Statistics</strong></p>
                    <p className="subHeading"><strong>Zimbabwe</strong></p>

                    <div className="table">
                        <div className="cases" id="zimcases">
                            <p className="digit">3</p>
                            <p>CONFIRMED CASES</p>
                        </div>
                        
                        <div className="deaths">
                            <p className="digit">1</p>
                            <p>TOTAL DEATHS</p>
                        </div>
                    </div>

                    <p className="subHeading"><strong>Global</strong></p>
                    <div className="globalTable">
                        <div className="cases">
                            <p className="digit">471,044</p>
                            <p>CONFIRMED CASES</p>
                        </div>

                        <div className="recovered">
                            <p className="digit">114,228</p>
                            <p>RECOVERED</p>
                        </div>
                        
                        <div className="deaths">
                            <p className="digit">21,284</p>
                            <p>TOTAL DEATHS</p>
                        </div>
                    </div>

                    <a href="https://covidvisualizer.com" target="_blank"><button type="button">View By Country</button></a>
                    <p className="body">Last Updated 25 March 2020</p> 

                </div>

                <div className="social">
                    <div className="box"></div>
                    <p className="heading"><strong>Share This Website</strong></p>

                    <div className="socialIcons">
                        <div className="imageContainer">
                            <a href="#"><img src={facebook} height="35px" alt="1" width="35px"/></a>
                        </div>
                        <div className="imageContainer">
                            <a href="#" target="_blank"><img src={twitter} height="35px" alt="1" width="35px"/></a>
                        </div>
                        <div className="imageContainer">
                            <a href="#" target="_blank"><img src={whatsapp} height="35px" alt="1" width="35px"/></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}