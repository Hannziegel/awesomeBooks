/*    ------=========     Data    =========------    */

const bookList = []

const bookSection = document.getElementById('bookSection');

/*    ------=========     Create Articles    =========------    */
function createArticle() { 
        bookList.forEach((element, index) => {
            //create elements
            const bookArticle = document.createElement('article');
            const bookArticleUl = document.createElement('ul');
            const bookArticleHr = document.createElement('hr');
            const bookArticleTitle = document.createElement('li');
            const bookArticleAuthor = document.createElement('li');
            const bookArticleRemove = document.createElement('li');
            const bookArticleRemoveButton = document.createElement('button');

            //add classes and ids
            bookArticle.id = index;
            bookArticleRemoveButton.classList.add('removeButton')            //content
            bookArticleTitle.textContent = element.title;
            bookArticleAuthor.textContent = element.author;
            bookArticleRemoveButton.textContent = 'Remove'
            
            //append
            bookSection.appendChild(bookArticle)
            bookArticle.append(bookArticleUl, bookArticleHr)
            bookArticleUl.append(bookArticleTitle, bookArticleAuthor, bookArticleRemove)
            bookArticleRemove.appendChild(bookArticleRemoveButton)
    });
}
// Add content to bookList

function addBook(titleName, authorName, index){
    const newObject = {
        id : index,
        title: titleName,
        author: authorName
    }

    bookList.push(newObject)
}

addBook('first', 'Romina', 0)
addBook('Second', 'Rodrigo',1)
addBook('3', 'uno',2)
addBook('4', 'duos',3)
addBook('5', 'quatro',4)

createArticle()
console.log('Page loaded ', bookList)
// Remove button

document.querySelectorAll('.removeButton').forEach((element) => 
    element.addEventListener('click', () => {
    elementId = element.parentElement.parentElement.parentElement.id
    console.log(console.log(elementId))
    document.getElementById(elementId).remove()
    bookList.splice(bookList.indexOf(elementId), 1)   
    console.log('Element deleted ', bookList)
    //createArticle()
}))