import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Card from './components/Card';




class App extends React.Component {
  
   state={
    clients:[
      {id : 100/100,nom: "Avenngers 4"},
      {id : 90/100,nom: "Avatar"},
      {id : 80/100,nom: "Men in Black"}
    ],
   
  };
 
 handleAdd= client=>{
 // 
  const clients =this.state.clients.slice();
  clients.push(client);
  this.setState({clients: clients});
 }
  render(){
   const title ="liste des films"
  return (
    
    <div className="App">
      <h1>{title}</h1>
     {this.state.clients.map(client=>
        (
          <List details={client}/>
        ))}
    <Card onClientAdd={this.handleAdd}/>
    </div>
  );
}
}

export default App;
