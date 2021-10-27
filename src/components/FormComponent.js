import React, { useCallback, useContext } from 'react';
import { Form, Button } from 'antd';
import FormBuilder from 'antd-form-builder';
import { colors } from './contants';
import RadioFilter from './RadioFilter';
import InputName from './InputName';
import SpacePrivacy from './SpacePrivacy';
import { SettingContext } from '../context/SettingContext';
import People from './People';
import UrlInput from './UrlInput';

const FormComponent = () => {
  const { settings, setSettings } = useContext(SettingContext);
  const forceUpdate = FormBuilder.useForceUpdate();
  const [form] = Form.useForm();

  const onNameChange = useCallback(
    (e) => {
      form.setFieldsValue({ nombre: e.target.value });
      setSettings({ ...settings, nombre: e.target.value });
    },
    [settings, setSettings, form]
  );

  const onUrlChange = useCallback(
    (e) => {
      form.setFieldsValue({ url: e.target.value });
      setSettings({ ...settings, url: e.target.value });
    },
    [settings, setSettings, form]
  );

  const onPeopleChange = useCallback(
    (e) => {
      form.setFieldsValue({ people: e.target.value });
      setSettings({ ...settings, people: e.target.value });
    },
    [setSettings, settings, form]
  );

  const onColorChange = useCallback(
    (e) => {
      form.setFieldsValue({ color: e.target.value });
      setSettings({ ...settings, color: e.target.value });
    },
    [setSettings, settings, form]
  );

  const onSpaceChange = useCallback(
    (e) => {
      form.setFieldsValue({ space: e.target.value });
      setSettings({ ...settings, space: e.target.value });
    },
    [setSettings, settings, form]
  );

  const handleFinish = useCallback(
    (values) => {
      console.log('Submit', values);
      setSettings(values);
      form.resetFields();
    },
    //eslint-disable-next-line
    [setSettings]
  );

  const onDiscard = () => {
    form.resetFields();
  };

  const meta1 = {
    fields: [
      {
        key: 'nombre',
        align: 'start',
        widget: InputName,
        wrapperCol: 24,
        widgetProps: { onNameChange, value: settings.nombre }
      },
      {
        key: 'url',
        align: 'start',
        labelCol: 24,
        widget: UrlInput,
        wrapperCol: 24,
        widgetProps: { onUrlChange, value: settings.url }
      },
      {
        key: 'people',
        widget: People,
        forwardRef: true,
        widgetProps: { onPeopleChange, value: settings.people }
      },
      {
        key: 'color',
        widget: RadioFilter,
        widgetProps: { colors: colors, onColorChange, value: settings.color },
        forwardRef: true
      },
      {
        key: 'space',
        widget: SpacePrivacy,
        forwardRef: true,
        widgetProps: { onSpaceChange, value: settings.space }
      }
    ]
  };

  return (
    <div className="form-wrapper">
      <Form
        onValuesChange={forceUpdate}
        layout="horizontal"
        form={form}
        onFinish={handleFinish}
        style={{ width: '100%' }}
      >
        <fieldset>
          <FormBuilder form={form} meta={meta1} />
        </fieldset>

        <Form.Item className="form-footer" wrapperCol={{ span: 24, offset: 0 }}>
          <Button
            htmlType="submit"
            type="primary"
            style={{ marginRight: '15px' }}
          >
            Guardar Cambios
          </Button>
          <Button onClick={onDiscard}>Descartar</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormComponent;
