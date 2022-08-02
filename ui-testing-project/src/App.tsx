import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyButton, MyInput } from 'ui-kit-aleksdee';

function App() {
  return (
    <div className="App">
      <MyButton big={false} color={'orange'}>
        Кнопка
      </MyButton>
      <MyInput big={true} label="Имя" placeholder="Введите имя"></MyInput>
    </div>
  );
}

export default App;
