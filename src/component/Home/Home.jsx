import React from 'react';
import map from '../../Images/photo-1599930113854-d6d7fd521f10.avif'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center mx-auto mt-16'>
            <div className='ml-auto'>
                <img className='lg:w-72 px-4' src={map} alt="map of the world" />
            </div>
            <div className='lg:w-1/2 w-full px-6 mt-4 mx-auto text-justify'>
                <p>Across our diverse globe, countries stand as vibrant strokes on the canvas of existence. Picture the enchanting landscapes of New Zealand, where fjords carve through nature's masterpiece. In Egypt, ancient pyramids echo tales of bygone eras. Japan bursts into delicate hues with cherry blossoms, while Brazil's Carnival beats to lively rhythms. Italy, a living gallery of art, meets the Serengeti's heartbeat in Africa. Each nation adds a unique color to our shared story, creating a rich tapestry of cultures and histories. From the tranquil beauty of New Zealand's fjords to the rhythmic chaos of Brazil's Carnival, our world celebrates diversity. Every country, a chapter, invites us to explore the intricate pages of Earth, fostering wonder and connection</p>
                <Link className='mt-4 underline text-center' to="/login">Learn about Countries</Link>
            </div>
        </div>
    );
};

export default Home;