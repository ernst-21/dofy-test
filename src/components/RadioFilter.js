import React, {useRef, memo } from 'react';
import {Radio} from 'antd';

const RadioFilter = (props) => {
  const nodeRef = useRef();

  return (
    <div className='radio-color-wrapper'>
      <p className='form-item__label'>Color del tema:</p>
      <Radio.Group
        value={props.value}
        onChange={props.onColorChange}
        buttonStyle="solid"
      >
        {props.colors.map((item) => (
          <Radio className='color-radio' ref={nodeRef} value={item.value} key={item.id}>
            <div style={item.style}>{item.content}</div>
            <div style={{ textAlign: 'center' }}>{item.category}</div>
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
};

export default memo(RadioFilter);
