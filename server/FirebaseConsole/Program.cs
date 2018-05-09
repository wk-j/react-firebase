using System;
using System.Threading.Tasks;
using FireSharp;
using FireSharp.Config;

/*
var app = firebase.initializeApp({
    apiKey: "AIzaSyCdokY-xQuR0iXhqWz-YmRYbPlfpoZNLqU",
    authDomain: "flexi-d8617.firebaseapp.com",
    databaseURL: "https://flexi-d8617.firebaseio.com",
    projectId: "flexi-d8617",
    storageBucket: "flexi-d8617.appspot.com",
    messagingSenderId: "861191633357"
});
*/

class Program
{
    public static async Task Main(String[] args)
    {
        var config = new FirebaseConfig
        {
            AuthSecret = "zDKG1ERNA4OQIPXDXocGz8sCIZzteIDdJpojB1Dt",
            BasePath = "https://flexi-d8617.firebaseio.com",
        };

        var client = new FirebaseClient(config);
        var data = new
        {
            id = 1234,
            status = "Hello, world"
        };

        var response = await client.PushAsync("datas", data);
    }
}