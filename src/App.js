import './App.less';
import FormComponent from './components/FormComponent';
import SideView from './components/SideView';
import Logo from './components/Logo';
import {SettingContextProvider} from './context/SettingContext';

function App() {
  return (
    <SettingContextProvider>
      <div className="app">
        <div className="components-container">
          <div className="form-container">
            <h3 style={{fontSize: '1rem'}} className='form-item__label'>Configuración:</h3>
            <Logo />
            <FormComponent />
          </div>
          <div className="sideview-container">
            <SideView />
          </div>
        </div>
      </div>
    </SettingContextProvider>
  );
}

export default App;

