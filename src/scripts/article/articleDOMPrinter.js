const articlePrinter = {

      printNewArticleButtonToDOM: () => {
      // Grab a reference to the output container
        document.querySelector("#news-header").innerHTML = "";

        document.querySelector("#article-section").innerHTML +=
        "<button id='new-article-btn'>New Article</button>";
      },

      printArticleFormToDOM: () => {
        // Grab a reference to the output container
        // document.querySelector("#article-section").innerHTML = "";

        document.querySelector("#news-header").innerHTML += `
        <form>
        <input type="text" id="new-article-title-box" placeholder="Title of News" />
        <br>
        <input type="text" id= "new-article-synopsis-box" placeholder="Synopsis" />
        <br>
        <input type="text" id="new-article-URL-box" placeholder="URL" />
        </form>
          <button id="save-new-article-btn">Save Article</button>`;
      },
      printSavedArticles: arrayOfArticlesParam => {
          document.querySelector("#news-cont").innerHTML = "";

          arrayOfArticlesParam.forEach(singleArticle => {

            document.querySelector(
              "#news-cont"
            ).innerHTML += `<div class="article-card" id="article-card-${singleArticle.id}">
            <p>${singleArticle.title}</p>
            <p>${singleArticle.synopsis}</p>
            <p>${singleArticle.url}</p>
              <button id ="delete-article-${singleArticle.id}">Delete</button>
              <button id ="edit-article-${singleArticle.id}">Edit</button>
          </div>
          `
          });
      },
      printArticleEditForm: (articleObjectToEdit) => {
          const targetCard = document.querySelector(`#article-card-${articleObjectToEdit.id}`

          targetCard.innerHTML = `
          <section>
          <input id="edit-input-${articleObjectToEdit.id}" type="text" value="${articleObjectToEdit.title}"
          <input id="edit-input-${articleObjectToEdit.id}" type="text" value="${articleObjectToEdit.synopsis}"
          <input id="edit-input-${articleObjectToEdit.id}" type="text" value="${articleObjectToEdit.url}"

            <button id="save-edit-${articleObjectToEdit.id}">Save</button>
          </section>
          `
      }
}
export default articlePrinter;