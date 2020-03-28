import React from 'react';
import './twitter.css';
import Dambudzo from '../assets/pres.jpg'
import tab from '../assets/source.png'
import { TwitterTimelineEmbed,
    } from 'react-twitter-embed';      

function Twitter() {
  return (
    <div>
      <div className="twitter-container">
       {/* <div className="text-strong">
           Stay Connected With Tweets
       </div> */}
       <div className="centerContent">
<div className="selfCenter standardWidth">
<TwitterTimelineEmbed
  sourceType="profile"
  screenName="MoHCCZim"
  options={{height: 2000}}
  // onComplete={action}
/>
</div>
</div>
   </div>
      </div>
  

    
  );
}

export default Twitter;
