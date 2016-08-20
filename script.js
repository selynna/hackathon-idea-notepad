$(document).ready(function() {
  // Initialize Firebase
   var config = {
     apiKey: "AIzaSyCK_ewwg7uhiq6Yy4EYWLPQCKv2Ec_I4HM",
     authDomain: "hackideas-bb453.firebaseapp.com",
     databaseURL: "https://hackideas-bb453.firebaseio.com",
     storageBucket: "hackideas-bb453.appspot.com",
   };
   firebase.initializeApp(config);
  var listData = firebase.database().ref();

  listData.on("child_added", function (idea) {
    var entryDOM = $("<div class='entry' name='"+idea.val().name+"'></div>");
    var entry_NameDOM = $('<div class="name">' + idea.val().name + '</div>');
    var entry_ButtonDOM = $('<div class="delete_button button delete">-</div>');
    entryDOM.append(entry_NameDOM);
    entryDOM.append(entry_ButtonDOM);
    $(".entries").append(entryDOM);
  });
  listData.on("child_removed", function (idea) {
    $.each($(".entry"), function( index, value ) {
      if(value.name == idea.val().name) {
        value.remove();
      }
    });
  });

  $("#submit").click(function() {
    var data = {
      name: $(".idea").val(),
      description: $(".description").val(),
      content: ""
    };
    listData.push(data);
    // $(".delete").click( function () {
    // });
  });
  $(".delete").click( function () {
    console.log("hit");
    listData.remove();
  });
  $("#edit").keypress(function() {
    console.log("pls");
  });
});
