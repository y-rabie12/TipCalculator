"use strict";



// What will change ?

// Which elements do I need to select?

// How to calculate the tip ?

// what happens when I use the reset button?



// now I have 3 input , these will be the ones I will use to calculate the tip

// So I need to select these three inputs 

// The buttons will also need to be selected 

// the two spans will be selected in order to display the amounts


// how to calculate the tip ?

// we take the bill and we multiply it by the percentage and then add that
// to the total bill amount.


// we separately store the tip amount and the total bill amount

// divide the tip amount by the number of people then display it in the first span

// divide the total bill amount by the number of people and then display it in the second span



const billAmount = document.querySelector('.bill');

const numPeople = Number(document.querySelector('.people').value);

const customTip = Number(document.querySelector('.custom').value);



let billValue =  0



// We cannot pass for callback functions parameters unless we use closures







