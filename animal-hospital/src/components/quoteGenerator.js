
import React from 'react';

export default class Quotes extends React.Component{
    render(){

        const petFactQuotes=[{
            quote:"Walking helps preserve your pet’s muscle tone and joint movement. If your pet is overweight or obese, walking can be a great way to shed those extra pounds.",
        },{quote:"Cats and dogs should be kept inside during cold weather. It's a common belief that dogs and cats are resistant than people to cold weather because of their fur, but it's untrue.",
         },{ quote:"Many pets become lost in winter because snow and ice can hide recognizable scents that might normally help your pet find his/her way back home. Make sure your pet has a well-fitting collar with up-to-date identification and contact information.",
         },{quote:"We don't recommend keeping any pet outside for long periods of time, but if you are unable to keep your dog inside during cold weather, provide him/her with a warm, solid shelter against wind. ",
         },{quote:"Pets at risk for fleas should be treated during the flea season with an appropriate preventive. Your veterinarian can recommend a product most suitable for your pet.",
         },{quote:"Pets fed a high quality diet have a shiny hair coat, healthy skin, and bright eyes. A good diet can help strengthen your pet’s immune system, help maintain his or her intestinal health, help increase his or her mental acuity, help keep joints and muscles healthy, and much more."
        }]
        
        const tip = petFactQuotes[Math.floor(petFactQuotes.length*Math.random())].quote;



        return(
           <p>{tip}</p>
        )
    }
}