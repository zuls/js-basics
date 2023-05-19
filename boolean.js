let error = '';

if (error) {
    console.log("there is error");
}

//string 

let my_name = `Kamal`;
let my_message = `Hi i am ${my_name}` + " " + "Hello " + `${my_name}`;

console.log(my_message);


let numberObject = new Number(100);

console.log(numberObject.valueOf())

let distance = 19.006;

console.log(distance.toFixed(1));


let z = 1000;

console.log(z.toExponential());


console.log(distance.toPrecision(5));


let x_val = 10, y_val= 20;

let z_val = x_val +y_val;

console.log(z_val);

let result_101 = 10 + '20';

console.log(result_101);


let result_102 = '51' * 2;

console.log(result_102);



let energy = {
    valueOf(){
        return 100;
    }
};

let currentEnergy = energy -10;
console.log(currentEnergy);


function isOdd(num){
    return num % 2; 
}

console.log(isOdd(4));

//ES6 function declaration 

const isOdd_es6 = (num) => num % 2; 

console.log(isOdd_es6(5));


let title='x'; 

title ||='untitled'; 

console.log(title);

let user102 = {
    username : 'Zularbine'
};

user102.nickname ??='Kamal';

console.log(user102);


let result_103 = Math.pow(2,2);
console.log(result_103);

let result_104 = 2**2;
console.log(result_104);


let score  = new Array(10);
score[0] ='10';
score[4] ='50';
score[9] = '90';

console.log(score);
console.log('lengh of the array score is : ', score.length);

let score_101 = [10,12];
console.log(score_101);

let age_101 = 19; 
let country = 'USA';

if (age_101 >= 16 && country === 'USA' ){
    console.log('You are eligible to drive');

} else {
    console.log('you are not eligible to drive');
}

