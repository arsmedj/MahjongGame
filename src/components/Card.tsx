import React from "react";
import cx from "classnames";

interface CardProps {
  number: number;
  isShowCards: boolean;
  isCardSelected: boolean;
  isCardSuccess: boolean;
  id: string;
  clickHandler: (id: string) => void;
}

const Card: React.FC<CardProps> = ({
  number,
  isShowCards,
  isCardSelected,
  isCardSuccess,
  clickHandler,
  id,
}) => {
  const handleClickCard = () => {
    return isShowCards ? null : clickHandler(id);
  };

  return (
    <div
      onClick={handleClickCard}
      className={cx("card", {
        "hidden-card": !isShowCards,
        "selected-card": isCardSelected,
        "success-card": isCardSuccess,
      })}
    >
      <span className="card-number">{number}</span>
    </div>
  );
};

export default Card;
