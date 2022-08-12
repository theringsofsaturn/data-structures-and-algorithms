<html>
  <head>
    <style>
      .myHeading {
        color: red;
      }
      .b-green {
        background-color: green;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>This is the title of the page</h1>
      <h2>This is the subtitle of the page</h2>
    </header>

    <main>
      <hr />

      <ul id="firstList">
        <li>1st</li>
        <li>2nd</li>
        <li>3rd</li>
      </ul>

      <ul id="secondList">
        <li>1st</li>
        <li>2nd</li>
        <li>3rd</li>
      </ul>

      <a href="strive.school">This link goes to Strive School</a>

      <div>
        <p>This text is just for the exercise</p>
      </div>

      <div>
        <input
          type="text"
          id="input-field"
          placeholder="input field for the exercise"
        />
      </div>
    </main>

    <footer>
      <p>And this text is just for the exercise too!</p>
    </footer>
    <script>
      /* EXERCISE 1
        Write a function for changing the title of the document in something else.
        */

      const changeTitle = function (newTitle) {
        const title = document.querySelector("h1");
        title.innerText = newTitle;
      };
      changeTitle("new title");

      /* EXERCISE 2
        Write a function for changing the class of the title of the page in "myHeading".
        */

      const addClassToTitle = function () {
        const title = document.querySelector("h1");
        title.classList.add("myHeading");
      };
      addClassToTitle();

      /* EXERCISE 3
        Write a function for changing the text of only the p which are children of a div.
        */

      const changePcontent = function () {
        const paragraphs = document.querySelectorAll("div p");
        paragraphs.forEach((p) => {
          p.innerText = "new text";
        });
      };
      changePcontent();
      /* EXERCISE 4
        Write a function for changing the destination of every link to https://www.google.com
        */

      const changeUrls = function () {
        const links = document.querySelectorAll("a");
        links.forEach((link) => {
          link.href = "https://www.google.com";
        });
      };
      changeUrls();
      /* EXERCISE 5
         Write a function for adding a new item in the second list.
         */

      const addToTheSecond = function (content) {
        const ul = document.querySelectorAll("ul")[1];
        ul.innerHTML += `<li>${content}</li>`;
        // const li = document.createElement("li");
        // li.innerText = "new list item";
        // ul.appendChild(li);
      };
      addToTheSecond("new item");

      /* EXERCISE 6
        Write a function for adding a second paragraph to the div.
        */

      const addParagraph = function (content) {
        const div = document.querySelectorAll("div")[0];
        div.innerHTML += `<p>${content}</p>`;
      };
      addParagraph("new paragraph");

      /* EXERCISE 7
        Write a function for making the first UL disappear.
        */

      const firstUlDisappear = function () {
        const ul = document.querySelectorAll("ul")[0];
        ul.remove();
      };
      //firstUlDisappear();
      //firstUlDisappear();
      /* EXERCISE 8
        Write a function for making the background of every UL green.
        */

      const paintItGreen = function () {
        const uls = document.querySelectorAll("ul");
        uls.forEach((ul) => {
          ul.classList.add("b-green");
        });
      };
      paintItGreen();
      /* EXERCISE 9
        Make the heading of the page change color every time the user clicks on it.
        */

      const makeItClickable = function () {
        const title = document.querySelector("h1");
        title.addEventListener("click", function (e) {
          e.target.classList.toggle("myHeading");
        });
      };
      makeItClickable();

      /* EXERCISE 10
        Change the footer text with something else when the user clicks on it.
        */

      const changeFooterText = function () {
        const footer = document.querySelector("footer");
        footer.addEventListener("click", function (e) {
          e.target.innerText = "text changed";
        });
      };
      changeFooterText();

      /* EXERCISE 11
        Attach an event listener to the input field in the page for console logging its value just after any keystroke.
        */

      const inputField = document.getElementById("input-field");
      document.onkeypress = function (e) {
        console.log(inputField.value);
      };

      /* EXERCISE 12
        Create a new welcome alert message when the page successfully loads.
        */

      window.onload = function () {
        alert("welcome");
      };

      /* EXERCISE 13
        Use HTML5 tags to divide the content of the page in a more semantic way.
        */
    </script>
  </body>
</html>
