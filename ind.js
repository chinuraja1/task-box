let txt=document.createElement("input");
txt.setAttribute("id","txtbox");
txt.setAttribute("type","text");

let txt1=document.createElement("input");
txt1.setAttribute("id","txtbox1");
txt1.setAttribute("type","text");

let txt2=document.createElement("input");
txt2.setAttribute("id","txtbox2");
txt2.setAttribute("type","text");

let btn=document.createElement("button");
btn.setAttribute("id","btnReadValue");
btn.textContent="Read Value";

let p=document.createElement("p");

btn.addEventListener("click",()=>{
    let txt=document.getElementById("txtbox");
    let txt1=document.getElementById("txtbox1");
    let txt2=document.getElementById("txtbox2");
   if(!txt.value || !txt1.value || !txt2.value)
   {
       console.log("not be empty");
       p.innerText="not be empty";
   }else{
       console.log(`value is ${txt.value},${txt1.value},${txt2.value}`);
       p.innerText=`value is ${txt.value},${txt1.value},${txt2.value}`;

   }
   document.body.appendChild(txt);
   document.body.appendChild(txt1);
   document.body.appendChild(txt2);
   document.body.appendChild(btn);
   document.body.appendChild(p);
})