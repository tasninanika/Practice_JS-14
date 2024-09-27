// write an async/await function that fetch data from an api and logs a message

async function loadData() {
    const res = await fetch(`url`);
    const data = await res.json();
    console.log(data);
    
}
loadData();