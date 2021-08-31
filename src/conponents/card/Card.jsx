import React from 'react';
import './card.css';



const Card =({title, containerStyle, amount, count}) =>{
    return (
        <div className={`card ${title}`} style={{...containerStyle}}>
            <h1>${amount} </h1>
            <h3>{title}</h3>
          {count && <p>{count} Transaction{count >1 && <span>s</span>}</p>}
        </div>
    )
}

export default Card 

