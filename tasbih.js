//   frist 
   let count = 0;
     document.getElementById('incri').addEventListener('click',function(){
     count += 1
     let counting  =  document.getElementById('count');
     counting.innerText = count
     if(count > 33){
        return alert('Subhanallah complete please fill up in another one')
     }
 })

     document.getElementById('decri').addEventListener('click',function(){
     count -= 1
     let counting  =  document.getElementById('count');
     counting.innerText = count

     if(count < 0){
        return alert('you cant added negative value')
     }
 })
 

//    secend
 let count2 = 0;
     document.getElementById('incri2').addEventListener('click',function(){
     count2 += 1
     let counting2  =  document.getElementById('count2');
     counting2.innerText = count2
     if(count2 > 33){
        return alert('Subhanallah complete please fill up in another one')
     }
 })

 document.getElementById('decri2').addEventListener('click',function(){
    count2 -= 1
    let counting2  =  document.getElementById('count2');
    counting2.innerText = count2

    if(count2 < 0){
       return alert('you cant added negative value')
    }
})

     
// third

 
let count3 = 0;
     document.getElementById('incri3').addEventListener('click',function(){
     count3 += 1
     let counting3  =  document.getElementById('count3');
     counting3.innerText = count3
     if(count3 > 33){
        return alert('Subhanallah complete please fill up in another one')
     }
 })

 document.getElementById('decri3').addEventListener('click',function(){
    count3 -= 1
    let counting3  =  document.getElementById('count3');
    counting3.innerText = count3

    if(count3 < 0){
       return alert('you cant added negative value')
    }
})

// reset button
document.getElementById('reset').addEventListener('click',function(){
         let reset1 = document.getElementById('count') 
         reset1.innerText = 0;

         let reset2 = document.getElementById('count2') 
         reset2.innerText = 0;

         let reset3 = document.getElementById('count3') 
         reset3.innerText = 0;
})
 
