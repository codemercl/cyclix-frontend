import Button from "../Button/Button";
import styles from "./styles.module.scss"

const Welcome = async () => {
    return (
        <section className={styles.welcome}>
            <h1><span>Deploy once</span>, deliver everywhere. When you push code to Vercel, we make it instantly available across the planet.</h1>
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
