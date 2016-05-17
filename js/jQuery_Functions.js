$(document).ready(function(){
    // Function for pressing 'Hello' button
    $("button#hello").click(function() {
        // Add to front of 'user' list
        $("ul#user").prepend("<li>Hello!</li>");
        // Add to front of 'webpage' list
        $("ul#webpage").prepend("<li>Why hello there!</li>");
        // Function to remove user item when clicked
        $("ul#user").children("li").first().click(function() {
            // Remove user list item
            $(this).remove();
        });
        // Function to remove webpage item when clicked
        $("ul#webpage").children("li").first().click(function() {
            // Remove webpage list item
            $(this).remove();
        });
    });

    // Function for pressing 'goodbye' button
    $("button#goodbye").click(function() {
        // Add to end to user list
        $("ul#user").append("<li>Goodbye!</li>");
        // Add to end to webpage list
        $("ul#webpage").append("<li>Goodbye Then!</li>");
    });

    // Function for pressing 'stop' button
    $("button#stop").click(function() {
        // Add before user list
        $("ul#user").before("<li>Stop copying me!</li>");
        // Add before webpage list
        $("ul#webpage").before("<li>Fine</li>");
    });

    // Function for pressing 'go' button
    $("button#go").click(function(){
        // Add after user list
        $("ul#user").after("<li>It Works!</li>");
        // Add after webpage list
        $("ul#webpage").after("<li>Kind of..</li>");
    });

    // Function for pressing 'fun' button
    $("button#fun").click(function(){
        // Add to end of user list
        $("ul#user").append("<li>Now we are having fun!</li>");
        // Add to end of webpage list
        $("ul#webpage").append("<li>Where'd you go?!</li>");
    });

    // Function to remove last list item
    $("ul").click(function(){
        // Funtion to remove last li item of user list
        $("ul#user").children("li").last().click(function() {
            // Remove this list item
            $(this).remove();
        });
        // Function to remove last li item of webpage list
        $("ul#webpage").children("li").last().click(function() {
            // Remove this list item
            $(this).remove();
        });
    });

    // Function to change background color of ul
    $("button#green").click(function() {
        // Ask user to enter a background color
        var color = (prompt("Enter a new background color for the list!"));
        // If user submitted anything over 1 character
        if (color.length > 0) {
            // Change background color of ul to users submission
            $('ul').css('background-color', color);
        }
        // If user enters invalid background color
        else if (color == null) {
            // Doesn't change background color
            $('ul').css('background-color', 'null');
        }
        // If user doesn't enter anything into 'color' variable
        else {
            // Ask if the user would like to change the color back to normal
            var confirm1 = confirm("Would you like to change the color back to normal?")
            // If user clicks 'OK'
            if (confirm1 == true) {
                // Change background color back to normal
                $('ul').css('background-color', '#B2C9D1');
            }
            // If user clicks cancel
            else {
                // Don't change background color
                $('ul').css('background-color', 'null');
            }
        }
    });

    // Set variable 'friends' to an array of friends
    var friends = ["Tom", "Bob", "Ray", "Fred"];
        // Function to loop through variable 'friends'
	    friends.forEach(function(friend) {
            // Pop up message to say Hello to each friend
            alert("Hello " + friend + "!");
	    });

    // Function to loop through Ice Cream Flavors
    $("button#myFunction").click(function() {
        // Set variable 'index' for flavor array
        var index;
        // Set variable 'text' to create list
        var text = "<ul>";
        // Put ice cream flavors into array 'iceCream'
        var iceCream = ["Rocky Road", "Mint Chocolate Chip", "Mocha Chip", "Cookie Dough"];
        // For each 'index' in array, loop through until all flavors have been listed
        for (index = 0; index < iceCream.length; index++) {
            // Add flavors with li tags to ul
            text += "<li>" + iceCream[index] + "</li>";
        }
        // Add ending ul tag to text variable
        text += "</ul>";
        // Place 'text' behind the last ul
        $("#demo").append(text);
    });

});
