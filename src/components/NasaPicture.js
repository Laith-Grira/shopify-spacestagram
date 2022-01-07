import { useState } from "react";
import './NasaPicture.scss';

const NasaPicture = props => {

    // variable for the toggling between like and unlike
    const [likeToggle, setLikeToggle] = useState(false);

    const onToggleLikeButton = () => {
        setLikeToggle(!likeToggle);
    }

    return ( 
        <div className="element-modal">
            <h2 id="picture-title">{props.title}</h2>
            <img src={props.image} alt="Nasa-galaxy" className="mb-3" />
            <p><strong>Date:</strong> {props.date}</p>
            <p><strong>Description:</strong> {props.description}</p>
            <div className="like-toggle">
                <button type="button" className="btn btn-primary" disabled={likeToggle} onClick={onToggleLikeButton}>Like</button>
                <button type="button" className="btn btn-danger" disabled={!likeToggle} onClick={onToggleLikeButton}>Unlike</button>
            </div>
        </div>
     );
}
 
export default NasaPicture;