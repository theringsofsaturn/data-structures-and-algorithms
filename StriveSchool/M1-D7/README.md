
# JavaScript Challenge

# Module 1 / Day 7 at Strive School (EPICODE)
# Answers in the homework.html file


<html>
  <head>
    <script>
      /* EXERCISE 1
      Write a function for changing the title of the document in something else.
      */

      const changeTitle = function (newTitle) {
        //
      };

      /* EXERCISE 2
      Write a function for changing the class of the title of the page in "myHeading".
      */

      const addClassToTitle = function () {
        //
      };

      /* EXERCISE 3
      Write a function for changing the text of only the p which are children of a div.
      */

      const changePcontent = function () {
        //
      };

      /* EXERCISE 4
      Write a function for changing the destination of every link to https://www.google.com
      */

      const changeUrls = function () {
        //
      };

      /* EXERCISE 5
       Write a function for adding a new item in the second list.
       */

      const addToTheSecond = function (content) {
        //
      };

      /* EXERCISE 6
      Write a function for adding a second paragraph to the div.
      */

      const addParagraph = function (content) {
        //
      };

      /* EXERCISE 7
      Write a function for making the first UL disappear.
      */

      const firstUlDisappear = function () {
        //
      };

      /* EXERCISE 8
      Write a function for making the background of every UL green.
      */

      const paintItGreen = function () {
        //
      };

      /* EXERCISE 9
      Make the heading of the page change color every time the user clicks on it.
      */

      const makeItClickable = function () {
        //
      };

      /* EXERCISE 10
      Change the footer text with something else when the user clicks on it.
      */

      const changeFooterText = function () {
        //
      };

      /* EXERCISE 11
      Attach an event listener to the input field in the page for console logging its value just after any keystroke.
      */

      const inputField = document.getElementById("input-field");
      // ...

      /* EXERCISE 12
      Create a new welcome alert message when the page successfully loads.
      */

      window.onload = function () {
        //
      };

      /* EXERCISE 13
      Use HTML5 tags to divide the content of the page in a more semantic way.
      */
    </script>

    <style>
      .myHeading {
        color: red;
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
  </body>
</html>
