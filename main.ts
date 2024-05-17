#! /usr/bin/env node

import inquirer from "inquirer";

// Printing Welcum Message
console.log("\n\t welcum to\'CodeWithSana\' - CLI Simple Calculator\n");


// Asking question from users through inquirer
let answers = await inquirer.prompt([
{message: "Enter firstNumber",type:
"number", name: "firstNumber"},
{message: "Enter secondNumber",type:
"number", name: "secondNumber"},
{
    message:"Select one operator to perfrorm operations",
    type:"list",
    name:"operator",
    choices:["Addition","Subtraction", "Multiplication", "Division"],
},
]);
// Conditional Statements if/Else
if(answers.operator==="Addition"){
    console.log(answers.firstNumber + answers.secondNumber); 
}
else if(answers.operator==="Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber); 
}
else if(answers.operator==="Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber); 
}
else if(answers.operator==="Division"){
    console.log(answers.firstNumber /answers.secondNumber); 
}
else{
    console.log("Invalid Input")
}

