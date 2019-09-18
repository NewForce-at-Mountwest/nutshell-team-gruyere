import articleDOMPrinter from "./article/articleDOMPrinter.js";
import articlePrinter from "./article/articleDOMPrinter.js";
import articleAPIManager from "./article/articleAPIManager.js";
import loginManager from "./login/loginManager.js";
// import formPrinter from "../scripts/login/printToDom.js";



// formPrinter.printLoginForm();
// formPrinter.printRegisterForm();
loginManager.loggingIN();
loginManager.register();
// loginManager.logOut();

// ~~~ NEWS ARTICLE COMPONENT ~~~ //

articleDOMPrinter.printNewArticleButtonToDOM()

// ARTICLE ------ CLICK EVENT FOR ~NEW ARTICLE~ BUTTON -----//

// Add an event listener to the New Article button

    document.querySelector("#article-section").addEventListener("click", function() {
        if (event.target.id === "new-article-btn") {

            // console.log("Btn Success!")
            articlePrinter.printArticleFormToDOM()

    }
  });
// ARTICLE - SAVE BUTTON
    document.querySelector("#news-header").addEventListener("click", function() {
        if (event.target.id === "save-new-article-btn") {

            console.log("Btn Success!")


            const userInputTitle = document.querySelector("#new-article-title-box").value;
            const userInputSynopsis = document.querySelector("#new-article-synopsis-box").value;
            const userInputURL = document.querySelector("#new-article-URL-box").value;

            const articleObjectToPost = {


                title: userInputTitle,
                synopsis: userInputSynopsis,
                url:  userInputURL,
                userId: 1
            };

        articleAPIManager.postArticle(articleObjectToPost)
        .then(articleAPIManager.getAllArticles)
        .then(parsedArticles => {
            console.log(document.querySelector("#news-cont"))
            document.querySelector("#news-cont").innerHTML = "";

            articleDOMPrinter.printSavedArticles(parsedArticles)
        })

        }
    });
    // ARTICLE ------- CLICK EVENT FOR DELETE BUTTONS ----------//
    document.querySelector("#news-cont").addEventListener("click", () => {
        // If the user clicks on a delete button, it deletes
        if (event.target.id.includes("delete-article")) {
      // get the unique id of the article you to be deleted

            const wordArray = event.target.id.split("-");
            const idOfThingWeWantToDelete = wordArray[2];
            console.log(idOfThingWeWantToDelete);

        // Make a DELETE request to json-server
    articleAPIManager.deleteOneArticle(idOfThingWeWantToDelete).then(() => {
            // Once the delete is completed, get all the articles
        articleAPIManager.getAllArticles().then(parsedArticles => {
                // Articles return, print them to the DOM again
            articleDOMPrinter.printSavedArticles(parsedArticles);
        });
    });
        }
    });
  // ARTICLE ------ EDIT EVENT LISTENERS ------//
    // Event listener for edit button
    document.querySelector("#news-cont").addEventListener("click", () => {
        if (event.target.id.includes("edit-article")) {
            // console.log("Btn Success!")
            // Get the id of the thing we want to edit from the button's id attribute
            const wordArray = event.target.id.split("-");
            const idOfThingWeWantToEdit = wordArray[2];

      // Pass that id into articleAPIManager to bring back the article we want to edit
    articleAPIManager.getOneArticle(idOfThingWeWantToEdit).then(singleArticle => {
        articleDOMPrinter.printArticleEditForm(singleArticle);
    });
        }
    });
// Event listener for submit button

    document.querySelector("body").addEventListener("click", () => {
        if (event.target.id.includes("save-edit")) {
            console.log("Btn Success!")
      // Get the id of the thing we want to edit
      const wordArray = event.target.id.split("-");
      const idOfThingWeWantToEdit = wordArray[2];
      console.log(idOfThingWeWantToEdit);

      // Get the value of the input
      const editedInputValue = document.querySelector(
        `#edit-input-${idOfThingWeWantToEdit}`
      ).value;

      // Put the input value into an object
      const editedArticleObj = {
        title: editedInputValue,
        synopsis: editedInputValue,
        url: editedInputValue,
        userId: localStorage.getItem("userId")
      };

      console.log("Data being sent to DB", editedArticleObj);
      // Send to database w/ PUT method
      articleAPIManager
        .editOneArticle(idOfThingWeWantToEdit, editedArticleObj)
        .then(() => {
          articleAPIManager.getAllArticles().then(allArticles => {
            articleDOMPrinter.printSavedArticles(allArticles);
          });
        });

      // Once the PUT is complete, GET all the articles from the db
      // Once they articles come back from the db, print them to the DOM
    }
  });