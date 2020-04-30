import React, {Component} from 'react';

class Card extends Component{
    state={
        nouveauClient:""
    }
    handleChange =(event)=>{
        const value= event.currentTarget.value;
        this.setState({nouveauClient: value});
          };
          handleSubmit =(event)=>{
            event.preventDefault();
            const id = new Date().getTime();
            const nom = this.state.nouveauClient;
            const client ={id:id,nom:nom};
            this.props.onClientAdd({id,nom});
         this.setState({nouveauClient: ''});
            };
    render(){
    return (
<div>
<form onSubmit={this.handleSubmit}>
       <input value={this.state.nouveauClient} onChange={this.handleChange} type="text" placeholder="ajouter un film"/>
       <button>+</button>
     </form>
        </div>
    )
}
};

export default Card;