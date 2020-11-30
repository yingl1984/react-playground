import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import TheDate from './state/TheDate.js';
import Counter from './state/Counter.js';

const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
   ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
)

function App() {
  return (
    <main className='App'>
      {/* <Split className='left' flexBasis='2'>
        This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
        {/* make another tooltip directly inside the App */}
        {/* <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip> */}
      {/* </Split> */}
      {/* <Split className='right'>
      <Messages name="Messages" unread={0}/>
      <Messages name="Notifications" unread={10}/>
        This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split> */}
      {/* <TheDate /> */}
      <Counter step={14}/>
    </main>
   
  )
}

export default App