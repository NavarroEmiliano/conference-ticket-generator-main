import styles from "./Formtitle.module.css";

const Formtitle = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <h2>Your Journey to Coding Conf 2025 Starts Here!</h2>
        <p>Secure your spot at next year's biggest coding conference.</p>
      </div>
    </div>
  );
};

export default Formtitle;
