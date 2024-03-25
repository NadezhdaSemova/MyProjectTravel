import express from 'express';
import cors from "cors";
import jwt from "jsonwebtoken";

import { places, users } from "./src/data"

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

app.get("/api/places", (req, res) => {
    res.send(places);
})

app.get("/api/places/search/:searchPlace", (req, res) => {
    const searchPlace = req.params.searchPlace;
    const placesSearch = places.
        filter(place => place.place.toLocaleLowerCase().includes(searchPlace.toLocaleLowerCase()));
    res.send(placesSearch)
});

app.get("/api/places/:placeId", (req, res) => {
    const placeId = req.params.placeId;
    const placeSearch = places.find(place => place.id == placeId);
    res.send(placeSearch);
})

app.post("/api/users/login", (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);

    if(user){
        res.send(generateTokenResponse(user))
    }else {
        res.status(400).send("User is not in the list")
    }
})

const generateTokenResponse = (user: any) =>{
    const token = jwt.sign({
        email: user.email
    },"Secret", {
        expiresIn:"20d"
    });

    user.token = token;
    return user;
}

const port = 5000;
app.listen(port, () => {
    console.log(`Website is listening on port ${port}`)
})