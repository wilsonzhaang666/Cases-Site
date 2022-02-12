import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { API, graphqlOperation, Storage } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { createBook } from "../api/mutations";
import config from "../aws-exports";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

const Admin = () => {
  const [image, setImage] = useState(null);
  const [bookDetails, setBookDetails] = useState({
    id: "",
    title: "",
    image: "",
    category: "iphone11",
    price: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!bookDetails.title || !bookDetails.price) return;
      await API.graphql(graphqlOperation(createBook, { input: bookDetails }));
      setBookDetails({ id: "", title: "", image: "", category: "", price: "" });
    } catch (err) {
      console.log("error creating todo:", err);
    }
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
      setBookDetails({ ...bookDetails, image: url });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="admin-wrapper">
      <AmplifyAuthenticator>
        <section>
          <header className="form-header">
            <h3>Add New Book</h3>
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
                      setBookDetails({ ...bookDetails, title: e.target.value })
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
                    onChange={(e) =>
                      setBookDetails({ ...bookDetails, id: e.target.value })
                    }
                    required
                  />
                </p>
              </div>
              <div className="category-form">
                <p>
                  <label htmlFor="category">category</label>
                </p>
                <p>
                  <select
                    name="category"
                    onChange={(e) =>
                      setBookDetails({
                        ...bookDetails,
                        category: e.target.value,
                      })
                    }
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
                </p>
              </div>
              <div className="quantity-form">
                <p>
                  <label htmlFor="quantity">Quantity</label>
                </p>
                <p>
                  <input
                    name="quantity"
                    type="text"
                    placeholder="Type the quantity"
                    onChange={(e) =>
                      setBookDetails({
                        ...bookDetails,
                        quantity: e.target.value,
                      })
                    }
                    required
                  />
                </p>
              </div>
              <div className="price-form">
                <p>
                  <label htmlFor="price">Price ($)</label>
                  <input
                    name="price"
                    type="text"
                    placeholder="What is the Price of the book (USD)"
                    onChange={(e) =>
                      setBookDetails({ ...bookDetails, price: e.target.value })
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
                    checked={bookDetails.featured}
                    onChange={() =>
                      setBookDetails({
                        ...bookDetails,
                        featured: !bookDetails.featured,
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
