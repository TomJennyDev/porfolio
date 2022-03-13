let chatbox = document.querySelector(".carousel-chatbox");

let chatboxString = [
  "<h1>HELLO!<h1>",
  "<h1>BONJOUR!<h1>",
  "<h1>你 好!<h1>",
  "<h2>Are you tired to find candidates?<h2>",
  "<h2>Are you looking for a boyfriend?<h2>",
  "<h2>Don't hesitate to call me!<h2>",
];

var typewriter = (app) =>
  new Typewriter(app, {
    cursor: "",
    loop: true,
    delay: 70,
  });
typewriter(chatbox)
  .typeString(chatboxString[0])
  .deleteAll()
  .typeString(chatboxString[1])
  .deleteAll()
  .typeString(chatboxString[2])
  .deleteAll()
  .typeString(chatboxString[3])
  .deleteAll()
  .typeString(chatboxString[4])
  .deleteAll()
  .typeString(chatboxString[5])
  .start();
