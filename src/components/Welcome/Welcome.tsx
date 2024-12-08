import Button from "../Button/Button";
import styles from "./styles.module.scss"

const Welcome = async () => {
    return (
        <section className={styles.welcome}>
            <h1>Our mission is to make caring for your <span>bike as simple and convenient as possible</span> so that you can enjoy your rides without being distracted by trifles.</h1>
            <div className={styles.controll}>
                <Button variant="secondary" size="large">
                    More about Infrastructure
                </Button>
                <Button variant="primary" size="large">
                    Learn about Enterprise
                </Button>
            </div>
        </section>
    );
};

export default Welcome;
