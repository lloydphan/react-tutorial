import React from 'react';

const blogCard = (props) => {
    console.log(props);
    return (
        <div className="blog-card">
            <h3>{props.title} - {props.id}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default blogCard;