// Getting future time
const future = new Date(2024,11,24,0,0,1).getTime();

// function for the timer with interval
const timer = setInterval(function timer(){
    // Get elements to display the timer
    const day=document.getElementById("day");
    const hour=document.getElementById('hour');
    const minute=document.getElementById('minute');
    const second=document.getElementById('second');

    // Getting current time
    const now = new Date().getTime();
    
    // Obtaining time difference
    const distance = future - now;

    // Converting the time difference into days, hours, minutes and seconds
    const days = Math.floor((distance/(1000*60*60*24)));
    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    const seconds = Math.floor((distance%(1000*60))/(1000));

    //Displaying the times
    day.innerHTML=days;
    hour.innerHTML=hours;
    minute.innerHTML=minutes;
    second.innerHTML=seconds;

    //Clearing counter when time is reached
    if(distance<0){
        clearInterval(timer);
        document.getElementById('time-out').innerHTML="Timer Expired!";
    }
}, 1000);
