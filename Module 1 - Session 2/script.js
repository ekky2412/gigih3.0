let songList = [
    {title: "Brik My Hard", artists: [{name: "Yusuf",}], duration: 200},
    {title: "U Brik Mai Hand", artists: [{ name: "Makmur",}], duration: 400},
];

const getSongPromise = (time) => new Promise((resolve, reject) => {
    const chance = Math.random();
    if(chance < 0.2){
        reject('Lagu not found!')
    }
    else{
        setTimeout(resolve(songList), time);
    }
});
   
// Promise
// getSongPromise(2000)
// .then((response) => {
//     console.log(response);
// }).catch((err) => console.log(err.message));

// Async Await
const getSongAsync = async() => {
    try {
        const response = await getSongPromise(2000);
        console.log(response);
    } catch(err) {
        console.log(err);
    }
}
getSongAsync();