# JS-solving-problem
javascript function for solving problem 

## Create new Array with single item of the previous array (arraySaveSingleItem.js)

* exemple A=[1,9,2,1,6,2,7,9,6,5,4,7]
* Sort A=[ 1, 1, 2, 2, 4, 5, 6, 6, 7, 7, 9, 9 ]
* return [4,5]
### CODE:
```
function arraySingleItem(A) {
    A=A.sort() 
  var newA=[];  
  A.forEach((v,i,a)=>{
    if(v==a[i+1] || v==a[i-1])
      return;
    else
      newA.push(v);
  })
  return newA;
}
```

## Remove Dupticate From Array (arrayRemoveDuplicate.js)
* exmple N=[1,9,2,1,6,2,7,9,6,5,4,7];
* after N=[1,9,2,6,7,5,4]
### CODE:
 ```
 function removeDuplicate(N){
 N=N.filter((v,i,a) => a.indexOf(v)==i)
 return N;
}
```
