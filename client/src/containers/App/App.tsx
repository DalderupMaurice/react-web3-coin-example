import React from 'react';

import RegisterUser from '../Actions/RegisterUser';

const App = React.memo((props: any) => {
  return (
    <>
      <RegisterUser />
    </>
  );
});

export default App;
