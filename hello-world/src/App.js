import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, Card } from 'semantic-ui-react';


 export default class App extends React.Component{



   state = { counter: 0 };

    // decrement = ()=>this.setState({counter:this.state.counter-1});
     decrement = () => this.setState(({ counter }) => ({ counter: counter - 1 }));

     increment = () => this.setState(({ counter }) => ({ counter: counter + 1 }));

     render() {
       const { counter } = this.state;

  return (
    <div className="App">
      <header className="App-header">
        <Card>
       <Card.Content>
         <img src={logo} className="App-logo" alt="logo" />
       <Card.Header>Contador Con React.js</Card.Header>
       <Card.Description>
              <h2>{counter}</h2>
       </Card.Description>
     </Card.Content>
     <Card.Content extra>
      <div className='ui two buttons'>
       <Button basic color='green' onClick={this.increment}>+</Button>
        <Button basic color='red' onClick={this.decrement}>-</Button>
      </div>
     </Card.Content>
   </Card>

   </header>


       </div>
  );
}
}
