
let alfredBooks = document.getElementById('alfred-books');
let bookButton = document.getElementById('button');
let arrow = document.getElementsByTagName('i');

function dropDown () {
    if (alfredBooks.className === 'hide') {
        alfredBooks.className = 'example';
        arrow.class.id = 'rotate';
    } else {
        alfredBooks.className = 'hide';
        arrow.id = 'null';
    }
}

bookButton.onclick(dropDown());