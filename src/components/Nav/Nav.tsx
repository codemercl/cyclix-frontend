import Link from "next/link";
import styles from "./styles.module.scss";

const Menu: React.FC = () => {
    return (
        <ul className={styles.menu}>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/plans">Plans</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    );
};

export default Menu;
