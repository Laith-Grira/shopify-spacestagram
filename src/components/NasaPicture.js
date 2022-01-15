import { useState } from "react";
import { Card } from '@shopify/polaris';
import DateModifier from "./utils/DateModifier";
import './NasaPicture.scss';

const NasaPicture = props => {

    // variable for the toggling between like and unlike
    const [likeToggle, setLikeToggle] = useState(false);

    const onToggleLikeButton = () => {
        setLikeToggle(!likeToggle);
    }

    return ( 
        <div className="element-modal">
            <Card title={props.title} sectioned>
                <img src={props.image} alt="Nasa-galaxy" className="mb-3" />
                <p><strong>Date:</strong> <DateModifier  date={props.date} /> </p>
                <p><strong>Description:</strong> {props.description}</p>
                <div className="like-toggle mt-5">
                    <button type="button" className="btn btn-primary" disabled={likeToggle} onClick={onToggleLikeButton}>Like</button>
                    <button type="button" className="btn btn-danger" disabled={!likeToggle} onClick={onToggleLikeButton}>Unlike</button>
                </div>
            </Card>
        </div>
     );
}
 
export default NasaPicture;