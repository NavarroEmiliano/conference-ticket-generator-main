import styles from "./Background.module.css";
import linesSvg from "../../assets/images/pattern-lines.svg";
import circleSvg from "../../assets/images/pattern-circle.svg";
import squigglyTop from "../../assets/images/pattern-squiggly-line-top.svg"
import squigglyButton from "../../assets/images/pattern-squiggly-line-bottom.svg"

const Background = () => {
  return (
    <div className={styles.bgContainer}>
      <img className={styles.linesSvg} src={linesSvg} alt="" />
      <img className={styles.circleSvgTop} src={circleSvg} alt="" />
      <img className={styles.circleSvgMiddle} src={circleSvg} alt="" />
      <img className={styles.squigglyTop} src={squigglyTop} alt="" />
      <img className={styles.squigglyBottom} src={squigglyButton} alt="" />
    </div>
  );
};

export default Background;
