import React, {memo} from 'react';
import { Input } from 'antd';

const InputName = (props) => {

  return (
    <div>
      <p className="form-item__label">Nombre del espacio:</p>
      <Input
        name='nombre'
        placeholder="Ep: Mi espacio de trabajo"
        value={props.value}
        onChange={props.onNameChange}
      />
    </div>
  );
};

export default memo(InputName);
