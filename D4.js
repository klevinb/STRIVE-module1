/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

function area(a, b){
    return (a*b);
}

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

function crazySum(a, b){
    if(a === b){
        return 3 * (a + b);
    }
}

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

function crazyDiff(x){
    let ad = Math.abs(x - 19);

    if ( x > 19){
        return 3 * ad;
    }

}

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

function boundary(N){
    if(N>20 && N<100 || N === 400){
        return true;
    }
}

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

function strivify(S){
    let string = "Strive"+S;

    let startWithStrive = S.startsWith("Strive");

    if(startWithStrive){
        return S;
    }

}

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

function check3and7(nr){
    if( nr % 3 == 0 || nr % 7 == 0 ){
        return true;
    }else{
        return false;
    }
}

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

function reverseString(S){
    return S.split("").reverse().join("");
}

console.log(reverseString("Strive"))


/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

function upperFirst(str) {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
 
 console.log(upperFirst("hei, my name is Klevin."));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

function cutString(S){
    let newS;
    newS=S.substring(1,S.length-1);
    return newS;
}

console.log(cutString("klevin"));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

function giveMeRandom(n){
    let array=[];

    for(let i=0; i<n; i++){
        array[i] = Math.floor(Math.random() * 11);
    }
    return array;
}

console.log(giveMeRandom(5));

/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returs the sum of the numbers bigger than 5.
*/

function checkArray(array){
    let input=array;
    let sum=0;

    console.log(input);

    for( let i=0; i<input.length;i++){
        if(input[i]>5){
            console.log("Element in array which is bigger than 5 : ",input[i]);
            sum += input[i];
        }
    }
    console.log("The sum of elements bigger than 5 is : ",sum);
}

checkArray(giveMeRandom(5));

/* EXERCISE 12
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/

const shoppingCart=[{price: 23, name: "iPhone Cover",id: 0001, nr: 1 },
{price: 670, name: "iPhone X 64gb", id: 21341, nr: 1},
{price: 35, name: "PowerBank", id: 2314, nr: 1}
];

function shippingCartTotal(input){
    let total=0;
    for(let i=0; i<input.length;i++){
            total+= input[i].price;
    }
    console.log("Total price is : ",total);
}

shippingCartTotal(shoppingCart);

/* EXERCISE 13
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "addToShoppingCart" which receives a new object and add it to shoppingCart and returns the number of items in the shoppingCart.
*/

const shoppingCart1=[{price: 23, name: "iPhone Cover",id: 0001, nr: 1 },
{price: 670, name: "iPhone X 64gb", id: 21341, nr: 1},
{price: 35, name: "PowerBank", id: 2314, nr: 1}
];

function addToShoppingCart(obj){
    let items=0;
    shoppingCart1.push(obj);
    for(let i=0; i<shoppingCart1.length; i++){
        items +=1;
    }
    console.log("There are ",items," products in the cart!");

}

const newObj={price: 22, name: "random", id: 21421, nr:1};

addToShoppingCart(newObj);

/* EXERCISE 14
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/

function maxShoppingCart(obj){
    let max= -999;
    for(let i=0; i<obj.length;i++){
        if(obj[i].price> max){
            max=obj[i].price;
        }
    }
    console.log("The most expensive item in cart is : ",max);
}
maxShoppingCart(shoppingCart1);

/* EXERCISE 15
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

function latestShoppingCart(obj){
    for(let i=0; i<obj.length; i++){
        if(i === obj.length-1){
            console.log(obj[i]);
        }
    }
}

latestShoppingCart(shoppingCart1);

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/