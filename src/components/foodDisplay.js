import React from "react";
import "../App.css";
import PlaceOrder from './order';
//food displays
function DisplayFood(){
    return(
        <div class="food-container">
        <div class="card">
            <div class="card__image">
               <img src="https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=400" width="100%" alt="Salad" />
            </div>
            <div class="card__info">
               <div class="car__info--title">
                  <h3>Sea Food</h3>
                  <p>Fresh & sweet</p>
               </div>
               <div className="card__info--price">
                  <p>Ksh 3000</p>
                  <button type="button" 
                  onClick = {PlaceOrder} >Order</button>
                  
               </div>
            </div>
         </div>
         <div class="card">
            <div class="card__image">
               <img src="https://images.pexels.com/photos/11776375/pexels-photo-11776375.jpeg?auto=compress&cs=tinysrgb&w=400" width="100%" alt="Fish" />
            </div>
            <div class="card__info">
               <div class="car__info--title">
                  <h3>Fish</h3>
                  <p>Fresh & sweet</p>
               </div>
               <div class="card__info--price">
                  <p>Ksh 1500</p>
                  <button type="button"onClick = {PlaceOrder} >Order</button>
                 
               </div>
            </div>
         </div>
         <div class="card">
            <div class="card__image">
               <img src="https://images.pexels.com/photos/5792329/pexels-photo-5792329.jpeg?auto=compress&cs=tinysrgb&w=400" width="100%" alt="Fish" />
            </div>
            <div class="card__info">
               <div class="car__info--title">
                  <h3>Pizza</h3>
                  <p>Pizza</p>
               </div>
               <div class="card__info--price">
                  <p>$Ksh 999</p>
                  <button type="button"   onClick = {PlaceOrder} >Order</button>
               </div>
            </div>
         </div>
         <div class="card">
            <div class="card__image">
               <img src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400" width="100%" alt="Fish" />
            </div>
            <div class="card__info">
               <div class="car__info--title">
                  <h3>Chicken biryani</h3>
                  <p>biryani</p>
               </div>
               <div class="card__info--price">
                  <p>ksh 1000</p>
                  <button type="button"  onClick = {PlaceOrder} >Order</button>
               </div>
            </div>
         </div>
         </div>
        
      
  
    );
}

export default DisplayFood;
