let text = [
    "Ethusiastic Dev!",
    "Full Stack Developer!",
    "MERN Developer!",
    "React Developer!",
    "Cross Platform!",
    "Web Developer!",
    "NodeJS Developer!",
    "Cloud Engineer!",
    "Back-end Developer!",
    "Software Engineer!",
  ];
  
  let h1 = document.getElementById("animated-text");
  let index = 0;
  
  function animateText() {
    h1.innerText = text[index];
    index++;
    if (index >= text.length) {
      index = 0;
    }
    setTimeout(animateText, 2000); // Change this value to adjust the speed of animation
  }
  
  animateText();