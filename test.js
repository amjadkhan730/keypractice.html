// console.log("testing....");
// console.log("testing....");
// console.log("testing....");
// console.log("testing....");
// console.log("testing....");
// console.log("testing....");
// console.log("testing....");
// console.log("Tufail Zaman");
// console.log("Tufail Zaman");
// console.log("Tufail Zaman");
// console.log("Tufail Zaman");
// console.log("Tufail Zaman");
// console.log("Tufail Zaman");
// console.log("Tufail Zaman");
// console.log("Tufail Zaman");
// console.log("Tufail Zaman");
// console.log("Tufail Zaman");        ``


// const mark = 20;
// if(mark<15){
//     console.log ("U r fail")
// }
// else{
//     console.log ("u r pass")
// }

// const marks = 50;
// if(marks<30 && marks>=0){
// console.log("you have pass")
// }
// if(marks>33 && marks<=50){
//     console.log("u r pass")
// }
// else{
//     console.log("u r fail")
// }
// const marks = 50;
// (marks>=33 ? console.log("pass"): console.log("fail"))
// const num = 40
// switch(num){

//     case 40:
//         console.log("yss")
//         break;
//  case 20:
//     console.log("NO")
//     break;
//     default:
//         console.log("default")
// }


// for(let i=0; i<10; i++){
//     console.log(i);
// }
// for(i=0; i<10; console.log(i)){
//     i++
// }

//          Array Method//////////


// forEach:
//          Read one by one elelement in array 



// const arr = [1,2,3,4,5,6,7,8,9];
// arr.forEach(item=>{
//     console.log(item);
// })


// inclide////
//                 this method check the item present in array.

//          const arr = [1,2,3,4,5,6,7,8,9];
//          arr.includes(5);
//          let getvaluepresentornot = arr.includes(6);
//          console.log(getpresentornot);       


// /Filter///
//                  this method create new array with only element passed condition,,,,Filter always reurn in array.

//            const arr = [1,2,3,4,5,6,7,8,9];
//             const arrfilter = arr.filter(num => num<=6);
//             console.log(arrfilter);


// map///
//               this method create new array by calling the providing function in every element.

//              const arr=[1,2,3,4,5,6,7,8,9];
//              const oneAdded = arr.map(num => num+2);
//              console.log(oneAdded);


// Reduce///
//                 This method applies a function an accumlator and each element it the array from (left to right) to reduce it to a single value.

//                 const arr=[1,2,3,4,5,6,7,8];
//                 const sum = arr.reduce((total, value) => total-value,2);
//                 console.log(sum);



// /Some///
//              this method check at least one of array item passsed the condition if return true otherwise fals.

//           const arr=[1,2,3,4,5,6,7,8,9];
//           at least one element >4? 
//           const largeNum = arr.some(num => num>4);
//           console.log(largeNum);  



// Every////
//                 This method check all array item passed the condition if passed it return true otherwisw fals.

//               const arr=[1,2,3,4,5,6,7,8,9];
//               all element greaterthan fuor 4//   
//               const greaterFour= arr.every(num => num>4);
//               console.log(greaterFour);

//              const lessTen= arr.every(num => num<10);
//              console.log(lessTen);


//  Sort///

//  This method used to arrange sort array item eitheir assanding or dessanding order,,,

//     const arr=[1,2,3,4,5,6,7,8];
//      sort in dassanding order//

//      descOrder=arr.sort((a,b)=> a > b ? -1:1);
//      console.log(descOrder);

//      sort in assanding order//
//      aescOrder=arr.sort((a,b)=> a > b ? 1:-1);
//              console.log(aescOrder);


//  Array form//

//  This method change all thing in array,,
//   const name=["Amjadkhan"];
//    const nameArray=Array.form(Array);
//   console.log(nameArray);

// index of//

//  const marks = [10, 20, 30, 40, 50, 60, 80];

//  check the index of element in array
//  const s = marks.indexOf(20);
//   console.log(s);


//  console.log("amjad")
//  console.log("khan")


//  const marks = [10, 20, 30, 40, 50, 60, 80];
//  const a =marks.indexOf(80);
//  console.log(a);


// destructure

// const names=["Amjad","Tufail","rashid","danish","wajid"];

// 1st method


//  const name1=names[0];
//  const name2=names[1];
//  const name3=names[2];
//  const name4=names[3];
//  const name5=names[4];
//  console.log(name1,name2);


// simple method

// const [name1,name2,name3]= names;
// console.log(name1,name3);

//object destructure

//  const student={

//   name:'Amjad khan',
//   age: 23,
//   marks:50;
//   isPass:'true',
//  friends:['tufail','rashid','hasin'],

//   address : {
//      city:'karak',
//      village: 'drish khel',
//  }

//  }

//  changeMarks(student);
//  const changeMarks=(marks)=>Object.marks=60;
//  console.log(changeMarks);



// const {name,address,isPass}=student;
// console.log(name,address,isPass);



