import React from 'react';
import AddTodo from './AddTodo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listData : [] };
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.setState({listData : [this.props.listData]});
  }

  clickHandler(newItem) {
    let updatedList = this.state.listData;
    updatedList.push(newItem);
    this.setState({...this.state, listData: updatedList});
  }

    render() {
      let items = this.state.listData;
      return (
        <div>
          <div> 
            <h3>Todo List: </h3>
            { 
              (items.length > 0) ?
                <ul> 
                  {
                    items.map((data, index) =>
                      <li key={index.toString()}>
                        {data}
                      </li>
                    )
                  }
                </ul>
              :
                <span>Your todo list is empty...</span>
            }
            
          </div>
          <AddTodo handler={this.clickHandler} />
        </div>
      );
    }
  }
  
  export default TodoList;