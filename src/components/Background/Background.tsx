import styles from "./Background.module.css";
import linesSvg from "../../assets/images/pattern-lines.svg";
import circleSvg from "../../assets/images/pattern-circle.svg";

const Background = () => {
  return (
    <div className={styles.bgContainer}>
      <img src={linesSvg} alt="" />
      <img src={circleSvg} alt="" />
      <img src={circleSvg} alt="" />
    </div>
  );
};

export default Background;
