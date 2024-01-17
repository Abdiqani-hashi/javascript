# array_and_loops
##


`Create` an empty array and fill it with different elements using the push-method. Log it to the console.


```js
let emptyArray = []

emptyArray.push("Abdiqani",20, {key:"Hashi"})
for (i = 0; i < emptyArray.length; i++){
    console.log(emptyArray)
}

console.log(emptyArray)

````



`Create` an array containing arbitrary numbers. Loop throught that array and multiply each element with 3 and log that to the console.




```js


let arbitraryNumbers = [1,4,6,20];

for(i = 0; i < arbitraryNumbers.length; i++){
    arbitraryNumbers[i] *= 3;
   
}

console.log(arbitraryNumber


```




 ` Create` an array with numbers, and one empty array. Loop through the array with numbers and do an if check in each iteration. If that number is bigger then a specific number, 5 for example, add that number to the empty array. 
` Log `the new array to the console in the end. Remember to use the indexes to get the elements from the array with numbers.

```js

let arrayNumbers = [1,2,3,4,5,7,6,45,678,89]
let arrayEmpty= []

for (i = 0; i < arrayNumbers.length; i++){
    if(arrayNumbers[i] > 5){
        arrayEmpty.push(arrayNumbers[i])
    }
}
console.log(i, arrayEmpty)

```





`Create` an array with random numbers. Loop through the array and add them all together. Log the total sum of all the elements to the console. hint - You will need a variable here that store the sum as you iterate over the array.


```js
 let randomNumbers = [4,10,30,2,1]

 sum = 0;
 for(i = 0; i < randomNumbers.length; i++)
 {
    sum += randomNumbers[i]
 }
  console.log("Total: ",sum)
```



`Create` an array with some elements. Now search for a specific element while you are looping through the array. If you find the element you are searching for, log it to the console.


```js


```


`Create `an array with some elements, remove the last element WITHOUT using pop().


```js


```


 `Create` an array with 10 different numbers. Find the biggest number in the array and log it to the console. hint - You will need a variable that holds the current biggest number.

 
```js


```

`Create` an array with some elements and an empty array. Using a loop, copy the content of the first array to the empty array.


```js


```


`Create` an array with some elements. Use a loop to empty the entire array so there are no elements left in the end.


```js


```

