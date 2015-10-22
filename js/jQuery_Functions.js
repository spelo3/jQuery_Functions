$(document).ready(function(){

  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").append("<li>Goodbye!</li>");
    $("ul#webpage").append("<li>Goodbye Then!</li>");
  });

  $("button#stop").click(function() {
    $("ul#user").before("<li>Stop copying me!</li>");
    $("ul#webpage").before("<li>Fine</li>");
  });

  $("button#go").click(function(){
    $("ul#user").after("<li>It Works!</li>");
    $("ul#webpage").after("<li>Kind of..</li>");
  });

  $("button#fun").click(function(){
    $("ul#user").append("<li>Now we are having fun!</li>");
    $("ul#webpage").append("<li>Where'd you go?!</li>");
  });

  $("ul").click(function(){
    $("ul#user").children("li").last().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").last().click(function() {
      $(this).remove();
    });
  });

  $("button#green").click(function() {
    var color = (prompt("Enter a new background color!"));
    if (color.length > 0) {
      $('ul').css('background-color', color);
    }
    else if (color == null) {
      $('ul').css('background-color', 'null');
    }
    else {
      var confirm1 = confirm("Would you like to change the color back to normal?")
      if (confirm1 == true) {
        $('ul').css('background-color', '#B2C9D1');
      }
      else {
        $('ul').css('background-color', 'null');
      }
    }
  });

  var friends = ["Tom", "Bob", "Ray", "Fred"];
	friends.forEach(function(friend) {
    alert("Hello " + friend + "!");
	});

  $("button#myFunction").click(function() {
    var index;
    var text = "<ul>";
    var iceCream = ["Rocky Road", "Mint Chocolate Chip", "Mocha Chip", "Cookie Dough"];
    for (index = 0; index < iceCream.length; index++) {
      text += "<li>" + iceCream[index] + "</li>";
    }
    text += "</ul>";
    $("#demo").append(text);
  });

});
