import styles from "./Background.module.css";
import linesSvg from "../../assets/images/pattern-lines.svg";
import circleSvg from "../../assets/images/pattern-circle.svg";
import squigglyTop from "../../assets/images/pattern-squiggly-line-top.svg"
import squigglyButton from "../../assets/images/pattern-squiggly-line-bottom.svg"

const Background = () => {
  return (
    <div className={styles["background-container"]}>
      <img className={styles['lines-svg']} src={linesSvg} alt="lineas" />
      <img className={styles["circle-svg-top"]} src={circleSvg} alt="" />
      <img className={styles["circle-svg-middle"]} src={circleSvg} alt="" />
      <img className={styles["squiggly-top"]} src={squigglyTop} alt="" />
      <img className={styles["squiggly-bottom"]} src={squigglyButton} alt="" />
    </div>
  );
};

export default Background;
