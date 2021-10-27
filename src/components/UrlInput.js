import React, {  Fragment, memo } from 'react';
import { Input } from 'antd';
import { urlTooltip } from './contants';
import TooltipText from './TooltipTex';

const UrlInput = (props) => {


  const toolTipTextBreak = urlTooltip.split('\n').map((item, key) => {
    return (
      <Fragment key={key}>
        {item}
        <br />
      </Fragment>
    );
  });

  return (
    <div>
      <p className="form-item__label">URL del espacio (dirección web):</p>
      <Input
        value={props.value}
        placeholder="Ep: mi.dominio"
        onChange={props.onUrlChange}
      />
      <TooltipText text={toolTipTextBreak} />
    </div>
  );
};

export default memo(UrlInput);
