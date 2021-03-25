    // Asking user to confirm some prompts
    //var confirm1 = confirm("If you want to use lowercase, numbers or special characters, please select appropriate button on the password generator page.");
    //var confirm2 = confirm("Uppercase letters are selected by default");

     // Declaring variables to hold available characters
    var uppercaseDefault = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChoose = "abcdefghijklmnopqrstuvwxyz";
    var numberChoose = "0123456789";
    var specialChoose = "<+>!@#$%^&(-)[=]{*}";

// Connecting DOM elements with Javascript
    var selectedCharacterCount = document.getElementById("characterCounter");
    var lowerChecked = document.getElementById("lowerCheckbox");
    var numberChecked = document.getElementById("numberCheckbox");
    var specialChecked = document.getElementById("specialCheckbox");
    var generateButton = document.getElementById("passwordButton");
    var displayingPassword = document.getElementById("passwordResult");

// Adding event listener to the password generating button
    generateButton.addEventListener("click", function (e) {
      var characters = uppercaseDefault;
      (lowerChecked.checked) ? characters += lowercaseChoose : "";
      (numberChecked.checked) ? characters += numberChoose : "";
      (specialChecked.checked) ? characters += specialChoose : "";
      displayingPassword.value = password(selectedCharacterCount.value, characters);
    }); 

// Looping the password characters and randomized them to publish
    function password(length, characters) {
      var actualPassword = "";
      for (var i = 0; i < length; i++) {
        actualPassword += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return actualPassword;
    }