import { useQuery } from "@tanstack/react-query";
import { getFeaturedPlaylists } from "./../../libs/api";

export default function FeaturedPlaylists() {
    const query = useQuery(["featuredPlaylists"], getFeaturedPlaylists, {
        retry: 0
    });

    if (query.isLoading || query.isError) {
        return <div>loading...</div>
    }

    return (
        <div>
            FeaturedPlaylists
        </div>
    )
}