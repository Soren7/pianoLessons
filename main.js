
let alfredBooks = document.getElementById('alfred-books');
let bookButton = document.getElementById('button');
let arrow = document.getElementsByTagName('i');

function dropDown () {
    if (alfredBooks.className === 'hide') {
        alfredBooks.className = 'example';
        arrow.id = 'foo';
    } else {
        alfredBooks.className = 'hide';
        arrow.id = 'rotate';
    }
};

bookButton.onclick(dropDown());