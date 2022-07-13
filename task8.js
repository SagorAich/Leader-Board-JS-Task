const books=[
    'JavaScript: The Definitive Guide',
    'You Dont Know JS',
    'JavaScript & JQuery: Interactive Front-End Web Development',
    'JavaScript Allongé, the “Six” Edition',
    'this is a c ++ book'
]

const searching='javascript';
let jabaBook=[];
for(const book of books){
    if(book.toLowerCase().includes(searching)){
        jabaBook.push(book);
    }
}
console.log(jabaBook);
