var Book = function (id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.publisherID = publisherID;
    this.ISBN = ISBN; this.checkoutDate = checkoutDate;
    this.checkoutMember = checkoutMember;
    this.dueReturnDate = dueReturnDate;
    this.availability = availability;
};
Book.prototype = {
    getTitle: function () {
        return this.title;
    },
    getAuthor: function () {
        return this.author;
    },
    getISBN: function () { return this.ISBN; },
    updateCheckoutStatus: function (bookID, newStatus, checkoutDate, checkoutMember, newReturnDate) {
        this.id = bookID; this.availability = newStatus
        this.checkoutDate = checkoutDate; this.checkoutMember = checkoutMember; this.dueReturnDate = newReturnDate;
    },
    extendCheckoutPeriod: function (bookID, newReturnDate) {
        this.id = bookID; this.dueReturnDate = newReturnDate;
    },
    isPastDue: function (bookID) {
        var currentDate = newDate();
        return currentDate.getTime() > Date.parse(this.dueReturnDate);
    }
}

// flyweight optimized version
var Book = function (title, author, genre, pageCount, publisherID, ISBN) {
    this.title = title
    this.author = author
    this.genre = genre
    this.pageCount = pageCount
    this.publisherID = publisherID
    this.ISBN = ISBN;
};

// Book Factory singleton
var BookFactory = (function () {
    var existingBooks = {};
    return {
        createBook: function (title, author, genre, pageCount, publisherID, ISBN) {
            // Find out if a particular book meta-data combination has been created before
            var existingBook = existingBooks[ISBN]
            if (existingBook) {
                return existingBook
            } else {
                // if not, let's create a new instance of it and store it
                var book = new Book(title, author, genre, pageCount, publisherID, ISBN)
                existingBooks[ISBN] = book
                return book
            }
        }
    }
})

// BookRecordManager singleton
var BookRecordManager = (function () {
    var bookRecordDatabase = {};
    return {
        // add a new book into the library system
        addBookRecord: function (id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability) {
            var book = bookFactory.createBook(title, author, genre, pageCount, publisherID, ISBN);
            bookRecordDatabase[id] = {
                checkoutMember: checkoutMember,
                checkoutDate: checkoutDate,
                dueReturnDate: dueReturnDate,
                availability: availability,
                book: book;
            };
        },
        updateCheckoutStatus: function (bookID, newStatus, checkoutDate, checkoutMember, newReturnDate) {
            var record = bookRecordDatabase[bookID];
            record.availability = newStatus;
            record.checkoutDate = checkoutDate;
            record.checkoutMember = checkoutMember;
            record.dueReturnDate = newReturnDate;
        },
        extendCheckoutPeriod: function (bookID, newReturnDate) {
            bookRecordDatabase[bookID].dueReturnDate = newReturnDate;
        },
        isPastDue: function (bookID) {
            var currentDate = newDate();
            return currentDate.getTime() > Date.parse(bookRecordDatabase[bookID].dueReturnDate);
        }
    };
});