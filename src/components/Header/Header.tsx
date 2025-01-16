import styles from "./Header.module.css";
import logoMark from "../../assets/images/logo-mark.svg";

const Header = () => {
  return (
    <header className={styles["header-container"]}>
        <img src={logoMark} alt="coding conf title" />
        <h4>Coding Conf</h4>
    </header>
  );
};

export default Header;
