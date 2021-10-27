import React from 'react';
import { Avatar, Upload, Button } from 'antd';
import {RiGalleryUploadFill} from 'react-icons/ri';
import { avatarTooltip } from './contants';
import TooltipText from './TooltipTex';

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="avatar-container">
        <Avatar className="avatar" size="large">
          B
        </Avatar>
        <Upload>
          <Button style={{textAlign: 'center'}} size='small'><RiGalleryUploadFill /> Subir logo</Button>
        </Upload>
      </div>
      <TooltipText text={avatarTooltip} />
    </div>
  );
};

export default Logo;
