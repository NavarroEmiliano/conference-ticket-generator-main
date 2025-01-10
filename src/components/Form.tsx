import styles from "./Form.module.css";
import uploadIcon from "../assets/images/icon-upload.svg";

const Form = () => {
  return (
    <div className={styles.container}>
      <h2>Your Journey to Coding Conf 2025 Starts Here!</h2>
      <p>Secure your spot at next year's biggest coding conference.</p>
      <form className={styles.form}>
        <label className={styles.fileLabel} htmlFor="file">Upload Avatar</label>
        <div className={styles.fileBox}>
          <input type="file" name="file" id="file" />
          <div className={styles.iconContainer}>
            <img className={styles.icon} src={uploadIcon} alt="Upload Icon" />
          </div>
          <p>Drag and drop or click to upload</p>
        </div>
      </form>
    </div>
  );
};

export default Form;
