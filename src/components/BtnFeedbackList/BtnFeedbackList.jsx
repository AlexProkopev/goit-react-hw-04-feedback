import cssBtn from "./BtnFeedbackList.module.css"
import SectionComponent from "components/Section/Section";

const BtnFeedbackList = ({
  options,
  hendleClickRew
}) => {
  const {good, neutral, bad} = options;
  return (
    <SectionComponent title={"Please leave feedback"}>
      <ul className={cssBtn.btnList}>
      <li>
        <button className={`${cssBtn.btnGood} ${cssBtn.btn}`} type="button" onClick={()=>{hendleClickRew(good)}}>
          good
        </button>
      </li>
      <li>
        <button className={`${cssBtn.btnNeutral} ${cssBtn.btn}`}  type="button" onClick={()=>{hendleClickRew(neutral)}}>
          neutral
        </button>
      </li>
      <li>
        <button className={`${cssBtn.btnBad} ${cssBtn.btn}`}  type="button" onClick={()=>{hendleClickRew(bad)}}>
          bad
        </button>
      </li>
    </ul>
    </SectionComponent>
  );
};

export default BtnFeedbackList;