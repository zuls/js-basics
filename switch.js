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

