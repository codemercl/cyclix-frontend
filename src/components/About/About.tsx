import styles from "./styles.module.scss"
import { FaDollarSign } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";
import { BsLightningChargeFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { ImAccessibility } from "react-icons/im";
import { ImBubbles3 } from "react-icons/im";

const About = async () => {
    return (
        <section className={styles.column}>
            <div className={styles.item}>
                <p><FaDollarSign /> Saving time and money</p>
                <h3>HaDiscounts on repairs, transparent rates and no unexpected costs.</h3>
            </div>
            <div className={styles.item}>
                <p><Ri24HoursFill /> 24/7 support</p>
                <h3>Always in touch! We are ready to answer your questions and help at any time</h3>
            </div>
            <div className={styles.item}>
                <p><BsLightningChargeFill /> Convenience comes first</p>
                <h3>Forget about trips to workshops - we will come to you to service your bike</h3>
            </div>
            <div className={styles.item}>
                <p><IoMdSettings /> Regular maintenance</p>
                <h3>Keep your bike in top condition with our monthly plans</h3>
            </div>
        </section>
    );
};

export default About;
