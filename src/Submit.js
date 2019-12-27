import React, { Component } from 'react';
// import './ToDoListItem.css';

class Submit extends Component {

    //保存ボタンが押されるとjson送信
    handleClickSubmit(){
        console.log("test:",this.props.todoList);
        console.log("test-json:",JSON.stringify(this.props.todoList));
        this.handleSendTodolist();
    }

    //todoリストを送信
    handleSendTodolist(){
        let request = require('request');
        // let crypto = require('crypto');

        // let key = '{{ YOUR API KEY }}';
        // let secret = '{{ YOUR API SECRET }}';

        let timestamp = Date.now().toString();
        let method = 'POST';
        let path = '';
        let url = 'https://httpbin.org/post' + path;
        // let body = JSON.stringify({111: "2222"});
        let body = JSON.stringify(this.props.todoList);

        let options = {
            url: url,
            method: method,
            json: true,
            body: body
            // body: body,
            // headers: {
            //     // 'ACCESS-KEY': key,
            //     'ACCESS-TIMESTAMP': timestamp,
            //     'ACCESS-SIGN': sign,
            //     'Content-Type': 'application/json'
            // }
        }

        request(options, function (err, response, payload) {
            console.log("payload:",payload);
        });

        // const testdata = [
        //     {1: "testdesu"},
        //     {3: "futatsume"},
        //     {"in": "others"}
        // ]

        //Jsonにエンコード
        // let data = JSON.stringify(testdata);

        // let data = JSON.stringify(this.props.todoList);

        // const endpoints = 'https://httpbin.org/post'
        // console.log("test:",data);

        // //-------formタグで送信
        // let modal;
        // modal = (
        //     <div>
        //         <form name="myform">
        //             <input name="mytext" type="text" />
                    

        //             <button name="btn">送信</button>
        //         </form>
        //     </div>
        // );





        //-------JavaScriptで直接send
        
        //AJAX
        // let xhr = new XMLHttpRequest();

        // xhr.open('POST', 'https://httpbin.org/post');
        // xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        // xhr.send( 'name=taro&age=30' );
        console.log("sent");
        
    }

    testhandle(){
        let modal;
        modal = (
            <div>
            <div>AAA</div> 
            {/* <form name="myform">
                <input name="mytext" type="text"></input>
                

                <button name="btn">送信</button>
            </form> */}
            </div>
        );

        return modal
    }

    render(){
        return(
            <button onClick={()=>this.handleClickSubmit()}>{this.testhandle()}</button>
        );
    }
}

export default Submit;