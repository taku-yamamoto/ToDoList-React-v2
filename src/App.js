import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ToDoListItem from "./ToDoListItem.js"
import Submit from "./Submit.js"

class App extends React.Component {
// function App() {
  // ToDoListをstateに定義、初期値は []
  state = {
    todoList: JSON.parse(localStorage.getItem("todoList")) || []
  }

  //todoList itemの追加
  addTodo = (item, callBack) =>{
    this.setState(
      {
        todoList: this.state.todoList.concat(item)
      },
      ()=>{
        //localStorageにtodoList stateを保存
        localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
        // callBack関数が引数に渡されていた場合に実行
        callBack && callBack()
      }
    )
    console.log("TODO:", this.state.todoList)
  }
  //todoList itemの削除
  removeTodo = (item, callBack) =>{
    this.setState(
      {
        todoList: this.state.todoList.filter(x => x !== item)
      },
      ()=>{
        // localStorageにtodoList stateを保存
        localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
        callBack && callBack()
      }
    )
    console.log("TODO:", this.state.todoList)
  }

  handleSubmit = (e)=>{
    // formのデフォルトのイベントをキャンセル
    e.preventDefault();

    // idがtitleのElementを取得
    const titleElement = e.target.elements["title"];
    // idがdescriptionのElementを取得
    const descriptionElement = e.target.elements["description"];
    // console.log("title:", titleElement);
    // console.log("title:", e.target.elements);

    // todoList stateに追加
    this.addTodo(
      {
        title: titleElement.value,
        description: descriptionElement.value
        // todoList: this.state.todoList.concat({
        //   title: titleElement.value,
        //   description: descriptionElement.value
        // })
      },
      // stateの変更後に入力した値を空にする
      () => {
        titleElement.value = "";
        descriptionElement.value = "";
      }
    )
  }

  render() {
    return (
      <div className="App">
        <form className="App-form"
         onSubmit={(event)=>this.handleSubmit(event)}
         >
          <div>
            <input id="title" placeholder="title"
            />
            <textarea id="description" placeholder="description"
            />
          </div>
          <div>
            <button type="submit">登録</button>
          </div>
        </form>
        <div>
        {/* todoList配列の要素数分ToDoListItemコンポーネントを展開 */}
          {this.state.todoList.map(todo => (
            <ToDoListItem
              key={todo.title}
              title={todo.title}
              description={todo.description}
              // クリックされたItemをtodoList stateから削除
              onClick={() => this.removeTodo(todo)}
            />
          ))}
        </div>
        <div>
          {/* DB保存用にデータをjson送信 */}
          {
            <Submit 
              todoList={this.state.todoList}
            />
          }
        </div>
      </div>
    );
  }
}

export default App;
