import React, { memo } from 'react';
import infoAsset from '../assets/images/Group 2500.svg';

const TooltipText = (props) => {

  return (
    <div className="info-tooltip__container">
      <div className="info-tooltip">
        <img src={infoAsset} alt="infoAsset" />
      </div>
      <p className="tooltip-text">{props.text}</p>
    </div>
  );
};

export default memo(TooltipText);
