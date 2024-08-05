import express from "express";
import { connectdb } from "./connection.js";
import router from "./routes/url.route.js";
import { Url } from "./models/url.model.js";
import cors from "cors";


// get all data on localhost:8080/url
// post on localhost:8080/url
// redirect on localhost:8080/id

const app = express();
app.use(express.json());
app.use(cors());

connectdb("mongodb://127.0.0.1:27017/urlShortner")
  .then(() => console.log("dataBaseConnected :) "))
  .catch((e) => console.log(e));

app.use("/url", router);

app.get("/:id", async (req, res) => {
  let result = await Url.findOneAndUpdate({ shortUrl: req.params.id },{$push : {visitHistory : {
    timestamps : Date.now()
  }} } );
  if (result) return res.redirect(result.fullUrl);
  return res.status(400).send("something went wrong");
});

app.listen(8080, () => {
  console.log("Server is running....");
});
