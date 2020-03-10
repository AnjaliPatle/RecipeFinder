import React from 'react';
import './Content.css';


const Recipe=(props)=>{
    return(
        <div className="main-content">
            <div  className="list">
                <h2>Ingredients</h2>
                 {props.ingredients.map(ingredients=>(<li>{ingredients.text}</li>))}
            </div>
            <div>
                <div className="calories">
                    <h1>{props.title}</h1>
                    <h3>Calories: {props.calories} </h3>
                    <div className="diet-label">
                        <h4>{props.dietLabels}</h4>
                    </div>
                </div>
                <div className="recipe-img">
                    <img src={props.image} alt="recipe"></img>
                </div>
            </div>
        </div>
    )
}
export default Recipe;