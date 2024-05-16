const input='hello world hi guys '

function fn1(s){

    const res=s.trim().split(' ')
    
    const leng=res.find((it,id)=>id==res.length-1)
   
    return leng.length
 

}
console.log( fn1(input))