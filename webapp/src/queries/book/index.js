import gql from 'graphql-tag'

export class AddBook {
  static mutation = gql`
      mutation addBook($title: String!) {
          addBook(name: $title){
              name
          }
      }
  `;

  constructor(variables) {
    this.variables = variables;
  }
}

// GraphQL

export const allBooks = gql`
    query allBooks @client{
        allBooks{
            books{
                id
                name
            }
        }
    }
`;

export const recentBook = gql`
    query recentBook @client {
        recentBook {
            id
            name
        }
    }
`;
