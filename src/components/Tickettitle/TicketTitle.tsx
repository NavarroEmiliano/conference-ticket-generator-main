import { User } from "../../App";
import styles from "./TicketTitle.module.css";

type Props = {
  user: User;
};

const TicketTitle = (props: Props) => {
  const user = props.user;
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <h2>
          Congrats, <span className={styles["name"]}>{user.username}!</span> Your
          ticket is ready.
        </h2>
        <p>
          We've emailed your ticket to <span className={styles["email"]}>{user.email}</span> and will send
          updates in the run up to the event.
        </p>
      </div>
    </div>
  );
};

export default TicketTitle;
