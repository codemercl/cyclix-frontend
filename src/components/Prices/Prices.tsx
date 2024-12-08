'use client'

import { SiHiveBlockchain } from "react-icons/si";
import Button from "../Button/Button";
import styles from "./styles.module.scss"
import { FaDollarSign } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { RiBikeLine } from "react-icons/ri";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { useSelectedPrice } from "../../hooks/useSelectedPriceContext";
import { useRouter } from 'next/navigation';

const Prices = () => {
    const router = useRouter();
    const { setSelectedPrice } = useSelectedPrice();

    const handleGetData = (price: string) => {
        if (price) {
            setSelectedPrice(price);
            router.push('/signup');
        }
    };

    return (
        <section className={styles.prices} id="sign-up-section">
            <div className={styles.column}>
                <div className={styles.head}>
                    <h1>Basic</h1>
                    <p>Suitable for those who want basic regular maintenance <span>DKK. 49 /month</span>, per member.</p>
                </div>
                <div className={styles.body}>
                    <div className={styles.items}>
                        <SiHiveBlockchain />
                        <span>Chain lubrication</span>
                    </div>
                    <div className={styles.items}>
                        <FaCheckDouble />
                        <span>Checking the condition of the bike</span>
                    </div>
                    <div className={styles.items}>
                        <MdCleaningServices />
                        <span>Deep cleaning</span>
                    </div>
                    <div className={styles.items}>
                        <RiBikeLine />
                        <span>Inflating tires</span>
                    </div>
                    <div className={styles.items}>
                        <RiDiscountPercentFill />
                        <span>20% discount on repair services</span>
                    </div>
                </div>
                <div className={styles.footer}>
                    <Button variant="tertiary" size="large" onClick={() => handleGetData("Basic")}>
                        Choose
                    </Button>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.head}>
                    <h1>Standard</h1>
                    <p>An ideal choice for active cyclists <span>DKK. 159 /month</span>, per member.</p>
                </div>
                <div className={styles.body}>
                    <div className={styles.items}>
                        <SiHiveBlockchain />
                        <span>Chain lubrication</span>
                    </div>
                    <div className={styles.items}>
                        <FaCheckDouble />
                        <span>Checking the condition of the bike</span>
                    </div>
                    <div className={styles.items}>
                        <MdCleaningServices />
                        <span>Deep cleaning</span>
                    </div>
                    <div className={styles.items}>
                        <RiBikeLine />
                        <span>Inflating tires</span>
                    </div>
                    <div className={styles.items}>
                        <FaDollarSign />
                        <span>Free visit of a specialist</span>
                    </div>
                    <div className={styles.items}>
                        <RiDiscountPercentFill />
                        <span>50% discount on repair services</span>
                    </div>
                </div>
                <div className={styles.footer}>
                    <Button variant="tertiary" size="large" onClick={() => handleGetData("Standard")}>
                        Choose
                    </Button>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.head}>
                    <h1>Premium</h1>
                    <p>Maximum comfort and everything included. <span>DKK. 1.299 /month</span>, per member.</p>
                </div>
                <div className={styles.body}>
                    <div className={styles.items}>
                        <SiHiveBlockchain />
                        <span>Chain lubrication</span>
                    </div>
                    <div className={styles.items}>
                        <FaCheckDouble />
                        <span>Checking the condition of the bike</span>
                    </div>
                    <div className={styles.items}>
                        <MdCleaningServices />
                        <span>Deep cleaning</span>
                    </div>
                    <div className={styles.items}>
                        <RiBikeLine />
                        <span>Inflating tires</span>
                    </div>
                    <div className={styles.items}>
                        <FaDollarSign />
                        <span>100% discount on repairs</span>
                    </div>
                    <div className={styles.items}>
                        <FaHome />
                        <span>A technician will come to your home for service.</span>
                    </div>
                </div>
                <div className={styles.footer}>
                    <Button variant="tertiary" size="large" onClick={() => handleGetData("Premium")}>
                        Choose
                    </Button>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.head}>
                    <h1>Premium</h1>
                    <p>Maximum comfort and everything included <span>DKK. 1200 /month</span>, per member.</p>
                </div>
                <div className={styles.body}>
                    <div className={styles.items}>
                        <SiHiveBlockchain />
                        <span>Chain lubrication</span>
                    </div>
                    <div className={styles.items}>
                        <FaCheckDouble />
                        <span>Checking the condition of the bike</span>
                    </div>
                    <div className={styles.items}>
                        <MdCleaningServices />
                        <span>Deep cleaning</span>
                    </div>
                    <div className={styles.items}>
                        <RiBikeLine />
                        <span>Inflating tires</span>
                    </div>
                    <div className={styles.items}>
                        <FaDollarSign />
                        <span>100% discount on repairs</span>
                    </div>
                    <div className={styles.items}>
                        <FaHome />
                        <span>A technician will come to your home for service.</span>
                    </div>
                </div>
                <div className={styles.footer}>
                    <Button variant="tertiary" size="large" onClick={() => handleGetData("Premium+")}>
                        Choose
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Prices;
