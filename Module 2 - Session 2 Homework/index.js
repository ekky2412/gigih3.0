import express from "express";
import playlist from "./playlist.json" assert {type: "json"};
import { v4 as uuidv4 } from "uuid";

const app = express();

// membuat post json / url encoded bisa dibaca
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/songs/:id", (req,res) => {
    const { id } = req.params;
    
    const songs = playlist.filter((songs) => songs.id === Number(id));
    
    if (songs.length === 0){
        return res.status(404).json({
            message: "User not found!",
        })
    }

    res.json({
        songs
    })
})

app.get("/songs", (req,res) => {
    const { title, artist } = req.query;
    let songs = []
    
    if (title && artist){
        songs = playlist.filter((songs) => songs.title.includes(title) && songs.artist.includes(artist));
    } else if (title){
        songs = playlist.filter((songs) => songs.title.includes(title));
    } else if (artist){
        songs = playlist.filter((songs) => songs.artist.includes(artist));
    } else {
        songs = playlist;
    }

    if (songs.length === 0){
        return res.status(404).json({
            message: "Playlist not found!",
        })
    }

    res.json({
        songs
    })
})

app.post("/songs", (req, res) => {
    let newSongs = req.body;
  
    // add new user to users data
    newSongs = {
      id: uuidv4(),
      ...newSongs,
    };
    playlist.push(newSongs);
  
    // Add the headers (custom headers), and will overwrite the current if exists
    res.set("X-Powered-By", "Alfian");
    res.status(201).json({
      data: newSongs,
    });
  });

app.get("/users", (req,res) => {
    const { name, province } = req.query;
    let data = []

    const { authorization } = req.headers;

    if (authorization !== "anris"){
        return res.status(403).json({
            message: "Forbidden to access",
        })
    }


    if(province && name){
        data = users.filter(
            (user) => user.province.includes(province) && user.name.includes(name));
    }
    else if (province){
        data = users.filter((user) => user.province.includes(province));
    }

    else if (name && data.length > 0) {
        data = users.filter((user) => user.name.includes(name));
    }

    else {
        data = users;
    }

    if (data.length === 0){
        return res.status(404).json({
            message: "User not found!",
        })
    }

    res.json({
        data: data
    })
})

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
})