// This "burgers.js" file serves as a front-end javascript (Note: "burger.js" in models folder is backend node.js)
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {
  // Added document.ready required jquery wrapper function above!
  $(function () {
    $(".change-devour").on("click", function (event) {
      let id = $(this).data("id");
      let newDevour = $(this).data("newdevour");

      let newDevourState = {
        devoured: newDevour
      };

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function () {
          console.log("changed devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function (event) {
      // required preventDefault method on a submit event.
      event.preventDefault();

      let newBurger = {
        burger_name: $("#burgerLabel").val().trim(),
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    // deletes a burger on each "DELETE" button click
    $(".delete-burger").on("click", function () {
      let id = $(this).data("id");
      console.log(id);

      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function () {
          console.log("deleted burger");
          location.reload();
        });
    });

  });

});