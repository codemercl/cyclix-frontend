import styles from "./styles.module.scss";
import Image from 'next/image';

const Hero = async () => {
    return (
        <section className={styles.hero}>
            <Image
                src='/images/circle.svg'
                width={50}
                height={50}
                className={styles.image}
                alt='cirlce'
            />
            <h1>
            Simplify bike maintenance with{" "}
                <span className={styles.gradientText}>Cyclix</span>
            </h1>
            <p>
                Welcome to Cyclix - your personal bike service!.
            </p>
        </section>
    );
};

export default Hero;
