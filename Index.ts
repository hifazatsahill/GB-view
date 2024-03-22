// // import inquirer from "inquirer";

// // const answer = await inquirer.prompt([
// //     {message:"Enter first number",type:"number",name:"firstNumber"},
// //     {message:"Enter second number",type:"number",name:"secondNumber"},
// //     {
// //         message:"select one of the operator to perform action",type:"list",name:"operator",
// //         choices:["ADDITION","SUBTRACTION","MULTIPLICATION","DIVISION"],
// //     },

// // ]);
// // // conditional statement
// // if (answer.operator==="ADDITION") {
// //     console.log(answer.firstNumber + answer.secondNumber);
// // }
// // else if (answer.operator==="subtraction") {
// //     console.log(answer.firstNumber - answer.secondNumber);
// // }
// // else if (answer.operator==="MULTIPLICATION"){
// //     console.log(answer.firstNumber * answer.secondNumber);
// // }
// // else if (answer.operatot==="DIVISION"){
// //     console.log(answer.firstNumber/answer.secondNumber);
// // }
// // else{
// //     console.log("please select correct number!")
// // }

// import inquirer  from "inquirer";

// const answer= await inquirer.prompt([
//     {message:"enter the first number",type:"number",name:"firstNumber"},

//   {message:"enter the second number",type:"number",name:"secondNumber"},
//   {
//     message:"select one of the operator to perform action",type:"list",name:"operator",
//     choices:["addition","multiplication","subtraction","division"],
//   },
// ]);
// // conditional statement
// if (answer.operator==="addition"){
//     console.log(answer.firstNumber+answer.secondNumber);
// }
// else if(answer.operator==="multiplication"){
//     console.log(answer.firstNumber+answer.secondNumber);
// }
// else if (answer.operator==="subtraction"){
//     console.log(answer.firstNumber-answer.secondNumber);
// }
// else if (answer.operator==="division"){
//     console.log(answer.firstNumber/answer.secondNumber);
// }
import inquirer  from "inquirer";
const answer=await inquirer.prompt([
    {message:"enter the first number",type:"number",name:"firstNumber"},
    {message:"enter the first number",type:"number",name:"firstNumber"},
{
    message:"select one of the operator to perform action",type:"list",name:"operator",
    choices:["addition","multiplication","subtraction","division"],
},
]);
// conditional statement
if(answer.operator==="addition"){
    console.log(answer.firstNumber+answer.secondNumber);
}
else if (answer.operator==="subtraction"){
    console.log(answer.firstNumber-answer.secondNumber);
}
else if (answer.operator==="multiplication"){
    console.log(answer.firstNumber*answer.secondNumber);
}
else if (answer.operator==="division"){
    console.log(answer.firstNumber/answer.secondNumber);
}

  else{  console.log("Thank You for selecting my application.");}
