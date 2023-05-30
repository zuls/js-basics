let day = 5 ;

let dayName; 

switch(day){
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;    
    case 5:
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
        break;        
    case 7:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'invalid day';

}

console.log(dayName);



let count_101 =1 ; 

while (count_101 <=10){
    console.log(count_101);
    count_101 ++;
}

let count_102 = 11;

do{
    console.log(count_102);
    count_102 ++;

}while (count_102 <=20);


let i = 1; 

for (i; i<=10 ; i++){

    if (i === 5 )
        break;
    console.log(i);
}

outer: for (let i =1; i<=3; i++){
    for(let j= 1; j<=3; j++){
        if (i+j ===4)
            break outer;
        console.log(i,j);
    }
}

for (let i_101=0; i_101<=10; i_101++){
    if (i_101 % 2 === 0)
        continue;
    console.log(i_101);
}

function add(a,b){
    return a+b;
}

console.log(add(20,10));


function add_101(){
    let sum = 0
    for (let i_102 = 0; i_102 < arguments.length; i_102++){

        sum += arguments[i_102];
    }
    return sum;
}

console.log(add_101(2,4,4));


function add_102(a,b){
    return a+b;
}

let sum_101 = add_102;

function average_101(a, b, fn){
    return fn(a,b) / 2;
}

let result_105 = average_101(5,3,sum_101);

console.log(result_105);



let numbers_105 = [5,7,2,8,1,8,6,5];

numbers_105.sort((a,b) => b-a );

console.log(numbers_105);


