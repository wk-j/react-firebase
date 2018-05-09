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

    db = "datas"

    constructor(props) {
        super(props)

        let ref = firebase.database().ref(this.db)
        ref.on("value", snapshot => {
            // console.log(snapshot.val());
        });

        ref.on("child_added", snapshot => {
            console.log(snapshot.val());
        })
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user)
        })
    }

    click = (e) => {
        let ref = firebase.database().ref(this.db)
        ref.push({
            id: 1,
            status: "Init"
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