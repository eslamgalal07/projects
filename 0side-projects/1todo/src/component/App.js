import React from "react";
import TodoList from "./TodoList";
import Input from "./Input";

class App extends React.Component {
  state = { todoList: [], item: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ item: "" });
  };
  onInputChange = (event) => {
    this.setState({ item: event.target.value });
  };
  onAddClick = () => {
    if (this.state.item) {
      const list = [...this.state.todoList];
      list.push(this.state.item);
      this.setState({ todoList: list });
    }
  };
  onRemoveClick = (index) => {
    const list = [...this.state.todoList];
    const newList = list.filter((item) => {
      return item !== list[index];
    });
    this.setState({ todoList: newList });
  };
  render() {
    return (
      <div className="ui container">
        <div className="ui segment">
          <Input
            item={this.state.item}
            onFormSubmit={this.onFormSubmit}
            onInputChange={this.onInputChange}
            onAddClick={this.onAddClick}
          />
          <div>
            <TodoList
              list={this.state.todoList}
              onRemoveClick={this.onRemoveClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
