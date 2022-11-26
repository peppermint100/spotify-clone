// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dotenv from "dotenv"

export default function handler(req, res) {
  const { method } = req;
  dotenv.config();
  
  return res.status(200).json({ data: process.env.SPOTIFY_AUTH_TOKEN});
}
