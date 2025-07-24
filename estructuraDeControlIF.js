let num31 = 10;
let num32 =100;

if(num31 == num32) {
    num31 = 0;
} else {
    num31 = 1;
}

num31 = num31 != num32 ? num31 = 0: num31 = 1;

console.log(num31);
