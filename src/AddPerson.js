import React, {Component} from 'react';

class AddPerson extends Component {
    constructor(){
        super();

        this.addPerson = this.addPerson.bind(this);
    }

    addPerson = (e) => {
        console.log(this.input.value);
    }

    render(){
        return(
            <form onSubmit={this.addPerson}>
                <input placeholder="Name" ref={(e)=>{this.input = e}}/>
                <input placeholder="Address" ref={(e)=>{this.input = e}}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default AddPerson;