import React, { Fragment } from 'react';
import './news.css';
import Dambudzo from '../assets/pres.jpg';
import tab from '../assets/source.png';
import Navigation from './Navigation';
import {newsApi} from '../services/newsApi';
import Spinner from 'react-spinkit';

const NewsAPI = newsApi()

class News extends React.Component{
  constructor(props) {
    super(props);
    this.state = { data: null }
  }

  async componentDidMount(){
          
    const data = await NewsAPI.getLatestNews("zimbabwe corona virus");
    console.log("data", data);
    this.setState({ data })   
}

  render(){
    return (

      <div className="NewsComponent">
        <Navigation/>
        <div>
          <div className="text-strong">

      <div>
        {/* <div className="text-strong">

              Around The Globe
        </div> */}
        {this.state.data !== null? 
        (
          <Fragment>   
          {this.state.data.articles.map((item, index) => (
              <div style={{ height: "100%"}}>
              <ul key={index}>
                <li>
                  <div className="news-container-flex">
                  
                    <div className="news-image">
                    <a href={item.url} target="_blank">
                      <img src={item.urlToImage === null? Dambudzo: item.urlToImage } alt=""/>
                      </a>
                    </div>
                 
                    <div className="title-position text-left">

                         <a href={item.url} target="_blank">{item.title}</a>
                        <div className="source-position">
                          {item.source.name}&nbsp;&middot;&nbsp;{new Date(item.publishedAt).toDateString()} 
                        </div>
                    </div>
                    <div className="icon-position">
                      <a href={item.url} target="_blank">
                        <img src={tab}/>
                      </a>
                      
                    </div>
                  </div>   
                  <hr/>   
                </li>  
              </ul>
              </div>
          ))}
         
          </Fragment>
        ) : <div style={{height: "100%"}}>
              <Spinner name="line-scale-pulse-out-rapid" color="aqua"  style={{ top: "50%", left:"50%"}} />
            </div> }
            <div>
              Powered by <a href="https://newsapi.org/">News API</a>
            </div>
      </div>
      
     );
  }
 
}

export default News;
