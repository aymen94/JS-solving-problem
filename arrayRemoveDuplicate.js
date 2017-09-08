//exmple N=[1,9,2,1,6,2,7,9,6,5,4,7];
//after N=[1,9,2,6,7,5,4]

function removeDuplicate(N){
 N=N.filter((v,i,a) => a.indexOf(v)==i)
 return N;
}
