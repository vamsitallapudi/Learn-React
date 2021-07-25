import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img alt='featured-image' src={`https://robohash.org/${props.post.id}?set=set2&size=180x180`} />
        <h2 key={props.post.id}>{props.post.name}</h2>
        <p>{props.post.email}</p>
    </div>
);