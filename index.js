function createSlide(background) {
  let createdSlide = document.createElement("div");
  createdSlide.classList.add("item");
  createdSlide.style.transform = "translateX(22px)";
  createdSlide.style.backgroundImage = `url(${background})`;
  createdSlide.style.backgroundSize = "cover";
  createdSlide.style.backgroundPosition = "center";
  slides.append(createdSlide);
}

let slider_imgs = [
  "https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-i-screenshot-05-en-17may22?$1600px$",
  "https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-i-screenshot-11-en-17may22?$1600px$",
  "https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-i-screenshot-03-en-17may22?$1600px$",
  "https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-i-screenshot-02-en-17may22?$1600px$",
  "https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-i-screenshot-06-en-17may22?$1600px$",
  "https://t2.tudocdn.net/568555?w=646&h=284",
  "https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-i-screenshot-05-en-17may22?$1600px$",
  "https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-i-screenshot-11-en-17may22?$1600px$",
  "https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-i-screenshot-03-en-17may22?$1600px$",
  "https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-i-screenshot-02-en-17may22?$1600px$",
  "https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-i-screenshot-06-en-17may22?$1600px$",
  "https://t2.tudocdn.net/568555?w=646&h=284",
  "https://i0.wp.com/gamehall.com.br/wp-content/uploads/2022/07/the-last-of-us-part-i-remake.jpg?resize=780%2C470&ssl=1",
];

for (let n = 0; n < slider_imgs.length; n++) {
  createSlide(slider_imgs[n]);
}

new Glider(document.querySelector(".glider"), {
  slidesToShow: 3.5,
  draggable: true,
});

let characters = document.querySelectorAll(".character");

characters.forEach((character) => {
  character.addEventListener("click", (e) => {
    // Remove the active class.
    characters.forEach((character) => {
      console.log(character);
      character.classList.remove("active");
    });
    character.classList.add("active");
  });
});

// Set new video.
characters.forEach((character) => {
  let videoLink = character.getAttribute("data-video");
  character.addEventListener("click", (e) => {
    let player = document.querySelector("#videoPlayer");
    player.setAttribute("src", videoLink);
  });
});
