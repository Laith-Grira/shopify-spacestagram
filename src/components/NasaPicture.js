import { useState } from "react";
import './NasaPicture.scss';

const NasaPicture = props => {

    const [pictureLiked, setPictureLiked] = useState(false);

    return ( 
        <div className="element-modal">
            <h2 id="picture-title">{props.title}</h2>
            <img src={props.image} alt="Nasa-galaxy" className="mb-3" />
            <p><strong>Date:</strong> {props.date}</p>
            <p><strong>Description:</strong> {props.description}</p>
            <button type="button" class="btn btn-primary">Like</button>
        </div>
     );
}
 
export default NasaPicture;