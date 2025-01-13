import styles from "./Background.module.css";
import linesSvg from "../../assets/images/pattern-lines.svg";
import circleSvg from "../../assets/images/pattern-circle.svg";
import squigglyTop from "../../assets/images/pattern-squiggly-line-top.svg"
import squigglyButton from "../../assets/images/pattern-squiggly-line-bottom.svg"

const Background = () => {
  return (
    <div className={styles.bgContainer}>
      <img src={linesSvg} alt="" />
      <img src={circleSvg} alt="" />
      <img src={circleSvg} alt="" />
      <img src={squigglyTop} alt="" />
      <img src={squigglyButton} alt="" />
    </div>
  );
};

export default Background;
