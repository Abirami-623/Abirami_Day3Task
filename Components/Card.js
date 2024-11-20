import React,{ useState } from 'react';
import './Card.css';

function Card({name,job,about}){

    

    return(
        <div className='Card'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img src="https://sharedp.com/wp-content/uploads/2024/06/instagram-dp-for-girls-cartoon-960x1024.jpg"alt=''height="100px" width="100px"/>
                </div>
            </div>
            <div className="lower-container">
                <h3> { name } </h3>
                <h4> { job } </h4>
                <p> { about } </p>
                <button>Follow </button>
            </div>
        </div>
    );
}

export default Card;