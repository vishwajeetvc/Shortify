import ShortUniqueId from "short-unique-id";
import { Url } from "../models/url.model.js";

export async function handlePost(req, res) {
  const shortId = new ShortUniqueId({ length: 8 }).rnd();
  const { fullUrl } = req.body;
  try {
    await Url.create({
      fullUrl: fullUrl,
      shortUrl: shortId,
      visitHistory: [],
    });
    return res.json({ shortUrl: `localhost:8080/${shortId}` });
  } catch (e) {
    console.log(e)
    return res.status(400).json({ message: "BadRequest" });
    //return res.status(400).send("Bad Request");
  }
}
export async function handleGetAll(_req, res) {
  return res.send(await Url.find({}));
}
