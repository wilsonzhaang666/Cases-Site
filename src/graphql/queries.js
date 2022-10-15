/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        orders {
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
        createdAt
        updatedAt
        categories {
          nextToken
        }
        orders {
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
export const getProductOrder = /* GraphQL */ `
  query GetProductOrder($id: ID!) {
    getProductOrder(id: $id) {
      id
      product_id
      order_id
      category
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
        categories {
          nextToken
        }
        orders {
          nextToken
        }
      }
      customer
      order {
        id
        user
        date
        total
        status
        firstName
        lastName
        address
        address2
        suburb
        postcode
        phoneNum
        customer
        DeliverDate
        PickUpDate
        createdAt
        updatedAt
        products {
          nextToken
        }
      }
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
        order {
          id
          user
          date
          total
          status
          firstName
          lastName
          address
          address2
          suburb
          postcode
          phoneNum
          customer
          DeliverDate
          PickUpDate
          createdAt
          updatedAt
        }
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
      status
      firstName
      lastName
      address
      address2
      suburb
      postcode
      phoneNum
      customer
      DeliverDate
      PickUpDate
      createdAt
      updatedAt
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
        status
        firstName
        lastName
        address
        address2
        suburb
        postcode
        phoneNum
        customer
        DeliverDate
        PickUpDate
        createdAt
        updatedAt
        products {
          nextToken
        }
      }
      nextToken
    }
  }
`;
