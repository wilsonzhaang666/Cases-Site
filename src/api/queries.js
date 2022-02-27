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
        products {
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
export const getProductOrder = /* GraphQL */ `
  query GetProductOrder($id: ID!) {
    getProductOrder(id: $id) {
      id
      product_id
      order_id
      category
      order {
        id
        user
        date
        total
        products {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      product {
        id
        title
        image
        Secondimage
        Thirdimage
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
        categories {
          nextToken
        }
      }
      customer
    }
  }
`;
export const listProductOrders = /* GraphQL */ `
  query ListProductOrders(
    $filter: ModelProductOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        product_id
        order_id
        category
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
        product {
          id
          title
          image
          Secondimage
          Thirdimage
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
      products {
        items {
          id
          product_id
          order_id
          category
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
        products {
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
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      title
      image
      Secondimage
      Thirdimage
      featured
      price
      orders {
        items {
          id
          product_id
          order_id
          category
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      categories {
        items {
          id
          product_id
          category
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        image
        Secondimage
        Thirdimage
        featured
        price

        createdAt
        updatedAt
        categories {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getProductType = /* GraphQL */ `
  query GetProductType($id: ID!) {
    getProductType(id: $id) {
      id
      product_id
      category
      quantity
      createdAt
      updatedAt
      product {
        id
        title
        image
        Secondimage
        Thirdimage
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
        categories {
          nextToken
        }
      }
    }
  }
`;
export const listProductTypes = /* GraphQL */ `
  query ListProductTypes(
    $filter: ModelProductTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        product_id
        category
        quantity
        createdAt
        updatedAt
        product {
          id
          title
          image
          Secondimage
          Thirdimage
          featured
          price
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
