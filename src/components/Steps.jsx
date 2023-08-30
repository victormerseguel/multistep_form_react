import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

import "./Steps.css";

const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      <div className="step icon active">
        <AiOutlineUser />
        <p>Identificação</p>
      </div>
      <div className={`step icon ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>
      <div className={`step send ${currentStep >= 2 ? "active" : ""}`}>
        <FiSend />
        <p>Envio</p>
      </div>
    </div>
  );
};

export default Steps;
