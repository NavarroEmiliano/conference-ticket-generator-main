import styles from "./Form.module.css";
import uploadIcon from "../../assets/images/icon-upload.svg";
import { ChangeEvent, useState } from "react";
import { User } from "../../App.tsx";
import InfoIcon from "../Icons/InfoIcon.tsx";

interface ErrorMessage {
  username?: string;
  email?: string;
  github?: string;
  userImg?: string;
}

const Form = ({
  setUser,
  user,
}: {
  setUser: React.Dispatch<React.SetStateAction<User>>;
  user: User;
}) => {
  const [errorMessage, setErrorMessage] = useState<ErrorMessage | null>(null);
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files, type } = e.target;
    setUser((prev: User) => ({
      ...prev,
      [name]: type === "file" && files ? files[0] : value,
    }));

    if (type === "file" && files) {
      if (files[0].size < 5000) {
        setImageSrc(URL.createObjectURL(files[0]));
        setErrorMessage((prev) => ({ ...prev, userImg: undefined }));
      } else {
        setErrorMessage((prev) => ({
          ...prev,
          userImg: "File too large. Please upload a photo under 5MB.",
        }));
        setImageSrc(undefined);
      }
    }
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: ErrorMessage = {};

    if (!user.username) errors.username = "This field cannot be empty";
    if (!user.email) errors.email = "This field cannot be empty";
    if (!user.github) errors.github = "This field cannot be empty";
    if (!imageSrc) errors.userImg = "This field cannot be empty";

    setErrorMessage(errors);

    if (Object.keys(errors).length === 0) {
      setUser((prev) => ({ ...prev, imgUrl: imageSrc }));
      setErrorMessage(null);
    }
  };

  const handleRemoveImg = () => {
    setUser((prev) => ({ ...prev, userImg: null }));
    setImageSrc(undefined);
  };

  console.log(imageSrc);

  return (
    <div className={styles["container"]}>
      <form onSubmit={handleSubmit} className={styles["form"]}>
        <div className={styles["file-container"]}>
          <label htmlFor="file">Upload Avatar</label>
          <div
            className={`${styles["file-group"]} ${
              !imageSrc && styles["file-box-hover"]
            }`}
          >
            <div className={styles["file-box"]}>
              {!imageSrc && (
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={handleChange}
                  accept="image/jpg, image/png"
                />
              )}
              {imageSrc ? (
                <div className={styles["file-preview"]}>
                  <img src={imageSrc} alt="Uploaded" />
                </div>
              ) : (
                <div className={styles["buenas"]}>
                  <div className={styles["file-preview"]}>
                    <img src={uploadIcon} alt="Upload Icon" />
                  </div>
                  <p>Drag and drop or click to upload</p>
                </div>
              )}
              {imageSrc && (
                <div className={styles["file-buttons"]}>
                  <button type="button" onClick={handleRemoveImg}>
                    Remove
                  </button>
                  <button type="button">
                    Change
                    <label
                      htmlFor="file"
                      className={styles["change-input-label"]}
                    >
                      <input
                        type="file"
                        name="file"
                        id="file"
                        onChange={handleChange}
                        accept="image/jpg, image/png"
                        className={styles["change-input"]}
                      />
                    </label>
                  </button>
                </div>
              )}
            </div>
            {errorMessage?.userImg ? (
              <p className={styles["error-text"]}>
                <InfoIcon height={15} width={15} /> {errorMessage.userImg}
              </p>
            ) : (
              <p className={styles["file-info"]}><InfoIcon height={15} width={15} /> Upload your photo (JPG or PNG, max size: 500KB).</p>
            )}
          </div>
        </div>

        <div className={styles["input-group"]}>
          <label htmlFor="username">Full Name</label>
          <input
            className={styles.input}
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
          />
          {errorMessage?.username && (
            <p className={styles["error-text"]}>
              <InfoIcon height={15} width={15} /> {errorMessage.username}
            </p>
          )}
        </div>

        <div className={styles["input-group"]}>
          <label htmlFor="email">Email Address</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="example@gmail.com"
          />
          {errorMessage?.email && (
            <p className={styles["error-text"]}>
              <InfoIcon height={15} width={15} /> {errorMessage.email}
            </p>
          )}
        </div>

        <div className={styles["input-group"]}>
          <label htmlFor="github">GitHub Username</label>
          <input
            className={styles.input}
            type="text"
            id="github"
            name="github"
            onChange={handleChange}
            placeholder="@yourusername"
          />
          {errorMessage?.github && (
            <p className={styles["error-text"]}>
              <InfoIcon height={15} width={15} /> {errorMessage.github}
            </p>
          )}
        </div>

        <button className={styles["submit-btn"]} type="submit">
          Generate My Ticket
        </button>
      </form>
    </div>
  );
};

export default Form;
