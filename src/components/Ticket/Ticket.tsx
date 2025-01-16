import styles from "./Ticket.module.css";
import logoMark from "../../assets/images/logo-mark.svg";

import GithubIcon from "../Icons/GithubIcon.tsx";
import { User } from "../../App.tsx";
const Ticket = ({ user }: { user: User }) => {
  return (
    <div className={styles.container}>
      <div className={styles.ticketHeader}>
        <h2>
          Congrats, <span className={styles.name}>{user.username}!</span> Your
          ticket is ready.
        </h2>
        <p>
          We've emailed your ticket to <span>{user.email}</span> and will send
          updates in the run up to the event.
        </p>
      </div>
      <div className={styles.ticketContainer}>
        <div className={styles.content}>
          <div className={styles.userInformation}>
            <div className={styles.eventInfo}>
              <img src={logoMark} alt="coding conf title" />
              <div>
                <p className={styles.title}>Coding conf</p>
                <p className={styles.eventDate}>Jan 31, 2025 / Austin, TX</p>
              </div>
            </div>
            <div className={styles.userInfoContainer}>
              <img src={user.imgUrl} alt="user image" />
              <div className={styles.nameBox}>
                <p className={styles.userName}>{user.username}</p>
                <div className={styles.githubContainer}>
                  <GithubIcon className={styles.githubIcon} />
                  <p className={styles.githubName}>{user.github}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ticketNumber}>
            <p>#00238</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
