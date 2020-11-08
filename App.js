import React from 'react'
import { StatusBar } from 'react-native'

import TabBar from './src/components/TabBar'
// import Main from './src/pages/Main'
import Album from './src/pages/Album'

const App = () => {
  return(
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <Album />
      <TabBar />
    </React.Fragment>
  );
};

export default App