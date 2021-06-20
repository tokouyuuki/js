const array = [2, 4, 7, 5, 4, 3, 8];

const NewArray = array.filter((x,i,) => {
  return array.indexOf(x) === i;
})

console.log(NewArray);




function leapYear(year) {
  if ((year % 4==0 && year % 100!==0) || (year % 400 == 0)){
    return true;
  } else {
    return false;
  }
}


console.log(leapYear(2020));
console.log(leapYear(2021));

