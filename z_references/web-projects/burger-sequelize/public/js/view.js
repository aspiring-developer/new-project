$(document).ready(function () {
  // Getting a reference to the input field where user adds a new burger
  var $newItemInput = $("input.new-item");
  // Our new burgers will go inside the burgerContainer
  var $burgerContainer = $(".burger-container");
  // Adding event listeners for deleting, editing, and adding burgers
  $(document).on("click", "button.delete", deleteBurger);
  $(document).on("click", "button.complete", toggleComplete);
  $(document).on("click", ".burger-item", editBurger);
  $(document).on("keyup", ".burger-item", finishEdit);
  $(document).on("blur", ".burger-item", cancelEdit);
  $(document).on("submit", "#burger-form", insertBurger);
  var burgers = [];    // Our initial burgers array
  getBurgers(); // Getting burgers from database when page loads
  // This function resets the burgers displayed with new burgers from the database
  function initializeRows() {
    $burgerContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < burgers.length; i++) {
      rowsToAdd.push(createNewRow(burgers[i]));
    }
    $burgerContainer.prepend(rowsToAdd);
  }
  // This function grabs burgers from the database and updates the view
  function getBurgers() {
    $.get("/api/burgers", function (data) {
      burgers = data;
      initializeRows();
    });
  }
  // This function deletes a burger when the user clicks the delete button
  function deleteBurger(event) {
    event.stopPropagation();
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/burgers/" + id
    }).then(getBurgers);
  }
  // This function handles showing the input box for a user to edit a burger
  function editBurger() {
    var currentBurger = $(this).data("burger");
    $(this).children().hide();
    $(this).children("input.edit").val(currentBurger.burger_name);
    $(this).children("input.edit").show();
    $(this).children("input.edit").focus();
  }
  // Toggles complete status
  function toggleComplete(event) {
    event.stopPropagation();
    var burger = $(this).parent().data("burger");
    burger.devoured = !burger.devoured;
    updateBurger(burger);
  }
  // This function starts updating a burger in the database if a user hits the "Enter Key"  // While in edit mode
  function finishEdit(event) {
    var updatedBurger = $(this).data("burger");
    if (event.which === 13) {
      updatedBurger.burger_name = $(this).children("input").val().trim();
      $(this).blur();
      updateBurger(updatedBurger);
    }
  }
  function updateBurger(burger) {    // This function updates a burger in our database
    $.ajax({
      method: "PUT",
      url: "/api/burgers",
      data: burger
    }).then(getBurgers);
  }
  // This function is called whenever a burger item is in edit mode and loses focus  // This cancels any edits being made
  function cancelEdit() {
    var currentBurger = $(this).data("burger");
    if (currentBurger) {
      $(this).children().hide();
      $(this).children("input.edit").val(currentBurger.burger_name);
      $(this).children("span").show();
      $(this).children("button").show();
    }
  }
  function createNewRow(burger) {   // This function constructs a burger-item row
    var $newInputRow = $(
      [
        "<li class='list-group-item burger-item'>",
        "<span class='burgerList'>",
        burger.burger_name,
        "</span>",
        "<input type='text' class='edit' style='display: none;'>",
        "<button class='complete btn btn-primary'>??? - Mark</button>",
        "<button class='delete btn btn-danger'>Delete - X</button>",
        "</li>"
      ].join(""));
    $newInputRow.find("button.delete").data("id", burger.id);
    $newInputRow.find("input.edit").css("display", "none");
    $newInputRow.data("burger", burger);
    if (burger.devoured) {
      $newInputRow.find("span").css("text-decoration", "line-through");
    } return $newInputRow;
  }
  // This function inserts a new burger into our database and then updates the view
  function insertBurger(event) {
    event.preventDefault();
    var burger = {
      burger_name: $newItemInput.val().trim(),
      devoured: false
    };
    $.post("/api/burgers", burger, getBurgers);
    $newItemInput.val("");
  }
});