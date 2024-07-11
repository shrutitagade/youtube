import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";
app.use(cors());
dotenv.config();
app.get("/jokes", (req, resp) => {
    const jokes = [{
        id: 1,
        content: "Joke 1"
    }, {
        id: 2,
        content: "Joke 2"
    }, {
        id: 3,
        content: "Joke 3"
    }, {
        id: 4,
        content: "Joke 4"
    }
        , {
        id: 2,
        content: "Joke 2"
    }, {
        id: 3,
        content: "Joke 3"
    }, {
        id: 4,
        content: "Joke 4"
    }, {
        id: 4,
        content: "Joke 4"
    }]
    resp.send(jokes);
})
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})
