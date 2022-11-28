import axios from "axios";

export async function getFeaturedPlaylists() {
    const { data } = await axios.get("https://api.spotify.com/v1/browse/featured-playlists");
    return data;
}