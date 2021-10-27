import React, { memo } from 'react';
import { Radio } from 'antd';
import { options } from './contants';
import TooltipText from './TooltipTex';
import { peopleTooltip } from './contants';

const People = (props) => {

  return (
    <div className="people-radio-group-container">
      <p className="form-item__label">
        Cuantas personas trabajarán contigo, incluyéndote a tí?
      </p>
      <Radio.Group value={props.value} onChange={props.onPeopleChange}>
        {options.map((option) => (
          <Radio.Button
            className="people-radio__btn"
            key={option}
            value={option}
          >
            {option}
          </Radio.Button>
        ))}
      </Radio.Group>
      <TooltipText text={peopleTooltip} />
    </div>
  );
};

export default memo(People);
