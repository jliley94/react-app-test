import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { featureOpened: Boolean, newTodo : String };
        this.openAddTodo = this.openAddTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({featureOpened : false, newTodo : ""});
    }

    openAddTodo() {
        this.setState({...this.state, featureOpened : true});
    }

    handleChange(e) {
        this.setState({...this.state, newTodo: e.target.value });
    }

    render() {
      return (
        (!this.state.featureOpened) ? 
            <div onClick={() => this.openAddTodo()}>
            +
            </div>
        :
            <div>
                <input type="text" placeholder="Todo Name" onChange={(e) => this.handleChange(e)} />
                <button type="submit" onClick={() => this.props.handler(this.state.newTodo)}>+</button>
            </div>
      );
    }
  }
  
  export default AddTodo;