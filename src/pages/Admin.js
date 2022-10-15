import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { API, graphqlOperation, Storage } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { createProduct, createProductType } from "../api/mutations";
import config from "../aws-exports";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

const Admin = () => {
  const [image, setImage] = useState(null);
  const [secondimage, setSecondImage] = useState(null);
  const [thirdImage, setThirdImage] = useState(null);

  const [productDetails, setProductDetails] = useState({
    id: "",
    title: "",
    image: "",
    price: "",
    Secondimage: "",
    Thirdimage: "",
  });

  const defaultId = productDetails.id + "iphone11";
  const [productTypes, setProductTypes] = useState([
    {
      id: productDetails.id + "iphone11",
      product_id: productDetails.id,
      category: "iphone11",
      quantity: "",
    },
  ]);
  const handleSubmit = async (e) => {
    console.log(productDetails);
    e.preventDefault();
    try {
      if (!productDetails.title || !productDetails.price) return;
      await API.graphql(
        graphqlOperation(createProduct, { input: productDetails })
      );
      for (let i = 0; i < productTypes.length; i++) {
        await API.graphql(
          graphqlOperation(createProductType, { input: productTypes.at(i) })
        );
      }

      setProductDetails({ id: "", title: "", image: "", price: "" });
      setProductTypes([
        {
          id: uuidv4(),
          product_id: productDetails.id,
          category: "iphone11",
          quantity: "",
        },
      ]);
    } catch (err) {
      console.log("error creating todo:", err);
    }
  };

  const handletypeChange = (e, index) => {
    const updatedAreas = [...productTypes];
    console.log(e);
    var idIndex;
    for (let i = 0; i < updatedAreas.length; i++) {
      if (index === updatedAreas.at(i).id) {
        idIndex = i;
      }
    }
    updatedAreas[idIndex].id = productDetails.id + e.target.value;

    updatedAreas[idIndex].category = e.target.value;
    setProductTypes(updatedAreas);
  };

  const setQuantity = (e, index) => {
    const updatedAreas = [...productTypes];
    console.log(e);
    var idIndex;
    for (let i = 0; i < updatedAreas.length; i++) {
      if (index === updatedAreas.at(i).id) {
        idIndex = i;
      }
    }
    updatedAreas[idIndex].quantity = e.target.value;
    setProductTypes(updatedAreas);
  };
  const handleIdChange = (e) => {
    const updatedAreas = [...productTypes];

    for (let i = 0; i < updatedAreas.length; i++) {
      updatedAreas.at(i).product_id = e.target.value;
      updatedAreas.at(i).id = e.target.value + updatedAreas.at(i).category;
    }
    setProductTypes(updatedAreas);
    setProductDetails({ ...productDetails, id: e.target.value });
  };
  const addCategory = () => {
    const updatedAreas = [...productTypes];
    updatedAreas[productTypes.length] = {
      id: uuidv4(),
      product_id: productDetails.id,
      category: "iphone11",
      quantity: "",
    };
    setProductTypes(updatedAreas);
  };
  const handleImageUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const extension = file.name.split(".")[1];
    const name = file.name.split(".")[0];
    const key = `images/${uuidv4()}${name}.${extension}`;
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
    try {
      // Upload the file to s3 with public access level.
      await Storage.put(key, file, {
        level: "public",
        contentType: file.type,
      });
      // Retrieve the uploaded file to display
      const image = await Storage.get(key, { level: "public" });
      setImage(image);
      setProductDetails({ ...productDetails, image: url });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSecondImageUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const extension = file.name.split(".")[1];
    const name = file.name.split(".")[0];
    const key = `images/${uuidv4()}${name}.${extension}`;
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
    try {
      // Upload the file to s3 with public access level.
      await Storage.put(key, file, {
        level: "public",
        contentType: file.type,
      });
      // Retrieve the uploaded file to display
      const image = await Storage.get(key, { level: "public" });
      setSecondImage(image);
      setProductDetails({ ...productDetails, Secondimage: url });
    } catch (err) {
      console.log(err);
    }
  };
  const handleThirdImageUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const extension = file.name.split(".")[1];
    const name = file.name.split(".")[0];
    const key = `images/${uuidv4()}${name}.${extension}`;
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
    try {
      // Upload the file to s3 with public access level.
      await Storage.put(key, file, {
        level: "public",
        contentType: file.type,
      });
      // Retrieve the uploaded file to display
      const image = await Storage.get(key, { level: "public" });
      setThirdImage(image);
      setProductDetails({ ...productDetails, Thirdimage: url });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="admin-wrapper">
      <AmplifyAuthenticator>
        <section>
          <header className="form-header">
            <h3>Add New Product</h3>
            <AmplifySignOut></AmplifySignOut>
          </header>
          <form className="form-wrapper" onSubmit={handleSubmit}>
            <div className="form-image">
              {image ? (
                <img className="image-preview" src={image} alt="" />
              ) : (
                <input
                  type="file"
                  accept="image/jpg"
                  onChange={(e) => handleImageUpload(e)}
                />
              )}
            </div>
            <div className="form-image">
              {secondimage ? (
                <img className="image-preview" src={secondimage} alt="" />
              ) : (
                <input
                  type="file"
                  accept="image/jpg"
                  onChange={(e) => handleSecondImageUpload(e)}
                />
              )}
            </div>
            <div className="form-image">
              {thirdImage ? (
                <img className="image-preview" src={thirdImage} alt="" />
              ) : (
                <input
                  type="file"
                  accept="image/jpg"
                  onChange={(e) => handleThirdImageUpload(e)}
                />
              )}
            </div>
            <div className="form-fields">
              <div className="title-form">
                <p>
                  <label htmlFor="title">Title</label>
                </p>
                <p>
                  <input
                    name="email"
                    type="title"
                    placeholder="Type the title"
                    onChange={(e) =>
                      setProductDetails({
                        ...productDetails,
                        title: e.target.value,
                      })
                    }
                    required
                  />
                </p>
              </div>
              <div className="id-form">
                <p>
                  <label htmlFor="id">ID</label>
                </p>
                <p>
                  <input
                    name="id"
                    type="title"
                    placeholder="id"
                    onChange={(e) => handleIdChange(e)}
                    required
                  />
                </p>
              </div>
              <p>
                <label htmlFor="category">category</label>
              </p>
              <button onClick={() => addCategory()}>Add Category</button>
              <br />
              {productTypes.map((type) => (
                <div className="category-form">
                  <p>
                    <select
                      name="category"
                      value={type.category}
                      onChange={(e) => handletypeChange(e, type.id)}
                    >
                      <option value="iphone11">iphone11</option>
                      <option value="iphone11pro">iphone11 pro</option>
                      <option value="iphone11promax">iphone11 pro Max</option>
                      <option value="iphone12">iphone12</option>
                      <option value="iphone12mini">iphone12 mini</option>
                      <option value="iphone12pro">iphone12 pro</option>
                      <option value="iphone12promax">iphone12 pro Max</option>
                      <option value="iphone13">iphone13</option>
                      <option value="iphone13mini">iphone13 mini</option>
                      <option value="iphone13pro">iphone13 pro</option>
                      <option value="iphone13promax">iphone13 pro Max</option>
                      <option value="airpod">AirPod</option>
                      <option value="airpodpro">AirPod Pro</option>
                      <option value="event">event</option>
                    </select>
                    <input
                      name="quantity"
                      type="text"
                      placeholder="Type the quantity"
                      onChange={(e) => setQuantity(e, type.id)}
                      required
                    />{" "}
                  </p>
                </div>
              ))}

              <div className="price-form">
                <p>
                  <label htmlFor="price">Price ($)</label>
                  <input
                    name="price"
                    type="text"
                    placeholder="What is the Price of the product (AUD)"
                    onChange={(e) =>
                      setProductDetails({
                        ...productDetails,
                        price: e.target.value,
                      })
                    }
                    required
                  />
                </p>
              </div>
              <div className="featured-form">
                <p>
                  <label>Featured?</label>
                  <input
                    type="checkbox"
                    className="featured-checkbox"
                    checked={productDetails.featured}
                    onChange={() =>
                      setProductDetails({
                        ...productDetails,
                        featured: !productDetails.featured,
                      })
                    }
                  />
                </p>
              </div>
              <div className="submit-form">
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
      </AmplifyAuthenticator>
    </section>
  );
};

export default Admin;
