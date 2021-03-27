
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBomMam50Ik6mvNqPVGQhcEO1YC-pOHPXs",
      authDomain: "kwitter-3615a.firebaseapp.com",
      databaseURL: "https://kwitter-3615a-default-rtdb.firebaseio.com",
      projectId: "kwitter-3615a",
      storageBucket: "kwitter-3615a.appspot.com",
      messagingSenderId: "1099095192880",
      appId: "1:1099095192880:web:35bd3c78fa69dd8be7c4f5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref (room_name).push({
            name:user_name,message:msg,like:0 
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names);

      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;
            //End code
      });});}
getData();
function addRoom() { room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });

localStorage.setItem("room_name",room_name);
window.location  = "kwitter_page.html";

}


function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
      
}
function addNumber(){
      var Number1 = document.getElementById("number1").value;
      var Number2 = document.getElementById("number2").value;
      
}

