import Link from "next/link";
import Image from "next/image";
import Nav from "../Nav/Nav";
import styles from "./styles.module.scss";
import Button from "../Button/Button";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <Link href={`/`} className="block w-[135px] h-[35px]">
        <h4>Cyclix</h4>
      </Link>
      <Nav />
      <div className={styles.controll}>
        <Link href="/signup">
          <Button variant="secondary" size="small">
            Sign Up
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="primary" size="small">
            Log In
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
