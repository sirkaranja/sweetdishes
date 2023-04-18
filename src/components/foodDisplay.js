import React from "react";
import "../App.css";

//food displays
function DisplayFood(){
    return(
        <div class="food-container">
        <div class="card">
            <div class="card__image">
               <img src="" alt="Salad" />
            </div>
            <div class="card__info">
               <div class="car__info--title">
                  <h3>Salad</h3>
                  <p>Fresh & sweet</p>
               </div>
               <div class="card__info--price">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
               </div>
            </div>
         </div>
         <div class="card">
            <div class="card__image">
               <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Fish" />
            </div>
            <div class="card__info">
               <div class="car__info--title">
                  <h3>Fish</h3>
                  <p>Fresh & sweet</p>
               </div>
               <div class="card__info--price">
                  <p>$ 5</p>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
               </div>
            </div>
         </div>
         </div>
  
    );
}

export default DisplayFood;
