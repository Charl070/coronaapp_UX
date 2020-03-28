import React from 'react';
import zim from '../assets/zw.svg';
import './map.css';
import {covid19API} from "../services/covid19Api";
import {FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterIcon,
    FacebookIcon
} from "react-share"

const API = covid19API()

export default class PictureMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {deceased: 0,
            reported: 0,
            date : ""
        }

      }

      async componentDidMount(){
          
          const data = await API.getLatestReportForLocation("Zimbabwe");
          console.log("data", data);
          this.setState({deceased:data.deaths,
            reported:data.confirmed,
            date: new Date(data.timeStamp).toDateString()
            // date: `${new Date(data.timeStamp).getDate()} ${new Date(data.timeStamp).getMonth()}`
     })   

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
                            <p className="digit">{this.state.reported}</p>
                            <p>REPORTED CASES</p>
                        </div>
                        
                        <div className="deaths">
                            <p className="digit">{this.state.deceased}</p>
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

                    <p className="body">Last Updated {this.state.date} </p>

                </div>

                <div className="social">
                    <div className="box"></div>
                    <p className="heading"><strong>Share This Website</strong></p>

                    <div className="socialIcons">
                        <div>
                            </div>
                        <div className="imageContainer">
                            <FacebookShareButton
                            url={"https://nona.digital"}
                            quote={"dhfdgjdglkfhglkfglkfg"}
                            className="Demo__some-network__share-button"
                        >
                            <FacebookIcon size={36} round />
                        </FacebookShareButton>
                        </div>
                        <div className="imageContainer">
                        <WhatsappShareButton
                            url={"https://nona.digital"}
                            quote={"dhfdgjdglkfhglkfglkfg"}
                            className="Demo__some-network__share-button"
                        >
                            <WhatsappIcon size={36} round />
                        </WhatsappShareButton>
                        </div>
                        <div className="imageContainer">
                        <TwitterShareButton
                            url={"https://nona.digital"}
                            quote={"dhfdgjdglkfhglkfglkfg"}
                            className="Demo__some-network__share-button"
                        >
                            <TwitterIcon size={36} round />
                        </TwitterShareButton>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}