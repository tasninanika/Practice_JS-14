// write a function that displays a message after 5s

setTimeout(() =>{
    console.log('Hello World!');
}, 5000);



// write a function called delayedGreeting() that takes two parameters name and delay time, and logs a greeting message after the given delay time
function delayedGreeting(name, delay_time){
    setTimeout(()=>{
        console.log('Hello, ' + name + '!');
    }, delay_time);
}

delayedGreeting('Alice', 2000);