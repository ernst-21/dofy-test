import React from 'react';
import { Upload, Button } from 'antd';
import { RiGalleryUploadFill } from 'react-icons/ri';
import { avatarTooltip } from './contants';
import TooltipText from './TooltipTex';
import SiteAvatar from './SiteAvatar';

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="avatar-container">
        <SiteAvatar />
        <Upload>
          <Button style={{ textAlign: 'center' }} size="small">
            <RiGalleryUploadFill /> Subir logo
          </Button>
        </Upload>
      </div>
      <TooltipText text={avatarTooltip} />
    </div>
  );
};

export default Logo;
