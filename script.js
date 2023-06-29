let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener  

  // Part 1

  const changeTitle = document.querySelector("#main-title");
  changeTitle.textContent = "The DOM HW";


  // Part 2
  const changeBackgroundColor = function() {
    document.body.style.backgroundColor = "gray";
  };

  changeBackgroundColor();

  // Part 3

  function removeListItem() {
    const favorite_things = document.getElementById("favorite-things");
    const lastList = favorite_things.lastElementChild;
    lastList.remove();
  };

  removeListItem();
  // Part 4


  function changeFont_size() {
    const special_title = document.querySelectorAll(".special-title");
    special_title.forEach(title => {
      title.style.fontSize = "2rem";
    });
  }
  changeFont_size();
  // Part 5

  function removeChicago() {
    const pastRacesList = document.getElementById("past-races");
    const chicago = pastRacesList.querySelector("li:nth-child(4)");
    chicago.remove();
  }

  removeChicago();
  // Part 6



  function addPastRacesList() {
    const pastRacesList = document.getElementById("past-races");
    const newCity = document.createElement("li");
    newCity.textContent = "Addis Ababa";
    pastRacesList.appendChild(newCity);
  }
  addPastRacesList();
  // Part 7


  function createNewPlogPost() {
    const blogPost_dom_adventures = document.getElementById("dom-adventures");
      blogPost_dom_adventures.classList.add("special-title")
  

    const newBlogPostDiv = document.createElement("div");
    newBlogPostDiv.classList.add("blog-post");
    newBlogPostDiv.classList.add("purple");
    const newBlogPosth1 = document.createElement("h1");
    newBlogPosth1.textContent = `Addis`;
    const newBlogPostP = document.createElement("p");
    newBlogPostP.textContent = `What a city to visit.`;


    blogPost_dom_adventures.appendChild(newBlogPostDiv, blogPost_dom_adventures.lastChild);

    newBlogPostDiv.appendChild(newBlogPosth1);
    newBlogPostDiv.appendChild(newBlogPostP);


  }

  createNewPlogPost();

  // Part 8

  const randomDOMQuote = function() {


  };
  randomDOMQuote();

  // Part 9

  function twoEventHandlers() {
    const blogPosts = document.querySelectorAll(".blog-post .purple");

    blogPosts.forEach(blogPost => {
      blogPost.addEventListener("mouseout", () => {
        blogPost.style.backgroundColor = "";
      });

      blogPost.addEventListener("mouseenter", () => {
        blogPost.style.backgroundColor = "red";
      });
    })
  };
  twoEventHandlers();

});
