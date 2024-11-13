const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content";
container.appendChild(content);
content.setAttribute("style", "color: pink; font-size: 20px; text-align: center;");

const redText = document.createElement("p");
redText.classList.add("redText");
redText.textContent = "Hey I am red!";
container.appendChild(redText);
redText.setAttribute("style", "color: red;")
container.insertBefore(redText, content);
// container.replaceChild(redText, container.lastElementChild);

const blueText = document.createElement("h3");
blueText.classList = "blueText";
blueText.textContent = "Blue button";
blueText.setAttribute("style", "color: blue; text-align: end;");
container.append(blueText);

const blackPink = document.createElement("div");
blackPink.setAttribute("style", "border: 2px solid black; background-color: pink; border-radius: 10px;");
// blackPink.textContent = "I am black pink!";
blackPink.classList = "blackpink";
container.appendChild(blackPink);

const thing1 = document.createElement("h1");
thing1.setAttribute("style", "color: white; font-weight: 700; text-align: center;");
thing1.textContent = "I'm in a div";
thing1.classList = "thing1";
blackPink.appendChild(thing1);

const thing2 = document.createElement("p");
thing2.classList = "thing2";
thing2.textContent = "ME TOO!";
blackPink.insertBefore(thing2, thing1);

// the JavaScript file
const btn = document.querySelector("#btn");
btn.onclick = () => alert("hey ");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    alert("you clicked me!");
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "yellow";
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    console.log(button.id);
  });
});
