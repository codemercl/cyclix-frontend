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
                Make bike maintenance easier with{" "}
                <span className={styles.gradientText}>Cyclix</span>
            </h1>
            <p>
                Build performant, personalized customer experiences with scalable
                infrastructure and secure data handling on any device, in any location.
            </p>
        </section>
    );
};

export default Hero;
