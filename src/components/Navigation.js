import React from 'react';
import './navigation.css';
import { Link } from 'react-router-dom';

const links = [
    {   
        id:1,
        title:"LIVE UPDATES",
        to:""
    },
    {
        id: 2,
        title:"NEWS",
        to:""
    },
    {
        id: 3,
        title:"SAFETY",
        to:""
    },
    {
        Id: 4,
        title:"TWITTER",
        to:""
    },
]

export default class Navigation extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="NavigationComponent">
                <div>
                    <ul>
                        {links.map(link => (
                            <li key={link.id}>
                                <Link to={link.to}>{link.title}</Link>
                            </li>    
                        ))}
                    </ul>
                </div> 
            </div>
        );
    }
}