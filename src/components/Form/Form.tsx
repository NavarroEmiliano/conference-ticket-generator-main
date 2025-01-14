import styles from "./Form.module.css";
import uploadIcon from "../../assets/images/icon-upload.svg";
import { ChangeEvent, useState } from "react";
import { User } from "../../App";
import InfoIcon from "../Icons/InfoIcon";

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

    if (type === "file") {
      if (files && files[0].size < 5000) {
        const imageUrl = URL.createObjectURL(files[0]);
        setImageSrc(imageUrl);
        setErrorMessage((prev: ErrorMessage | null) => ({
          ...prev,
          userImg: '',
        }));
        return;
      } else {
        setErrorMessage((prev: ErrorMessage | null) => ({
          ...prev,
          userImg: "File too large. Please upload a photo under 5MB.",
        }));
        setImageSrc(undefined);
      }
    }
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user.username) {
      setErrorMessage((prev: ErrorMessage | null) => ({
        ...prev,
        username: "This field cannot be empty",
      }));
    }

    if (!user.email) {
      setErrorMessage((prev: ErrorMessage | null) => ({
        ...prev,
        email: "This field cannot be empty",
      }));
    }

    if (!user.github) {
      setErrorMessage((prev: ErrorMessage | null) => ({
        ...prev,

        github: "This field cannot be empty",
      }));
    }

    if (!imageSrc) {
      setErrorMessage((prev: ErrorMessage | null) => ({
        ...prev,
        userImg: "This field cannot be empty",
      }));
    }

    if(user.email && user.username && user.github && imageSrc) {
      setErrorMessage(null)
      setUser((prev:User) => ({
        ...prev,
        imgUrl: imageSrc
      }))
    }
  };

  const handleRemoveImg = () => {
    setUser((prev: User) => {
      return {
        ...prev,
        userImg: null,
      };
    });
    setImageSrc(undefined);
  };


  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        <h2>Your Journey to Coding Conf 2025 Starts Here!</h2>
        <p>Secure your spot at next year's biggest coding conference.</p>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.fileContainer}>
          <label className={styles.fileLabel} htmlFor="file">
            Upload Avatar
          </label>

          <div
            className={`${styles.fileBox} ${!imageSrc && styles.fileBoxHover}`}
          >
            {!imageSrc && (
              <input
                className={styles.uploadImg}
                onChange={handleChange}
                type="file"
                name="file"
                id="file"
                accept="image/jpg, image/png"
              />
            )}

            {user?.userImg && user.userImg.size < 5000 ? (
              <div
                className={`${styles.fileImgContainer} ${styles.userImgContainer}`}
              >
                <img
                  className={styles.userImg}
                  src={imageSrc}
                  alt="Upload Icon"
                />
              </div>
            ) : (
              <div
                className={`${styles.fileImgContainer} ${styles.cloudIconContainer}`}
              >
                <img
                  className={styles.icon}
                  src={uploadIcon}
                  alt="Upload Icon"
                />
              </div>
            )}
            {user?.userImg && user.userImg.size < 5000 ? (
              <div className={styles.fileBtns}>
                <button
                  onClick={handleRemoveImg}
                  className={styles.removeImgBtn}
                >
                  Remove image
                </button>
                <button className={styles.changeImgBtn}>
                  Change image
                  <input
                    className={styles.changeImg}
                    onChange={handleChange}
                    type="file"
                    name="file"
                    id="file"
                    accept="image/jpg, image/png"
                  />
                </button>
              </div>
            ) : (
              <p>Drag and drop or click to upload</p>
            )}
          </div>
          <div className={styles.infoBox}>
            {errorMessage?.userImg || (user?.userImg && user.userImg.size > 5000) ? (
              <>
                <InfoIcon
                  className={styles.infoIconError}
                  height={16}
                  width={16}
                />
                <p className={styles.errorMessage}>{errorMessage?.userImg}</p>
              </>
            ) : (
              <>
                <InfoIcon className={styles.infoIcon} height={16} width={16} />
                <p>Upload your photo (JPG or PNG, max size: 5MB).</p>
              </>
            )}
          </div>
        </div>

        <div className={styles.inputBox}>
          <label htmlFor="username">Full Name</label>
          <input
            onChange={handleChange}
            type="text"
            id="username"
            name="username"
          />
          <div className={styles.infoBox}>
            {errorMessage?.username && (
              <>
                <InfoIcon
                  className={styles.infoIconError}
                  height={16}
                  width={16}
                />
                <p className={styles.errorMessage}>{errorMessage.username}</p>
              </>
            )}
          </div>
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
          <div className={styles.infoBox}>
            {errorMessage?.email && (
              <>
                <InfoIcon
                  className={styles.infoIconError}
                  height={16}
                  width={16}
                />
                <p className={styles.errorMessage}>{errorMessage.email}</p>
              </>
            )}
          </div>
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
          <div className={styles.infoBox}>
            {errorMessage?.username && (
              <>
                <InfoIcon
                  className={styles.infoIconError}
                  height={16}
                  width={16}
                />
                <p className={styles.errorMessage}>{errorMessage.username}</p>
              </>
            )}
          </div>
        </div>
        <button className={styles.submitBtn} type="submit">
          Generate My Ticket
        </button>
      </form>
    </div>
  );
};

export default Form;
