import React, {useContext} from 'react';
import {SettingContext} from '../context/SettingContext';
import { Samy, SvgProxy } from 'react-samy-svg';
import mask from '../assets/images/Mask Group 42.svg';

const Mask = () => {
  const {settings} = useContext(SettingContext);
  return (
    <div>
      <Samy path={mask}>
        <SvgProxy selector=".s" fill={settings.color} stroke={settings.color} style={{color: settings.color}}/>
        <SvgProxy selector=".w" fill='black'>{settings.url}</SvgProxy>
        <SvgProxy selector=".space-name" fill='black'>{settings.nombre}</SvgProxy>
      </Samy>
    </div>
  );
};

export default Mask;
