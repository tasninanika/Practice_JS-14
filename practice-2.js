// The function tellJoke()  below logs a funny message every 2 seconds and after 10 seconds, it stops. complete the code below and see the output

function tellJoke(){
    console.log("Why don't scientists trust atoms? Because they make up everything!");
}

const jokeInterval = setInterval(tellJoke, 2000);

// After 10 seconds, stop telling jokes
setTimeout(()=>{
    clearInterval(jokeInterval);
}, 10000);

