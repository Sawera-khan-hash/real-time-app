 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
 import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js"; 
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  const firebaseConfig = {
    apiKey: "AIzaSyC7QN_k7Fo74YGFfdytLeMz3yn7kbmoMss",
    authDomain: "gogle-auth-da5dc.firebaseapp.com",
    projectId: "gogle-auth-da5dc",
    storageBucket: "gogle-auth-da5dc.firebasestorage.app",
    messagingSenderId: "465778171756",
    appId: "1:465778171756:web:f561f143d8679f04585d49",
    measurementId: "G-R988WW9T2Z"
  };

  
  const app = initializeApp(firebaseConfig);
 let db=getDatabase(app);
  const counterRef = ref(db, "counter"); 
  
   function updateCounter(value) {  
   set(counterRef, value); }

   document.getElementById("increment").addEventListener("click", function () { 
    let count = Number(document.getElementById("counter").innerText);  
     updateCounter(count + 1); 
    }); 

    document.getElementById("decrement").addEventListener("click",function(){
        let count= Number(document.getElementById("counter").innerText);
        updateCounter(count -1);
    });
    onValue(counterRef, function (snapshot) {
     document.getElementById("counter").innerText = snapshot.val();
  }); 