import firebase from "firebase"
import React from "react";
import ReactDOM from "react-dom";

var app = firebase.initializeApp({
    apiKey: "AIzaSyCdokY-xQuR0iXhqWz-YmRYbPlfpoZNLqU",
    authDomain: "flexi-d8617.firebaseapp.com",
    databaseURL: "https://flexi-d8617.firebaseio.com",
    projectId: "flexi-d8617",
    storageBucket: "flexi-d8617.appspot.com",
    messagingSenderId: "861191633357"
});

type State = {
    isSignedIn: boolean
    userProfile: firebase.UserInfo
}

class App extends React.Component<{}, {}> {

    componentDidMount() {

    }

    componentWillUnmount() {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user)
        })
    }

    click = (e) => {
        let ref = firebase.database().ref("/datas")
        ref.push({
            id: 1,
            value: 100
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <button onClick={this.click}>Add Data</button>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"))