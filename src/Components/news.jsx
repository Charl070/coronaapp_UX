import React from 'react';
import './news.css';
import Dambudzo from '../assets/pres.jpg';
import tab from '../assets/source.png';
import Navigation from './Navigation'

class News extends React.Component{
  constructor(props) {
    super(props);
    this.state = {image: Dambudzo};
  }

  componentDidMount() {
    
  }

  render(){
    return (
      <div className="NewsComponent">
        <Navigation/>
        <div>
          <div className="text-strong">
              Around The Globe
          </div>
          <ul>
          <li>
         <div className="news-container-flex">
           <div className="news-image">
           <img src={this.state.image} alt=""/>
           </div>
           <div className="title-position text-left">
           New Testing Kits In Harare
               <div className="source-position">
               Source: Sunday Mail    
               </div>
           </div>
           <div className="icon-position">
           <img src={tab}/>
           </div>
         </div>
        
     </li>
     <li>
         <div className="news-container-flex">
           <div className="news-image">
           <img src={this.state.image} alt=""/>
           </div>
           <div className="title-position text-left">
           New Testing Kits In Harare
               <div className="source-position">
               Source: Sunday Mail    
               </div>
           </div>
           <div className="icon-position">
           <img src={tab}/>
           </div>
         </div>
        
     </li>
     <li>
         <div className="news-container-flex">
           <div className="news-image">
           <img src={this.state.image} alt=""/>
           </div>
           <div className="title-position text-left">
           New Testing Kits In Harare
           <div className="source-position">
               Source: Sunday Mail    
               </div>
   
           </div>
           <div className="icon-position">
           <img src={tab}/>
           </div>
         </div>
       
        
     </li>
     <li>
         <div className="news-container-flex">
           <div className="news-image">
           <img src={this.state.image} alt=""/>
           </div>
           <div className="title-position text-left">
           New Testing Kits In Harare
           <div className="source-position">
               Source: Sunday Mail    
               </div>
           </div>
           <div className="icon-position">
           <img src={tab}/>
           </div>
         </div>
   
        
     </li>
     <li>
         <div className="news-container-flex">
           <div className="news-image">
           <img src={this.state.image} alt=""/>
           </div>
           <div className="title-position text-left">
           New Testing Kits In Harare
           <div className="source-position">
               Source: Sunday Mail    
               </div>
           </div>
           <div className="icon-position">
           <img src={tab}/>
           </div>
         </div>
        
     </li>
     <li>
         <div className="news-container-flex">
           <div className="news-image">
           <img src={this.state.image} alt=""/>
           </div>
           <div className="title-position text-left">
           New Testing Kits In Harare
           <div className="source-position">
               Source: Sunday Mail    
               </div>
           </div>
           <div className="icon-position">
           <img src={tab}/>
           </div>
         </div>
        
     </li>
   </ul>
      </div>
      </div>
      
     );
  }
 
}

export default News;
