import Link from "next/link"

export default function SpotifyLogin() {
    const REDIRECT_URI = "http://localhost:3000/redirect-uri"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"

     return (
        <div>
            <Link href={`${AUTH_ENDPOINT}?redirect_uri=${REDIRECT_URI}&response_type=token&client_id=${process.env.SPOTIFY_CLIENT_ID}`}>Login to Spotify</Link>
        </div>
     )
}