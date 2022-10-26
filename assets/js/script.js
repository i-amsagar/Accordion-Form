// Accordion Section

const accordionItemHeader = document.querySelectorAll(".accordion-item-header");

accordionItemHeader.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

// Display Message

// function message(form) {
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     success.style.display = "block";
//     img_Show.style.display = "block";
//   });
//   const messageTimeout = setTimeout(myGreeting, 5000);
//   function myGreeting() {
//     success.style.display = "none";
//   }
// }

const form = document.querySelectorAll("#form");
for (let i = 0; i < form.length; i++) {
  form[i].addEventListener("submit", (e) => {
    e.preventDefault();
    success.style.display = "block";
    document.querySelectorAll(".img_Show")[i].style.display = "block";
    const messageTimeout = setTimeout(myGreeting, 5000);
    function myGreeting() {
      success.style.display = "none";
    }
  });
}