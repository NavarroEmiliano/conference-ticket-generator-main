import styles from "./Form.module.css";
import uploadIcon from "../assets/images/icon-upload.svg";
import infoIcon from "../assets/images/icon-info.svg";

const Form = () => {
  return (
    <div className={styles.container}>
      <h2>Your Journey to Coding Conf 2025 Starts Here!</h2>
      <p>Secure your spot at next year's biggest coding conference.</p>
      <form className={styles.form}>
        <label className={styles.fileLabel} htmlFor="file">
          Upload Avatar
        </label>
        <div className={styles.fileBox}>
          <input type="file" name="file" id="file" />
          <div className={styles.iconContainer}>
            <img className={styles.icon} src={uploadIcon} alt="Upload Icon" />
          </div>
          <p>Drag and drop or click to upload</p>
        </div>
        <div className={styles.infoBox}>
          <img src={infoIcon} alt="Icon info" />
          <p>Upload your photo (JP or PNG, max size: 500kb)</p>.
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name"/>
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="example@gmail.com"/>
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="github">GitHub Username</label>
          <input type="text" id="github" placeholder="@yourusername"/>
        </div>
        <button type="submit">Generate My Ticket</button>
      </form>
    </div>
  );
};

export default Form;
