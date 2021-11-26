/**
 * 
 * This project is hosted on github on this link: 
 * 
 * JavaScrpit Code developed by Hatem Hassany
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

// Define all global variables needed

const navigationBarList = document.getElementById("navbar__list");
const pageSections = Array.from(document.querySelectorAll("section"));

// this function will automatically generate navigation bar depending on homepage sections

function sectionsList() {
  for (section of pageSections) {
    menueSectionItemList = document.createElement("li");
    menueSectionItemList.innerHTML = `<a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a>`;
    navigationBarList.appendChild(menueSectionItemList);
  }
}

// Calling the function to generate the page sections list

sectionsList();

//  Adding event listener to get the user cklick and know the right section user want

navigationBarList.addEventListener("click", (targetedSection) => {
  // Listen to user clicked section
  // Prevent the page from getting the targted section immediately
  targetedSection.preventDefault();
  if (targetedSection.target.dataset.nav) {
    targetedSectionPlace = document.getElementById(
      `${targetedSection.target.dataset.nav}`
    );
    // Make rich to the targeted section slow and smoothly
    targetedSectionPlace.scrollIntoView({ behavior: "smooth" });
  }
});

// Function define webview area to detect the section appears on the screen and adding

window.onscroll = function () {
  pageSections.forEach(function (entery) {
    if (
      entery.getBoundingClientRect().top >= -400 &&
      entery.getBoundingClientRect().top <= 150
    ) {
      entery.classList.add("your-active-class");
      document
        .querySelector(`nav.navbar__menu a[href='#${entery.id}']`)
        .classList.add("aciveElement");
      console.log(entery.id);
    } else {
      entery.classList.remove("your-active-class");
      document
        .querySelector(`nav.navbar__menu a[href='#${entery.id}']`)
        .classList.remove("aciveElement");
    }
  });
};
