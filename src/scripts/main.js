import articleDOMPrinter from "./article/articleDOMPrinter.js";
import articlePrinter from "./article/articleDOMPrinter.js";
import articleAPIManager from "./article/articleAPIManager.js";
import loginManager from "./login/loginManager.js";
// import formPrinter from "../scripts/login/printToDom.js";



// // formPrinter.printLoginForm();
// // formPrinter.printRegisterForm();
loginManager.loggingIN();
loginManager.register();
loginManager.logOut();

articleDOMPrinter.printNewArticleButtonToDOM()

// ------ CLICK EVENT FOR NEW ARTICLE BUTTON -----//

// Add an event listener to the New Article button

    document.querySelector("#article-section").addEventListener("click", function() {
        if (event.target.id === "new-article-btn") {

            // console.log("Btn Success!")
            articlePrinter.printArticleFormToDOM()

    }
  });

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

    // ------- CLICK EVENT FOR DELETE BUTTONS ----------//
// Add an event listener to the body element because the delete buttons are loaded dynamically-- they don't exist on page load!
document.querySelector("#news-cont").addEventListener("click", () => {
    // If the user clicks on a delete button, do some stuff
    if (event.target.id.includes("delete-article")) {
      // get the unique id of the person you want to delete
      // remember that we gave our delete buttons id attributes of delete-student-uniqueId
      const wordArray = event.target.id.split("-");
      const idOfThingWeWantToDelete = wordArray[2];
      console.log(idOfThingWeWantToDelete);

      // Make a DELETE request to our json-server
      articleAPIManager.deleteOneArticle(idOfThingWeWantToDelete).then(() => {
        // Once the delete is completed, get all the students-- we need to "refresh" the page (kind of)
        articleAPIManager.getAllArticles().then(parsedArticles => {
          // When the students come back, print them to the DOM again
          articleDOMPrinter.printSavedArticles(parsedArticles);
        });
      });
    }
  });
  // ------ EDIT EVENT LISTENERS ------//
// Event listener for edit button
document.querySelector("#news-cont").addEventListener("click", () => {
    if (event.target.id.includes("edit-article")) {
      // Get the id of the thing we want to edit from the button's id attribute
      const wordArray = event.target.id.split("-");
      const idOfThingWeWantToEdit = wordArray[2];

      // Pass that id into our apiManager to bring back the student we want to edit
      articleAPIManager.getOneArticle(idOfThingWeWantToEdit).then(singleArticle => {
        articleDOMPrinter.printArticleEditForm(singleArticle);
      });
    }
  });

    });


