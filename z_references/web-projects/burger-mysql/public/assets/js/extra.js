$(document).ready(function () {
  // Added document.ready required jquery wrapper function above!

  let imageButtonEl = document.getElementById("addBurgerBtn");
  let imageContainerEl = document.getElementById("burgerImage");

  imageButtonEl.addEventListener("click", displayImage);

  function getRandomImage() {
    let imagesArray = ["https://user-images.githubusercontent.com/61030935/82119719-d54c1d80-974e-11ea-9418-b375dd082789.png",

    "https://user-images.githubusercontent.com/61030935/82119720-d5e4b400-974e-11ea-8f91-dbbca6cc6844.png",
    
    "https://user-images.githubusercontent.com/61030935/82119721-d67d4a80-974e-11ea-8e61-7cf460a686d5.png",
    
    "https://user-images.githubusercontent.com/61030935/82119722-d715e100-974e-11ea-80e5-7ad994b24d42.png",
    
    "https://user-images.githubusercontent.com/61030935/82119723-d7ae7780-974e-11ea-8c36-5debf063f7f2.png",
    
    
    "https://user-images.githubusercontent.com/61030935/82119724-d8dfa480-974e-11ea-88f4-31e010194c0e.png",
    
    "https://user-images.githubusercontent.com/61030935/82119726-da10d180-974e-11ea-8a21-30488a60bb3f.png"
    ];
    let randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    return randomImage;
  };

  function displayImage() {
    imageContainerEl.src = getRandomImage();

  };
  displayImage();

});
