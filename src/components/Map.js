import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
  } from "react-simple-maps";
import map from '../assets/two.json';
import './map.css';

export default class Map extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="mapContainer">
            <ComposableMap width={200} height={200}
                projectionConfig={{
                scale: 205,
                }}
               style={{ width: "100%", height: "auto", position: "relative", right: 250, bottom: 200 }}
            >
                <Geographies geography={map}>
                {({geographies}) => geographies.map(geo =>
                    <Geography key={geo.rsmKey} geography={geo} />
                )}
                </Geographies>
                </ComposableMap>
            </div>
        );
    }
}
