
// switch case example
// let days=3;
// switch(days){
//     case 1:
//         console.log(`Monday`);
//         break;
//     case 2:
//         console.log(`Tuesday`);    
//         break;
//     case 3:
//         console.log(`Wednesday`);
//         break;
//     case 4:
//         console.log(`Thrusday`);
//         break;
//     case 5:
//         console.log(`Friday`);
//         break;
//     case 6:
//         console.log(`Saturday`);
//         break;
//     case 7:
//         console.log(`Sunday`);
//         break;
//     default:
//         console.log(`enter number between 1-7!`);                        
// }


// let firstName=prompt(`enter your firstName:`);
// let lastName=prompt(`enter your lastName:`);
// console.log(`fullName: ${firstName+lastName}`);


// alert(firstName);


// let marks=prompt(`enter your marks:`);

// if(marks>=80){
//     console.log("Grade:O","marks:",marks);

// }
// else if(marks>=70 && marks<80){
//     console.log("Grade:A","marks:",marks);

// }
// else if(marks>=60 && marks<70){
//     console.log("Grade:B","marks:",marks);

// }
// else if(marks>=50 && marks<60){
//     console.log("Grade:C","marks:",marks);

// }
// else if(marks>=40 && marks<50){
//     console.log("Grade:D","marks:",marks);

// }
// else{
//     console.log("marks less than 33! Retest!");
// }

// let arr=[1,2,3,4];
// console.log(arr);

// console.log("1TO10");
// for(let i=1;i<=10;i++){
//     console.log(i);
// }
// console.log("ODD_NUMBER");
// for(let i=1;i<=10;i+=2){
//     console.log(i);
// }
// console.log("EVEN_NUMBER");
// for(let i=2;i<=20;i+=2){
//     console.log(i);
// }

// let Arr=[[1,2],[3,4],[4,5]];
// console.log(Arr);
// console.log(Arr[1]);

// console.log(Arr.includes(2));


// let heros=[["ironman","spiderman","thor"],["superman","wonderwomen","flash"]];
// for(let i=0;i<heros.length;i++){
//     for(let j=0;j<heros[i].length;j++){
//         console.log(heros[i][j]);
//     }
// }
// console.log(heros);

// console.log(heros[1]);

// console.log(heros[1][0]);


//todo App

// let todo=[];
// let req=prompt("enter your request:");
// while(true){
//     if(req=="quit"){
//         console.log("qutting_todo");
//         break;

//     }
//     else if(req=="add"){
//         let task=prompt("enter any task you want add in todo");
//         todo.push(task);
//         console.log("task_added");

//     }
//     else if(req=="list"){
//         console.log("----------");
//         for(let i=0;i<todo.length;i++){
//             console.log(i,todo[i]);
//         }
//         console.log("----------");

//     }
//     else if(req=="delete"){
//         let idx=prompt("enter index you want to delete:");
//         todo.splice(idx,1);
//         console.log("task deleted successfully!");
//     }
//     else{
//         console.log("please enter valid request!");

//     }

//     req=prompt("enter your request:");
// }
//object example
// let student={
//     name:"parth",
//     age:20,
//     course:"webdevelopment"
// };
// console.log(student);

// console.log(student["course"]);



// //object creation
// let twitter={
//     username:"parth",
//     followers:167,
//     tags:["@parth4556","@rohan345"],
//     content:"this is my first post",
//     repost:5
// };

// console.log(twitter);

// console.log(twitter["content"]);

// console.log(twitter.followers);

// //java script converts everything as string!!!!


// let obj={
//     1:'a',
//     2:'b',
//     null:'c',  //java script will take this null as string!
//     true:'d'  //java script will take this true as string!
// };
// console.log(obj);
// console.log(obj[1]);
// console.log(obj[null]);



// let classInfo={
//     parth:{
//         grade:"A+",
//         city:"Delhi"
//     },
//     shobhita:{
//         grade:"O",
//         city:"Mumbai"
//     }
// };


// const max=prompt("enter any maximum number:");

// const random=Math.floor(Math.random()*10)+1;
// let guess=prompt("Guess the number:");

// while(true){
//     if(guess=="quit"){
//         console.log("quiting guess game!!!");
//         break;
//     }
//     if(guess==random){
//         console.log("you are correct !,congrats",random);
//     }
//     else{
//         guess=prompt("your guess is wrong please try again!!!");
//     }
// }

function rollDice(){
    let num=Math.floor(Math.random()*6)+1;
    console.log(num);
}


function Avg(a,b,c){
    console.log((a+b+c)/3);
}