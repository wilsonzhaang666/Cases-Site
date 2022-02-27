/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const emailChanges = /* GraphQL */ `
  mutation EmailChanges($input: ProcessOrderInput!) {
    EmailChanges(input: $input)
  }
`;
export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
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
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
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
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
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
export const createBookOrder = /* GraphQL */ `
  mutation CreateBookOrder(
    $input: CreateBookOrderInput!
    $condition: ModelBookOrderConditionInput
  ) {
    createBookOrder(input: $input, condition: $condition) {
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
export const updateBookOrder = /* GraphQL */ `
  mutation UpdateBookOrder(
    $input: UpdateBookOrderInput!
    $condition: ModelBookOrderConditionInput
  ) {
    updateBookOrder(input: $input, condition: $condition) {
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
export const deleteBookOrder = /* GraphQL */ `
  mutation DeleteBookOrder(
    $input: DeleteBookOrderInput!
    $condition: ModelBookOrderConditionInput
  ) {
    deleteBookOrder(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createProductType = /* GraphQL */ `
  mutation CreateProductType(
    $input: CreateProductTypeInput!
    $condition: ModelProductTypeConditionInput
  ) {
    createProductType(input: $input, condition: $condition) {
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
export const updateProductType = /* GraphQL */ `
  mutation UpdateProductType(
    $input: UpdateProductTypeInput!
    $condition: ModelProductTypeConditionInput
  ) {
    updateProductType(input: $input, condition: $condition) {
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
export const deleteProductType = /* GraphQL */ `
  mutation DeleteProductType(
    $input: DeleteProductTypeInput!
    $condition: ModelProductTypeConditionInput
  ) {
    deleteProductType(input: $input, condition: $condition) {
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
export const createProductOrder = /* GraphQL */ `
  mutation CreateProductOrder(
    $input: CreateProductOrderInput!
    $condition: ModelProductOrderConditionInput
  ) {
    createProductOrder(input: $input, condition: $condition) {
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
export const updateProductOrder = /* GraphQL */ `
  mutation UpdateProductOrder(
    $input: UpdateProductOrderInput!
    $condition: ModelProductOrderConditionInput
  ) {
    updateProductOrder(input: $input, condition: $condition) {
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
export const deleteProductOrder = /* GraphQL */ `
  mutation DeleteProductOrder(
    $input: DeleteProductOrderInput!
    $condition: ModelProductOrderConditionInput
  ) {
    deleteProductOrder(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
