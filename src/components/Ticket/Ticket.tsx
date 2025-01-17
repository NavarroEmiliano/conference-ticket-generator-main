import styles from "./Ticket.module.css";
import logoMark from "../../assets/images/logo-mark.svg";

import GithubIcon from "../Icons/GithubIcon.tsx";
import { User } from "../../App.tsx";
const Ticket = ({ user }: { user: User }) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["ticket-container"]}>
        <div className={styles["ticket-content"]}>
          <div className={styles["event-content"]}>
            <div className={styles["event-info"]}>
              <div className={styles["logo-box"]}>
                <img src={logoMark} alt="coding conf title" />
              </div>
              <div>
                <p className={styles["title"]}>Coding conf</p>
                <p className={styles["event-date"]}>Jan 31, 2025 / Austin, TX</p>
              </div>
            </div>
            <div className={styles["user-info-container"]}>
              <img src={user.imgUrl} alt="user image" />
              <div className={styles["name-box"]}>
                <p className={styles["username"]}>{user.username}</p>
                <div className={styles["github-icon-container"]}>
                  <GithubIcon className={styles["github-icon"]}/>
                  <p className={styles["github-name"]}>{user.github}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["ticket-number"]}>
            <p>#00238</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
