var isstatus=document.querySelector("h5");
flag=0;
var btn=document.querySelector("#btn");
    btn.addEventListener("click",function(){
    if(flag==0){
        isstatus.textContent="Friends";
        isstatus.style.color="green";
        btn.textContent="Remove Friend";
        flag=1;
    }
    else{
        isstatus.textContent="Stranger";
        isstatus.style.color="red";
        btn.textContent="Add Friend"
        flag=0;
    }
})



