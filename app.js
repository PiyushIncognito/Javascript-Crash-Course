// alert('Hello, World') It will show an Pop-Up
// console.log('Hello'); It will show the given text or message in console
// console.error('This is an error'); It will show the given message in red as a error
// console.warn('This is an warning');It will show the given message in yellow as a warning

//let, const

// let age = 20; if we want to change the value then use 'let'
// const no = 55; if we do not want to change the value use 'const'
// console.log(age);
// console.log(no);


// String, Numbers, Boolean, null, undefined

// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof name); Output datatype string
// console.log(typeof age); Output datatype number
// console.log(typeof rating); Output datatype number
// console.log(typeof isCool); Output datatype boolean
// console.log(typeof x); Output datatype object
// console.log(typeof y); Output datatype undefined
// console.log(typeof z); Output datatype undefined


// const s = 'Hi Piyush';
// console.log(s.length); To find length of the string
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0,5));
// console.log(s.split(''));


//Arrays-variables that holds multiple values

// const numbers = new Array(12,22,65);
// console.log(numbers);

// const fruits = ['apples', 'orange', 'pappya'];
// fruits[3] = 'grapes';
// fruits.push('mango');
// fruits.unshift('milk');
// // fruits.pop(); removes last element from the array
// console.log(fruits);

const todos = [
    {
        id : 1,
        text : 'Its Piyush',
        isCompleted : true
    },
    {
        id : 1,
        text : 'Its Rahul',
        isCompleted : true
    },
    {
        id : 1,
        text : 'Its Prashant',
        isCompleted : false
    }
];

// console.log(todos);
// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos); It will convert the js to JSON format
// console.log(todoJSON);


//For Loop

// for(let i = 0; i<10;i++){
//     console.log(`For loop Number: ${i}`);
// }


//While Loop

// let i = 0;
// while(i<10){
//     console.log(`While loop num: ${i}`);
//     i++;
// }


//forEach, map, filter

// todos.forEach(function(todo){
//     console.log(todo.text);
// });

    // const todoText = todos.map(function(todo){
    //     return todo.text;
    // });
    // console.log(todoText);

    // const todoCompleted = todos.filter(function(todo){
    //     return todo.isCompleted == true;
    // });
    // console.log(todoCompleted);
    

    //if-else statement

    const x = 10;
    const y = 55;
    if (x==10 || y == 55 ){
        console.log('x is 10 and y is 55');
    } else if(x > 10 && y > 50) {
        console.log('x is greater than 10');
    } 
    else {
        console.log('x is not 10');
    }


    //? = ternary operator
    const z = 11;

    const color = x>10 ? 'red' : 'blue';
    console.log(color);


    //switch statement

    const colors = 'green';
    switch(colors){
        case 'red':
            console.log('color is red');
            break;
        case 'blue':
            console.log('color is blue');
            break;
        default:
            console.log('there is no color');
            break;
    }

function addNums(num1 = 1, num2 = 2){
    return num1 + num2;
}

console.log(addNums());