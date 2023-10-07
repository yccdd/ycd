import './App.css';
import { Button } from 'antd';
import React from 'react';
import { getLoginQrCKey } from './api';

function App() {
  // const [theme,setTheme] = React.useState({
  //   token:{
  //     colorPrimary:"#ff0000"
  //   },
  // })

  const fn = () => {
    getLoginQrCKey()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Button
      type="primary"
      onClick={() => {
        fn();
      }}
    >
      按钮
    </Button>
  );
}

export default App;
