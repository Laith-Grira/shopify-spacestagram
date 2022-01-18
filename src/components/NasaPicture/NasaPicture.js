import { useState, useEffect } from "react";
import { Card } from '@shopify/polaris';
import Aos from 'aos';
import DateModifier from "../utils/DateModifier";
import 'aos/dist/aos.css';
import './NasaPicture.scss';

const NasaPicture = props => {

    const [likeToggle, setLikeToggle] = useState(false);

    const onToggleLikeButton = () => {
        setLikeToggle(!likeToggle);
    }

    // Add animation on Scroll
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    return ( 
        <div className="element-modal" data-aos="fade-up">
            <Card title={props.title} sectioned>
                <img src={props.image} alt="Nasa-galaxy" className="mb-3" />
                <p><strong>Date:</strong> <DateModifier  date={props.date} /> </p>
                <p><strong>Description:</strong> {props.description}</p>
                <div className="like-toggle mt-5">
                    <button type="button" className="btn btn-success" disabled={likeToggle} onClick={onToggleLikeButton}>Like</button>
                    <button type="button" className="btn btn-secondary" disabled={!likeToggle} onClick={onToggleLikeButton}>Unlike</button>
                </div>
            </Card>
        </div>
     );
}
 
export default NasaPicture;