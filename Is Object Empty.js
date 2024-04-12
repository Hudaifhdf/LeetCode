
const obj={
    name:'wrangler',
    color:'grey'
}

const empty1={}
function fn(obj){
    
    let newq=Object.values(obj)
    // if(newq.length ===0){
    //     return true
    // }else{
    //     return false
    // }
   return newq.length===0?true:false;

}
console.log(fn(obj)); 