import React from 'react';
import whatsapp from "../assets/whatsapp.svg";
import './footer.css';

export default class Footer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="FooterComponent">
                <p className="footerHeading"><strong>Zimbabwe Tollfree Hotline: +263 714 734 593 or +263 774 112 531</strong></p>
                <div className="FooterWrapper">

                    <div className="contactMinistry">
                        <div className="whatsApp">
                            <img src={whatsapp} height="35px" alt="1" width="35px"/>
                        </div>

                        <p className="ministryText">Contact The Ministry of Health via WhatsApp</p>
                    </div>

                <p className="paragraph">Do you suspect you have COVID-19 or wish to obtain more information
                    about the virus? If so, you are advised to contact the Ministry of Health and Child Care on
                    the tollfree numbers provided above or alternatively, you could also send them a WhatsApp text.<br></br>

                    <br></br>Remember, humanity will obviously conquer this pandemic but the duration of our
                    fight against this virus and the number of casualties we will suffer during this period  
                    solely depends on how serious we take the precautionary measures that have been put forward by
                    government to contain its spread.<br></br>

                    <br></br>This website was developed by <a href="https://www.vttech.tech/" target="_blank">VT Tech</a> in
                    an effort to centralise reliable information pertaining to COVID-19 in Zimbabwe. All of the 
                    information displayed here was sourced from reputable organizations such as the Zimbabwean
                    Government, Worldometer, CNBC Africa and WHO.
                </p>
                </div>
            </div>
        );
    }
}