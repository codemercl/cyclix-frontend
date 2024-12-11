import styles from "./styles.module.scss";

const Hero = async () => {
    return (
        <section className={styles.hero}>
            <h1>
                <p>Simplify bike maintenance with{" "}</p>
                <span className={styles.gradientText}>Cyclix</span>
            </h1>
            <p>
                Welcome to your personal bike service!
            </p>
        </section>
    );
};

export default Hero;
