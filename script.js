const currentTime = document.querySelector("h2"),
selectmenu = document.querySelectorAll("select"),
setAlarmbtn = document.querySelector("button"),
content = document.querySelector(".content");

let AlarmTime;
let isalarmSet=false;
let ringtone = new Audio("ringtone.mp3");

for(var j =12; j>0; j--){
  j= j<10 ? "0"+ j:j;
  let option =`<option value ="${j}">${j}</option>`;
  selectmenu[0].firstElementChild.insertAdjacentHTML("afterend",option)
}
for(var j =59; j>=0; j--){
  j= j<10 ? "0"+ j:j;
  let option =`<option value ="${j}">${j}</option>`;
  selectmenu[1].firstElementChild.insertAdjacentHTML("afterend",option)
}
for(var j =2; j>0; j--){
  var ampm = j==1?"AM":"PM";
  let option =`<option value ="${ampm}">${ampm}</option>`;
  selectmenu[2].firstElementChild.insertAdjacentHTML("afterend",option)
}

setInterval(()=>
{
  
 let date = new Date();
 var hours =date.getHours();
 var min = date.getMinutes();
 var sec = date.getSeconds();
 ampm ="AM";

if(hours>=12){
 hours=hours-12;
 ampm="PM";
}
hours = hours == 0 ? hours=12 : hours;
hours =hours<10 ? "0" +hours : hours;
min =  min <10 ? "0" +min : min;
sec = sec<10 ? "0" +sec : sec;
currentTime.innerText= `${hours}:${min}:${sec} ${ampm}`;

if(AlarmTime == `${hours}:${min} ${ampm}`){
ringtone.play();
ringtone.loop =true;
}
},1000);

function setAlarm(){
    if(isalarmSet){
        AlarmTime="";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmbtn.innerText ="Set Alarm";
        return isalarmSet = false;

    }
         let time1 = `${selectmenu[0].value}:${selectmenu[1].value} ${selectmenu[2].value}`;
       
         AlarmTime=time1;
         if(time1.includes("Hours")|| time1.includes("Minutes") || time1.includes("AM/PM" )){
            return alert("Please Select a Valid time to set the Alarm !!" );

         }
         console.log(time1);
         isalarmSet = true;

         content.classList.add("disable");
         setAlarmbtn.innerText ="Clear Alarm";
}
setAlarmbtn.addEventListener("click",setAlarm);