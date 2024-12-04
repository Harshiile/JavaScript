// For of,For in & For each for map,array,object

const arr = [23, 54, 87, 26, 48, 92]
const obj = {
    name: 'Harshil',
    age: '45',
    marks: function () {
        return this.age > 18 ? 100 : 50
    }
}
const map = new Map() // Unique wrt to keys
map.set('js', 'javascript')
map.set('cpp', 'c++')
map.set('py', 'python')
map.set('cs', 'c#')


// -------------------------------------------------------------------------------

// For Each,Filter,map

// For each -> returns undefined
// map -> returns new array
arr.forEach((item, index, ar) => {
    // console.log(item, index, ar);
})

// For of
for (const iter of arr) { // prints elements
    // console.log(iter);
}
for (const [key, value] of map) { // prints keys & values
    // console.log(value);
}
// for (const iter of obj) {// Not iterable
//     // console.log(iter); 
// }


// For in
for (const iter in arr) { // Print indexs
    // console.log(iter);
}
for (const [key, value] in map) { // Print nothing, For in does not work with maps
    console.log(key, value);
}
for (const iter in obj) {
    // console.log(iter); // Print keys
}

// -------------------------------------------------------------------------------

const books = [
    {
        "bookName": "The Lord of the Rings",
        "genre": "Fantasy",
        "publishYear": 1954,
        "edition": "Paperback"
    },
    {
        "bookName": "Pride and Prejudice",
        "genre": "Romance",
        "publishYear": 1813,
        "edition": "Hardcover"
    },
    {
        "bookName": "To Kill a Mockingbird",
        "genre": "Fiction",
        "publishYear": 1960,
        "edition": "Paperback"
    },
    {
        "bookName": "1984",
        "genre": "Dystopian Fiction",
        "publishYear": 1949,
        "edition": "Hardcover"
    },
    {
        "bookName": "The Great Gatsby",
        "genre": "Fiction",
        "publishYear": 1925,
        "edition": "Paperback"
    },
    {
        "bookName": "The Catcher in the Rye",
        "genre": "Fiction",
        "publishYear": 1951,
        "edition": "Hardcover"
    },
    {
        "bookName": "The Hitchhiker's Guide to the Galaxy",
        "genre": "Science Fiction",
        "publishYear": 1979,
        "edition": "Paperback"
    },
    {
        "bookName": "Harry Potter and the Sorcerer's Stone",
        "genre": "Fantasy",
        "publishYear": 1997,
        "edition": "Hardcover"
    },
    {
        "bookName": "The Hunger Games",
        "genre": "Dystopian Fiction",
        "publishYear": 2008,
        "edition": "Paperback"
    },
    {
        "bookName": "The Da Vinci Code",
        "genre": "Thriller",
        "publishYear": 2003,
        "edition": "Hardcover"
    },
    {
        "bookName": "The Girl with the Dragon Tattoo",
        "genre": "Crime Fiction",
        "publishYear": 2005,
        "edition": "Paperback"
    },
    {
        "bookName": "The Silmarillion",
        "genre": "Fantasy",
        "publishYear": 1977,
        "edition": "Hardcover"
    },
    {
        "bookName": "The Lord of the Rings: The Fellowship of the Ring",
        "genre": "Fantasy",
        "publishYear": 1954,
        "edition": "Paperback"
    },
    {
        "bookName": "The Lord of the Rings: The Two Towers",
        "genre": "Fantasy",
        "publishYear": 1954,
        "edition": "Paperback"
    },
    {
        "bookName": "The Lord of the Rings: The Return of the King",
        "genre": "Fantasy",
        "publishYear": 1955,
        "edition": "Paperback"
    },
    {
        "bookName": "The Hobbit",
        "genre": "Fantasy",
        "publishYear": 1937,
        "edition": "Paperback"
    },
    {
        "bookName": "The Lion, the Witch, and the Wardrobe",
        "genre": "Fantasy",
        "publishYear": 1950,
        "edition": "Hardcover"
    },
    {
        "bookName": "The Chronicles of Narnia",
        "genre": "Fantasy",
        "publishYear": 1950,
        "edition": "Hardcover"
    },
    {
        "bookName": "The Alchemist",
        "genre": "Fiction",
        "publishYear": 1988,
        "edition": "Paperback"
    },
    {
        "bookName": "Think and Grow Rich",
        "genre": "Self-Help",
        "publishYear": 1937,
        "edition": "Paperback"
    },
    {
        "bookName": "Atomic Habits",
        "genre": "Self-Help",
        "publishYear": 2018,
        "edition": "Hardcover"
    },
    {
        "bookName": "The 7 Habits of Highly Effective People",
        "genre": "Self-Help",
        "publishYear": 1989,
        "edition": "Paperback"
    },
    {
        "bookName": "Rich Dad Poor Dad",
        "genre": "Finance",
        "publishYear": 1997,
        "edition": "Paperback"
    },
    {
        "bookName": "The Lean Startup",
        "genre": "Business",
        "publishYear": 2011,
        "edition": "Hardcover"
    }
];



// let fantasyBooks = books.filter(book => (book.genre == 'Fantasy'))
// let fantasyBooksBefore1950 = books.filter(book => (book.genre == 'Fantasy' && book.publishYear < 1950))


// map : Use to just filters/destructre each elements from array of objects
console.log(books.map(book => book.publishYear)); // array of publishYear


// Chaining : multiple methods in single flow/line
// let tmpBooks = books.filter(book => book.genre == 'Fantasy').map(book => book.publishYear + 100)
// console.log(tmpBooks);


