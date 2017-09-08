//exemple A=[1,9,2,1,6,2,7,9,6,5,4,7]
//Sort A=[ 1, 1, 2, 2, 4, 5, 6, 6, 7, 7, 9, 9 ]
// return [4,5]

function arraySingleItem(A) {
    A=A.sort() //sort Array
  var newA=[];   // or newA= new Array;
  A.forEach((v,i,a)=>{
    if(v==a[i+1] || v==a[i-1])
      return;
    else
      newA.push(v);
  })
  return newA; // Array with single item of the previous array
}
