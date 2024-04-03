
function fn(arr,target1){
    let arr1=[]
   for (let i = 0; i < arr.length; i++) {
   for (let j = i+1; j < arr.length; j++) {
     if(arr[i]+arr[j]==target1)
      arr1.push(i,j)
   }
    
   }
return arr1
    
}


console.log(fn([12,8,11,7,5,6],20));