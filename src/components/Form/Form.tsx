import styles from "./Form.module.css";
import uploadIcon from "../../assets/images/icon-upload.svg";
import infoIcon from "../../assets/images/icon-info.svg";
import { ChangeEvent, useState } from "react";
import { User } from "../../App";

const Form = ({
  setUser,
  user,
}: {
  setUser: React.Dispatch<React.SetStateAction<User>>;
  user: User;
}) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files, type } = e.target;
    setUser((prev: User) => {
      if (type === "file" && files) {
        return {
          ...prev,
          userImg: files[0],
        };
      }

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user.fullName) {
      console.log("No papi, estas completamente confundido");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        <h2>Your Journey to Coding Conf 2025 Starts Here!</h2>
        <p>Secure your spot at next year's biggest coding conference.</p>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.fileLabel} htmlFor="file">
          Upload Avatar
        </label>
        <div className={styles.fileBox}>
          <input
            onChange={handleChange}
            type="file"
            name="file"
            id="file"
            accept="image/jpg, image/png"
          />
          <div className={styles.iconContainer}>
            <img className={styles.icon} src={uploadIcon} alt="Upload Icon" />
          </div>
          <p>Drag and drop or click to upload</p>
        </div>
        <div className={styles.infoBox}>
          <img src={infoIcon} alt="Icon info" />
          <p>Upload your photo (JPG or PNG, max size: 500kb)</p>.
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="username">Full Name</label>
          <input
            onChange={handleChange}
            type="text"
            id="username"
            name="username"
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="email">Email Address</label>
          <input
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="github">GitHub Username</label>
          <input
            onChange={handleChange}
            type="text"
            id="github"
            name="github"
            placeholder="@yourusername"
          />
        </div>
        <button type="submit">Generate My Ticket</button>
      </form>
    </div>
  );
};

export default Form;
