import "./Header.module.css";
import logoMark from "../../assets/images/logo-mark.svg";

const Header = () => {
  return (
    <header>
      <img src={logoMark} alt="" />
      <h4>Coding Conf</h4>
    </header>
  );
};

export default Header;
