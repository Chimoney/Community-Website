//FEATURED POST***********************
//ARTICLE CONTENT DATA
let data = {
  data: [
    {
      id: 1,
      name: "Oyin Dawodu",
      date: "Apr, 18th 2023",
      title: "Contributing articles to Chimoney Community",
      article:
        "Are you passionate about sharing your expertise and making a valuable contribution to an active online community? If so, then this blog is for you, as we not only provide a step-by-step guide to get started with Chimoney's API but also offer insights and tips on how to leverage your skills to enhance the online community.",
      tag1: "Chimoney news",
      tag2: "project utility",
      time: "4 mins read",
    },
    {
      id: 2,
      name: "Oyin Dawodu",
      date: "Apr, 18th 2023",
      title: "Getting Started with Chimoney's API",
      article:
        "Do you wish to learn how to get started with Chimoney's API? Then this blog is for you, as we provide a step-by-step guide to help you integrate Chimoney's API seamlessly into your projects.",
      tag1: "chimoney news",
      tag2: "project utility",
      time: "3 mins read",
    },
    {
      id: 3,
      name: "Phylis Atieno",
      date: "May, 18th 2023",
      title: "How to spend your crypto in 2022 and beyond",
      article:
        "Cryptocurrencies like Bitcoin, XRP, and Eth have become increasingly popular over the past few years. They're also becoming an important part of our financial system.",
      tag1: "chimoney news",
      tag2: "project utility",
      time: "3 mins read",
    },
    {
      id: 4,
      name: "Oyin Dawodu",
      date: "Apr, 18th 2023",
      title: "Contributing articles to Chimoney Community",
      article:
        "Are you passionate about sharing your expertise and making a valuable contribution to an active online community? If so, then this blog is for you, as we not only provide a step-by-step guide to get started with Chimoney's API but also offer insights and tips on how to leverage your skills to enhance the online community.",
      tag1: "Chimoney news",
      tag2: "project utility",
      time: "4 mins read",
    },
    {
      id: 5,
      name: "Oyin Dawodu",
      date: "Apr, 18th 2023",
      title: "Getting Started with Chimoney's API",
      article:
        "Do you wish to learn how to get started with Chimoney's API? Then this blog is for you, as we provide a step-by-step guide to help you integrate Chimoney's API seamlessly into your projects.",
      tag1: "chimoney news",
      tag2: "project utility",
      time: "3 mins read",
    },
    {
      id: 6,
      name: "Phylis Atieno",
      date: "May, 18th 2023",
      title: "How to spend your crypto in 2022 and beyond",
      article:
        "Cryptocurrencies like Bitcoin, XRP, and Eth have become increasingly popular over the past few years. They're also becoming an important part of our financial system.",
      tag1: "chimoney news",
      tag2: "project utility",
      time: "3 mins read",
    },
  ],
};

const Card = (data) => {
  data = data.data;
  let content = "";
  for (var i = 0; i < data.length; i++) {
    content += `
            <div class="blog-card">
              <img class="blog-image" src="assets/images/blog-image.png" />
              <div class="profile">
                  <img class="profile-picture" src="assets/images/Author.svg" />
                  <p class="name">${data[i].name}</p>
                  &#x2022;
                  <p class="date">${data[i].date}</p>
              </div>
                  
              <a href="#" class="blog-title">${data[i].title}</a>
              <p class="blog-article">${data[i].article}</p>

              <div class="blogcard-footer">
                  <div>
                    <a href="#" class="blog-tag" >${data[i].tag1}</a>
                    <a href="#" class ="blog-tag" >${data[i].tag2}</a>
                  </div>
                  <p class="blog-read-time">${data[i].time}</p>
              </div>
            </div>
      `;
  }
  document.getElementById("data").innerHTML = content;
};
Card(data);

/* End of Featured post ---------------------------------------------
----------------------------------------------------------------*/

// footer copyright year
function getCopyRightYear() {
  const span = document.getElementsByClassName("year");
  const d = new Date();
  span[0].innerHTML = d.getFullYear();
  console.log(span[0].innerHTML);
}
getCopyRightYear();

// navbarr responsiveness

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu_icon");
  const closeIcon = document.querySelector(".close_icon");
  const navbar = document.querySelector(".navbar");
  const link = document.querySelector(".link");

  menuIcon.addEventListener("click", function () {
    navbar.classList.add("open");
  });

  closeIcon.addEventListener("click", function () {
    navbar.classList.remove("open");
  });

  link.addEventListener("click", function () {
    navbar.classList.remove("open");
  });
});

// Function to remove <br> elements on devices with a maximum width of 767px
function removeBrOnSmallDevices() {
  if (window.innerWidth <= 767) {
    // Select elements containing <br> elements
    const elementsWithBr = document.querySelectorAll(".heading h1, .heading p");

    // Loop through each element and remove <br> elements
    elementsWithBr.forEach((element) => {
      element.innerHTML = element.innerHTML.replace(/<br>/g, "");
    });
  }
}

// Call the above function when the window is loaded and resized
window.addEventListener("load", removeBrOnSmallDevices);
window.addEventListener("resize", removeBrOnSmallDevices);
