/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBookOrder = /* GraphQL */ `
  query GetBookOrder($id: ID!) {
    getBookOrder(id: $id) {
      id
      book_id
      order_id
      order {
        id
        user
        date
        total
        books {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      book {
        id
        title
        category
        image
        quantity
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const listBookOrders = /* GraphQL */ `
  query ListBookOrders(
    $filter: ModelBookOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        book_id
        order_id
        order {
          id
          user
          date
          total
          createdAt
          updatedAt
          customer
        }
        createdAt
        updatedAt
        book {
          id
          title
          category
          image
          quantity
          featured
          price
          createdAt
          updatedAt
        }
        customer
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      date
      total
      books {
        items {
          id
          book_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        date
        total
        books {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      nextToken
    }
  }
`;
export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      title
      category
      image
      quantity
      featured
      price
      orders {
        items {
          id
          book_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        category
        image
        quantity
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
