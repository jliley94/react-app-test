import React from 'react';
import AddTodo from './AddTodo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listData : {} };
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    let localListData = window.localStorage.getItem('TodoApp-listData');
    this.setState({ listData : (!!localListData) ? JSON.parse(localListData) : [] });
  }

  handleCheck(key) {
    let updatedList = this.state.listData;
    updatedList[key].checked = (updatedList[key].checked) ? false : true;
    window.localStorage.setItem('TodoApp-listData', JSON.stringify(updatedList));
    this.setState({...this.state, listData: updatedList});
  }

  clickHandler(newItem) { 
    let updatedList = this.state.listData;
    let key = updatedList.length;
    let level = 0;
    let itemObject = {
      key : key,
      value : newItem,
      level : level,
      checked : false
    };
    updatedList.push(itemObject);
    window.localStorage.setItem('TodoApp-listData', JSON.stringify(updatedList));
    this.setState({...this.state, listData: updatedList});
  }

    render() {
      let items = this.state.listData;
      return (
        <div className="todoApp">
          <div> 
            <h3>Todo List: </h3>
            { 
              (items.length > 0) ?
                <div className="todoList"> 
                  {
                    items.map((data, index) =>
                      <div>
                        <input type="checkbox" id={data.value} checked={data.checked} onChange={(e) => this.handleCheck(data.key)} />
                        <div className={(data.checked) && "checked"} key={index.toString()}>
                          {data.value}
                        </div>
                      </div>
                    )
                  }
                </div>
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