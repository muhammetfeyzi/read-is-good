db.book.createIndex({createdDateTime: -1});
db.book.createIndex({rating: -1});
db.book.createIndex({genre: 1});
db.book.createIndex({author: 1});
db.book.createIndex({"createdBy.fullName": 1});
db.book.createIndex({title: "text", author: "text", genre: "text", summary: "text", "comments.comment": "text", "googleBookDetails.volumeInfo.description": "text"}, { weights: {title: 10, author: 10, genre: 5, summary: 4, "comments.comment": 3, "googleBookDetails.volumeInfo.description": 1}, name: "fullTextIndex"} );
