const future = new Date(2024,11,24,0,0,1).getTime();

const timer = setInterval(function timer(){

    const day=document.getElementById("day");
    const hour=document.getElementById('hour');
    const minute=document.getElementById('minute');
    const second=document.getElementById('second');

    const now = new Date().getTime();
    

    const distance = future - now;

    const days = Math.floor((distance/(1000*60*60*24)));
    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    const seconds = Math.floor((distance%(1000*60))/(1000));

    day.innerHTML=days;
    hour.innerHTML=hours;
    minute.innerHTML=minutes;
    second.innerHTML=seconds;

    if(distance<0){
        clearInterval(timer);
        document.getElementById('time-out').innerHTML="Timer Expired!";
    }
}, 1000);
