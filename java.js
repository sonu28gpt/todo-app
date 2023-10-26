let btn=document.querySelector("button");
let inp=document.querySelector("input");
inp.setAttribute("placeholder","enter task here");


btn.addEventListener("click",()=>{
let text=inp.value;
inp.value="";
// let yuhi=;
if(text.replace(/[ ]/g,'').length===0){
    alert("please enter task");
}else{
    let lis=document.createElement('li');
    lis.innerText=text;
    let del=document.createElement("button");
    del.innerText="delete";
    del.setAttribute("class","dele");
    lis.append(del);
// -----=========================delete event listener===============================
    del.addEventListener("click",()=>{
        let par=del.parentElement;
        par.remove();
    });


// ==========================delete event listener end===============================

    document.querySelector("ul").append(lis);
   
}
});


// ===================================another way of deleting list items (event delagation)====
let ul=document.querySelector("ul");
ul.addEventListener("click",(e)=>{
    if(e.target.nodeName=="BUTTON"){
       e.target.parentElement.remove();
    }

});
// --------------------methods end----------------------------------------------
