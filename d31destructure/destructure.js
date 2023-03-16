/* eslint-disable require-jsdoc */

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

export function topSalary(salaries){
    let maxSalary = 0;
    let maxName = null;
    
    for(let [name, salary] of Object.entries(salaries)){
      if(maxSalary<salary){
        maxSalary = salary;
        maxName = name;
      }
    }
    return maxName;
    }

    export function topSalaryy(...salaries) {
      let maxSalary = 0;
      let maxName = null;
      
      for (const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
          maxSalary = salary;
          maxName = name;
        }
      }
      
      return maxName;
    }
    
  const topEarner = topSalary({...salaries}); 
  console.log(topEarner); //Pete