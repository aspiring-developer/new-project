// TARGET: INDEX.HTML - user input value
function displayGreeting() {
  frontInputEl = document.getElementById("frontInput");
  let userName = frontInputEl.value;
        $("#greetingTexts").html("Hi " + userName + ", " + "<br>" + "Thank you for visiting our website! Please visit portfolio and about pages." );
  }
  
  // TARGET: WEB-DEVELOPMENT.HTML - displayUiOne(),  displayUiTwo(), displayUiThree(), and ... targeting onclick event to display external UI html pages 
    function displayUiOne() {
      $("#projectUiDisplay").html("<object data='https://burger-app-sh.herokuapp.com/'/>");
         }
    function displayUiTwo() {
      $("#projectUiDisplay").html("<object data='web-projects/job-news-search-api/index.html'/>");
    }
    function displayUiThree() {
      $("#projectUiDisplay").html("<object data='https://sequelize-burger-app-sh.herokuapp.com/'/>");
    };

    function displayUiFour() {
      $("#projectUiDisplay").html("<object data='web-projects/work-day-planner/index.html'/>");
         }
    function displayUiFive() {
      $("#projectUiDisplay").html("<object data='web-projects/weather-dashboard/index.html'/>");
    }
    function displayUiSix() {
      $("#projectUiDisplay").html("<object data='web-projects/password-generator/index.html'/>");
    };

// TARGET: GRAPHIC-DIGITAL.HTML - targeting Print Designs, Digital Drawings buttons and display fields 
function fashionMagazineImageDisplay() {
  $("#graphicPagesDisplayBox").html("<img src='custom-assets/images/magazine-cover-300x393.jpg'/>");
  $("#fashionMagazineDescriptionDisplay").css("display", "block");
  $("#brochureDescriptionDisplay").css("display", "none");
  $("#collateralDescriptionDisplay").css("display", "none");
  $("#healthMagazineDescriptionDisplay").css("display", "none");
}
function brochureImageDisplay() {
  $("#graphicPagesDisplayBox").html("<img src='custom-assets/images/restaurant-menu-300x393.jpg'/>");
  $("#fashionMagazineDescriptionDisplay").css("display", "none");
  $("#brochureDescriptionDisplay").css("display", "block");
  $("#collateralDescriptionDisplay").css("display", "none");
  $("#healthMagazineDescriptionDisplay").css("display", "none");
}
function collateralImageDisplay() {
  $("#graphicPagesDisplayBox").html("<img src='custom-assets/images/collateral-300x393.jpg'/>");
  $("#fashionMagazineDescriptionDisplay").css("display", "none");
  $("#brochureDescriptionDisplay").css("display", "none");
  $("#collateralDescriptionDisplay").css("display", "block");
  $("#healthMagazineDescriptionDisplay").css("display", "none");
}
function foodMagazineImageDisplay() {
  $("#graphicPagesDisplayBox").html("<img src='custom-assets/images/food-magazine-cover-300x393.jpg'/>");
  $("#fashionMagazineDescriptionDisplay").css("display", "none");
  $("#brochureDescriptionDisplay").css("display", "none");
  $("#collateralDescriptionDisplay").css("display", "none");
  $("#healthMagazineDescriptionDisplay").css("display", "block");
}
function phoneImageDisplay() {
  $("#midColumnDisplayBox").html("<img src='custom-assets/images/phone-set-540x393.jpg'/>");
  $("#phoneDescriptionDisplay").css("display", "block");
  $("#bathroomDescriptionDisplay").css("display", "none");
}
function bathroomImageDisplay() {
  $("#midColumnDisplayBox").html("<img src='custom-assets/images/bathroom-digital-art-540x393.jpg'/>");
  $("#phoneDescriptionDisplay").css("display", "none");
  $("#bathroomDescriptionDisplay").css("display", "block");
}
function bathroomExtractedDisplay() {
  $("#midColumnDisplayBox").html("<img src='custom-assets/images/bathroom-digital-extracted-540x393.jpg'/>");
  $("#phoneDescriptionDisplay").css("display", "none");
  $("#bathroomDescriptionDisplay").css("display", "block");
}
function bathroomLayerDisplay() {
  $("#midColumnDisplayBox").html("<img src='custom-assets/images/bathroom-digital-layers-view-540x393.jpg'/>");
  $("#phoneDescriptionDisplay").css("display", "none");
  $("#bathroomDescriptionDisplay").css("display", "block");
}
function houseImageDisplay() {
  $("#bottomColumnDisplayBox").html("<img src='custom-assets/images/house-digital-art-540x393.jpg'/>");
  $("#houseDescriptionDisplay").css("display", "block");
  $("#randomDescriptionDisplay").css("display", "none");
}
function houseExtractedDisplay() {
  $("#bottomColumnDisplayBox").html("<img src='custom-assets/images/house-digital-layers-540x393.jpg'/>");
  $("#houseDescriptionDisplay").css("display", "block");
  $("#randomDescriptionDisplay").css("display", "none");
}
function houseLayerDisplay() {
  $("#bottomColumnDisplayBox").html("<img src='custom-assets/images/house-digital-layers-view-540x393.jpg'/>");
  $("#houseDescriptionDisplay").css("display", "block");
  $("#randomDescriptionDisplay").css("display", "none");
}
function randomDrawingDisplay() {
  $("#bottomColumnDisplayBox").html("<img src='custom-assets/images/random-mixed-digital-art-540x393.jpg'/>");
  $("#houseDescriptionDisplay").css("display", "none");
  $("#randomDescriptionDisplay").css("display", "block");
};

