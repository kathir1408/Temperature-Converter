
document.getElementById("sub").onclick=function(){
    let num=document.getElementById("num").value;
    num=Number(num);
    
let celtofah=document.getElementById("celtofah");
let fahtocel=document.getElementById("fahtocel");
let res=document.getElementById("res");


    if(celtofah.checked){
        let temp= (9/5)*num+32;
        res.textContent=temp;
    }
    else if(fahtocel.checked){
        let temp=(num-32)*(5/9);
        res.textContent=temp;
    }
    else{
        console.log(typeof num + num);
        res.textContent="Selact an option";
    }
}

window.onload=function(){
    document.getElementById("num").value=0;
    document.getElementById("celtofah").checked=false;
    document.getElementById("fahtocel").checked=false;

}