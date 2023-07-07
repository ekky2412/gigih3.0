const wait = time => new Promise((resolve) => setTimeout(resolve, time));

wait(1000).then( () => {
    console.log("oke")
})

// Using async-await
const asyncAwait = async() => {
    console.log("Before 1 second!");
    await wait(2000);
    console.log("After two seconds");
    console.log("After 3 seconds");
    console.log("After 4 seconds");
};

asyncAwait();