import styles from '../../styles/MainLayout.module.css'
import SidebarLeft from './SidebarLeft'
import SidebarRight from './SidebarRight'

export default function MainLayout({ children }) {

    return (
        <div className={styles.container}>
            <section className={styles.sidebarLeft}>
                <SidebarLeft />
            </section>
            <section className={styles.main}>
                { children }
            </section>
            <section className={styles.sidebarRight}>
                <SidebarRight />
            </section>
        </div>
    )
}