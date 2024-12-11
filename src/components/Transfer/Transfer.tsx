import styles from "./styles.module.scss";

const Transfer = async () => {
  return (
    <section className={styles.transfer}>
      <div className={styles.grid}>
        <div className={styles.row}>
          <h3>About us</h3>
          <p><span>It's more than just transportation. It's freedom, a lifestyle, and a source of joy.</span> Our mission is to make taking care of your bike as simple and convenient as possible, so you can enjoy your rides without worrying about the little things.</p>
        </div>
        <div className={styles.row}>
          <h3>Certifications</h3>
          <p>We offer a unique bike maintenance subscription that includes regular servicing, repairs, and even on-site visits by our technicians. <span>Our team of professionals takes care of every bike as if it were their own.</span> </p>
        </div>
      </div>
      <div className={styles.column}>
        <h3>Qualifications</h3>
        <p>We use only professional tools and high-quality materials to ensure top-notch service for your bike.
          Our team strictly adheres to established maintenance standards, providing you with reliable and consistent care.
          <span> Cyclix stands as a symbol of quality and professionalism, guaranteeing satisfaction with every service.</span>
          Our Quality Standards Certification reflects our commitment to excellence in every aspect of bike maintenance.
        </p>
      </div>
    </section>
  );
};

export default Transfer;
