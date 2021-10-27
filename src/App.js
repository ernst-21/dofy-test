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
            <h4>Configuración:</h4>
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

