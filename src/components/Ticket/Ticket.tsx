import styles from "./Ticket.module.css";
const Ticket = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ticketHeader}>
        <h2>Congrats, <span className={styles.name}>Jonatan Kristof!</span> Your ticket is ready.</h2>
        <p>We've emailed your ticket to <span>jonatan@email.com</span> and will send updates in the run up to the event.</p>
      </div>
    </div>
  );
};

export default Ticket;
