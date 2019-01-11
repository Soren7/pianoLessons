
let alfredBooks = document.getElementById('alfred-books');
let bookButton = document.getElementById('button');

function dropDown () {
    if (alfredBooks.className === 'hide') {
        alfredBooks.className = 'example';
    } else {
        alfredBooks.className = 'hide';
    }
}

bookButton.onclick(dropDown());