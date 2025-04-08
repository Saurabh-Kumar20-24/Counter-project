let para=document.getElementById("paragraph");
let count=0;
para.textContent=`Your current count is: ${count}`
document.getElementById("decrement").addEventListener("click",()=>{
    if(count<=0){
        // document.getElementById("count-alert").style.display="block"
        if (!document.getElementById("count-alert")) {
            let alertmsg = document.createElement("div");
            alertmsg.className = "alert";
            alertmsg.id = "count-alert";
            alertmsg.role = "alert";
            alertmsg.style.color="red"
            alertmsg.textContent = "Value can't be less than 0";
            para.after(alertmsg);
            document.getElementById("reset").style.display="none"
        }
    }else{
        count--;
        para.textContent=`Your current count is: ${count}`;
    }
})
document.getElementById("increment").addEventListener("click",()=>{
   let alertm=document.getElementById("count-alert");
   if(alertm){
    alertm.remove();
    document.getElementById("reset").style.display="inline"
   }
    count++;
   para.textContent=`Your current count is: ${count}`
})

document.getElementById("reset").addEventListener("click",()=>{
    count=0;
   para.textContent=`Your current count is: ${count}`
})

