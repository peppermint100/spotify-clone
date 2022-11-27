import Link from "next/link";
import { navigations } from "../../constants/navigations";
import styles from "./../../styles/SidebarLeft.module.css";
import spotifyLogo from "./../../public/logo.svg"
import Image from "next/image";

export default function SidebarLeft() {
  return (
    <aside className={styles.container}>
      <section className={styles.logo}>
        <Image src={spotifyLogo} alt="logo" width="170" />
      </section>
      <section className={styles.navigations}>
        { navigations.map(navigation => (
          <div className={styles.navigation} key={navigation.id}>
            <span className={styles.icon}>
              { navigation.icon }
            </span>
            <Link href={navigation.href}>
              { navigation.title }
            </Link>
          </div>
        ))}
      </section>
    </aside>
  )
}