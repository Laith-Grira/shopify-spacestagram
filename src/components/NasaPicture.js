import { useState } from "react";

const NasaPicture = props => {

    const [pictureLiked, setPictureLiked] = useState(false);

    return ( 
        <div className="element-div">
            <h2 id="picture-title">{props.title}</h2>
            <img src={props.image} alt="Nasa-galaxy" />
            <p>Date: {props.date}</p>
            <p>Description: {props.description}</p>
            <button>Like</button>
        </div>
     );
}
 
export default NasaPicture;