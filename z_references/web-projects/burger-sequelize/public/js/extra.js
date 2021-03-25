$(document).ready(function () {
  // Added document.ready required jquery wrapper function above!

  let imageButtonEl = document.getElementById("addBurgerBtn");
  let imageContainerEl = document.getElementById("burgerImage");

  imageButtonEl.addEventListener("click", displayImage);

  function getRandomImage() {
    let imagesArray = ["https://user-images.githubusercontent.com/61030935/82166264-e9466b00-9885-11ea-8427-878cba671590.png",

    "https://user-images.githubusercontent.com/61030935/82166267-ea779800-9885-11ea-9518-675bd73ca60d.png",
    
    "https://user-images.githubusercontent.com/61030935/82166269-eb102e80-9885-11ea-8fde-dad765672d19.png",
    
    "https://user-images.githubusercontent.com/61030935/82166270-eb102e80-9885-11ea-8ef8-af93fc46ca0c.png",
    
    "https://user-images.githubusercontent.com/61030935/82166272-eb102e80-9885-11ea-9b64-086f51002aed.png",
    
    "https://user-images.githubusercontent.com/61030935/82166273-eba8c500-9885-11ea-982a-9328e733762c.png",
    
    "https://user-images.githubusercontent.com/61030935/82166274-eba8c500-9885-11ea-96bf-ea3ba881dfc9.png"
    ];
    let randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    return randomImage;
  };

  function displayImage() {
    imageContainerEl.src = getRandomImage();

  };
  displayImage();

});
