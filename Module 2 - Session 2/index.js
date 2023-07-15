import express from "express";
import users from "./users.json" assert {type: "json"};

const app = express();

// membuat post json / url encoded bisa dibaca
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/", (req,res) => {
    res.json({
        data: "GET Request",
    })
})

app.post("/", (req,res) => {
    res.json({
        data: "POST Request",
    })
})

app.put("/", (req,res) => {
    res.json({
        data: "PUT Request",
    })
})

app.delete("/", (req,res) => {
    res.json({
        data: "DELETE Request",
    })
})

app.get("/about", (req,res) => {
    res.json({
        data: "About GET Request",
    })
})

app.get("/user/:id", (req,res) => {
    const { id } = req.params;
    
    const user = users.filter((user) => user.id === Number(id));
    
    if (user.length === 0){
        return res.status(404).json({
            message: "User not found!",
        })
    }

    res.json({
        data: user
    })
})

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