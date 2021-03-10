// import React, { useEffect, useState } from "react";
import NavBar from './NavBar';
import InstructorsView from './InstructorsView';
import PosesView from './PosesView';
import { Segment } from 'semantic-ui-react';


function App() {


  
  return (
    <div>
      <NavBar/>
      <Segment>
        <PosesView />
      </Segment>
      <Segment>
        <InstructorsView />
      </Segment>

    </div>
  
  );
}

export default App;
