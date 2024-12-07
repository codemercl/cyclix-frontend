import Menu from "../Menu/Menu";
import styles from "./styles.module.scss"

const Footer = async () => {
  return (
    <footer className={styles.footer}>
      <Menu />
    </footer>
  );
};

export default Footer;
