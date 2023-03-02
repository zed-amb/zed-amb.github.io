"use strict";
/* eslint-disable*/

export function isVowel(text){
    if(text=="a"|| text=="e" || text=="i" || text=="o" || text=="u"){
        return true;
    }
    else 
    return false;
    
}

export function computeSalesCommission(salaried, sales){
    let commission=0;

    if( salaried===true){
        if(sales<300){
            return 0;
        }
         else if(sales>=300 && sales<500){
            return(commission= sales/100);
        }
        else
        return ( commission= ((sales-500)*2/100)+ 5);
    
    
    } else {
        if(sales<300){
            return 0;
        }
      else if(sales>=300 && sales <500){
        return(commission= sales/50);
        }
        else { 
         return( commission= ((sales-500)*3/100)+ 10);
        }
    }
}



export function compoundInterest(initialAmount, annualInterestRate, numberOfYears) {
    let monthlyInterestRate = annualInterestRate / 1200; // 12 months in a year, 100 to convert from percentage to decimal
    let numberOfMonths = numberOfYears * 12;
    let balance = initialAmount;
  
    for (let i = 0; i < numberOfMonths; i++) {
      balance += balance * monthlyInterestRate;
    }
  
    return balance.toFixed(2); 
  }
  

 export function calcDownpayment(cost){
   
    if(cost<50000){
        return cost*0.05;
    }
    else if( cost <100000) {
        return 2500 +(cost-50000)*0.1;
        
    }
    else if( cost <200000) {
        return 7500 + (cost-100000)*0.15;
          
    }

    else{
        return 20000+ 0.1*(cost-200000);
    }
}
 
export function sumDigits(number){
    let sum=0;
    while(number){
        sum+=number%10;
        number=Math.floor(number/10);
    }
    return sum;
}



export function multDigits(number){
    let product=1;
    while(number){
        product*=number%10;
        number=Math.floor(number/10);
    }
    return product;
}


export function convertFahrenheit(temp){
    let tempInCelcius= ((temp-32)*5/9);
    return tempInCelcius.toFixed(4);
}

export function  alcDistance(x1,y1,x2,y2){
    let distance= Math.sqrt(((x2-x1)**2) +((y2-y1)**2));
    return distance.toFixed(2);
    
}