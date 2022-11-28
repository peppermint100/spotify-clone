import Episodes from "./Episodes";
import FeaturedPlaylists from "./FeaturedPlaylists";

import styles from "./../../styles/SidebarRight.module.css";

export default function SidebarRight() {
    return (
        <div className={styles.container}>
            <section className={styles.hotChart}>
                <FeaturedPlaylists />
            </section>
            <section className={styles.hotArtists}>
                <Episodes />
            </section>
        </div>
    )
}