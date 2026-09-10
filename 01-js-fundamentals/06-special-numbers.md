# Special Numbers

JS gives us access to three very interesting numbers: 0, -0 and NaN.

## -0

Why do we have -0 in JS?

A lot of quantities that we learn are a composition of magnitude and direction.

Example:  
Let’s say, on a 2D plane (x-y axis plane), there is a car which is running and it is de-accelerating.  
At some point of time, the velocity of the car becomes 0.  
At the instant when the car stopped, in which direction it was actually facing?  
So, for this, we need to have the access to the direction.

Having negative numbers can already give us directions, but having access to something like -0 will also help us because if velocity becomes 0 and we want to know the direction, so we know that if velocity is -0 m/s, then the car will be facing in negative x-direction and vice-versa.

So, -0 helps us in directional quantities, where we have to show directions.

## NAN (Not A Number)

What is the use-case of NaN?

Let’s say, we have an array of strings and we want to return the index of a given string.  
If the string is present, we will simply return its index number, but in case if the string is not present, then we want to return an invalid number, so we can return NaN.

If there is a situation where we are bound to return a number, but there is no valid possible number to return, then we use NaN.  
So, NaN is a number that is used to show a situation of an Invalid Number.

Another Example:  
Below is an invalid division above that we are trying to do.

```js
console.log(undefined/null); // NaN
```

Beautiful property about NaN:

Which is the only number in JS not equal to itself?  
NaN

Most people say that NaN is an invalid number, so there is no point of having any kind of equality there.

We also have Infinity and -Infinity numbers as well in JS.

Special Numbers in JS:

```js
console.log(+0);
console.log(-0);
console.log(NaN);
console.log(Infinity);
console.log(-Infinity);
console.log(10 < Infinity); // true
```
