/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const processOrderBackup = /* GraphQL */ `
  mutation ProcessOrderBackup($input: ProcessOrderInput!) {
    processOrderBackup(input: $input)
  }
`;
export const emailChanges = /* GraphQL */ `
  mutation EmailChanges($input: ProcessOrderInput!) {
    EmailChanges(input: $input)
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
