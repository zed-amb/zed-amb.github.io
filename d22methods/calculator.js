/* //use this slight modification of the exercise that is in the book for today’s homework
// instead of a read method as in the book, your calculator should have a setValues method that sets the input values to be the values of
//two properties. sum and mul will access those properties for their calculations. */

//const calculator = {};  // implement this


const calculator = {
     setValues: function (a, b){
    this.a= a,
    this.b= b
},
 
sum: function(){ 
    return (this.a + this.b);},

mul: function(){
     return (this.a * this.b);
    },
};  



/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
module.exports = {calculator }; //add all of your object names here that you need for the node mocha tests