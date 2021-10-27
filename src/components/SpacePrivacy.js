import {memo, useRef} from 'react';
import { Radio } from 'antd';
import { spaceOptions } from './contants';

const SpacePrivacy = (props) => {
  const nodeRef = useRef();

  return (
    <>
      <p className="form-item__label">Privacidad del espacio:</p>
      <div className="space-radio__wrapper">
        <Radio.Group
          value={props.value}
          className="space-radio__container"
          onChange={props.onSpaceChange}
        >
          {spaceOptions.map((option) => (
            <div className="radio-btn__card" key={option.label}>
              <Radio ref={nodeRef} className="space-radio__btn" value={option.value}>
                {option.value}
                <p className="tooltip-text">{option.text}</p>
              </Radio>
            </div>
          ))}
        </Radio.Group>
      </div>
    </>
  );
};

export default memo(SpacePrivacy);
