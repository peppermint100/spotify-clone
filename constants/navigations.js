import { BsSearch } from "react-icons/bs"
import { GiHamburger } from "react-icons/gi"
import { MdAlbum } from "react-icons/md"

export const navigations = [
    {
        id: 1,
        title: "Search",
        href: "/search",
        icon: <BsSearch />
    }, 
    {
        id: 2,
        title: "Playlists",
        href: "/playlists",
        icon: <GiHamburger />
    }, 
    {
        id: 3,
        title: "New Albums",
        href: "/new-albums",
        icon: <MdAlbum />
    }, 
]