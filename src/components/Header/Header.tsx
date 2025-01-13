import styles from "./Header.module.css";
import logoMark from "../../assets/images/logo-mark.svg";

const Header = () => {
  return (
    <header>
      <div className={styles.headerContent}>
        <img src={logoMark} alt="coding conf title" />
        <h4>Coding Conf</h4>
      </div>
    </header>
  );
};

export default Header;
