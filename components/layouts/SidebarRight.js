import HotChart from "./HotChart";
import HotArtists from "./HotArtists";

import styles from "./../../styles/SidebarRight.module.css";

export default function SidebarRight() {
    return (
        <div className={styles.container}>
            <section className={styles.hotChart}>
                <HotChart />
            </section>
            <section className={styles.hotArtists}>
                <HotArtists />
            </section>
        </div>
    )
}