// TARGET: PAINTING.HTML - targeting Oil Painting, Chalkboard Art buttons and display fields 
function paintingOneDisplay() {
  $("#paintingDisplayBoxTop").html("<img src='custom-assets/images/painting-abandoned-boats-300x224.jpg'/>")
}
function paintingTwoDisplay() {
  $("#paintingDisplayBoxTop").html("<img src='custom-assets/images/painting-fishtail-view-300x224.jpg'/>")
}
function paintingThreeDisplay() {
  $("#paintingDisplayBoxTop").html("<img src='custom-assets/images/painting-crabtree-park1-300x224.jpg'/>")
}
function paintingFourDisplay() {
  $("#paintingDisplayBoxTop").html("<img src='custom-assets/images/painting-peaceful-countryside-300x224.jpg'/>")
}
function paintingFiveDisplay() {
  $("#paintingDisplayBoxMid").html("<img src='custom-assets/images/painting-bond-park-300x224.jpg'/>")
}
function paintingSixDisplay() {
  $("#paintingDisplayBoxMid").html("<img src='custom-assets/images/painting-crabtree-park2-300x224.jpg'/>")
};

function paintingSevenDisplay() {
  $("#paintingDisplayBoxMid").html("<img src='custom-assets/images/painting-plowing-300x224.jpg'/>")
}
function paintingEightDisplay() {
  $("#paintingDisplayBoxMid").html("<img src='custom-assets/images/painting-mountain-group-300x224.jpg'/>")
}
function paintingNineDisplay() {
  $("#paintingDisplayBoxMid").html("<img src='custom-assets/images/painting-cary-park-300x224.jpg'/>")
}
function paintingTenDisplay() {
  $("#paintingDisplayBoxMid").html("<img src='custom-assets/images/painting-rupse-300x224.jpg'/>")
}
function paintingElevenDisplay() {
  $("#paintingDisplayBoxMid").html("<img src='custom-assets/images/painting-stony-lake-300x224.jpg'/>")
}
function paintingTwelveDisplay() {
  $("#paintingDisplayBoxMid").html("<img src='custom-assets/images/painting-sunset-lake-300x224.jpg'/>")
};

function chalkOneDisplay() {
  $("#chalkboardDisplayBox").html("<img src='custom-assets/images/catering-chalkboard-300x224.jpg'/>")
}
function chalkTwoDisplay() {
  $("#chalkboardDisplayBox").html("<img src='custom-assets/images/meat-chalkboard-300x224.jpg'/>")
}
function chalkThreeDisplay() {
  $("#chalkboardDisplayBox").html("<img src='custom-assets/images/other-chalkboard-300x224.jpg'/>")
}
function chalkFourDisplay() {
  $("#chalkboardDisplayBox").html("<img src='custom-assets/images/more-chalkboard-300x224.jpg'/>")
};