import {decorate} from '@loona/react';
import {state, mutation, update} from '@loona/react';
import {AddBook, allBooks, recentBook} from "../queries/book";

// State

export class BooksState {
  addBook({name}) {
    return {
      id: Math.random()
        .toString(16)
        .substr(2),
      name,
      __typename: 'Book',
    };
  }

  updateBooks(mutation, {patchQuery}) {
    patchQuery(allBooks, data => {
      data.allBooks.books.push(mutation.result);
    });
  }

  setRecent(mutation, {patchQuery}) {
    patchQuery(recentBook, data => {
      data.recentBook = mutation.result;
    });
  }
}

// Define options
state({
  defaults: {
    allBooks: {
      books: [
        {
          id: Math.random()
            .toString(16)
            .substr(2),
          name: 'Harry Potter',
          __typename: 'Book',
        },
      ]
    },
    recentBook: null,
  },
})(BooksState);

// Decorate the state
decorate(BooksState, {
  addBook: mutation(AddBook),
  updateBooks: update(AddBook),
  setRecent: update(AddBook),
});
