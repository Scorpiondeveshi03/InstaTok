
var firebaseConfig = {

      apiKey: "AIzaSyAJYqiNcwjkRXl4tf64Sk-k2-oc_TPpg8w",

      authDomain: "instatok-30204.firebaseapp.com",
    
      databaseURL: "https://instatok-30204-default-rtdb.firebaseio.com",
    
      projectId: "instatok-30204",
    
      storageBucket: "instatok-30204.appspot.com",
    
      messagingSenderId: "348911795586",
    
      appId: "1:348911795586:web:d8fbd66d797bdafb59639b"
    
    
    };
    firebase.initializeApp(firebaseConfig)


    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome " + user_name+ " ;";
    

    function addRoom() {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name" , room_name);

          window.location = "instatok_page.html";


    }
    
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - " + Room_names );
       row = "<div class= 'room_name' id="+Room_names+" onclick='redrictToRoomName(this.id)' >#" +Room_names+ "</div><hr>";
       document.getElementById("output").innerHTML+= row;
      //End code
      });});}
      
getData();

function redrictToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "instatok_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
        window.location="index.html";
}