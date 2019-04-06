var config = {
    apiKey: "AIzaSyA44xjTDjnwdfGdd-9DzkOKw0e1WcJUGLc",
    authDomain: "trainschedule-5fa32.firebaseapp.com",
    databaseURL: "https://trainschedule-5fa32.firebaseio.com",
    storageBucket: "trainschedule-5fa32.appspot.com"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    var tTrain = $("#train-input").val().trim();
    var tDestination = $("#destination-input").val().trim();
    var tStart = moment($("#start-input").val().trim(), "MM/DD/YYYY").format("X");
    var tFrequency = $("#frequency-input").val().trim();

    var newTrain = {
      name: tTrain,
      destination: tDestination,
      start: tStart,
      frequency: tFrequency
    };
  
    database.ref().push(newTrain);
  
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.start);
    console.log(newTrain.frequency);
  
    alert("Train successfully added");
  
    $("#train-input").val("");
    $("#destination-input").val("");
    $("#start-input").val("");
    $("#frequency-input".val("");
  });

  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    var tTrain = childSnapshot.val().name;
    var tDestination = childSnapshot.val().role;
    var tStart = childSnapshot.val().start;
    var tFrequency = childSnapshot.val().rate;
  
    console.log(tTrain);
    console.log(tDestination);
    console.log(tStart);
    console.log(tFrequency);
  
    var tTrain = moment.unix(tStart).format("12:00");
  
    var tTrain = $("#train-input").val().trim();
    var tDestination = $("#destination-input").val().trim();
    var tStart = $("#time-input").val().trim();
    var tFrequency = $("#frequency-input").val().trim();
  
    var newRow = $("<tr>").append(
      $("<tr>").text(tTrain),
      $("<tr>").text(tDestination),
      $("<tr>").text(tStart),
      $("<tr>").text(tFrequency),
    );
  
    $("#train-schedule > tbody").append(newRow);
  });
  
