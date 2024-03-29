import React from "react";
import { useState } from "react";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  

  return (
    <div className="px-4 my-12 ">
      <section className="d-flex justify-content-center">
        <h2 className="mb-8 text-3xl font-bold">Add Goods to the LuxeMART</h2>
      </section>
      <div
        style={{ display: "flex", justifyContent: "left", marginTop: "30px" }}
        className="d-flex justify-content-center"
      >
        <div
          style={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0)",
          }}
          className="d-flex justify-content-center"
        >
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div>
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value="uncategorized">select the category</option>

                <option value="Vegetable">Vegetable</option>
                <option value="Fresh fruits">Fresh fruits</option>
                <option value="Water and drinks">Water and drinks</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input type="text" className="form-control" id="price" />
            </div>
            <div className="mb-3">
              <label htmlFor="Discount price" className="form-label">
                Discount Price
              </label>
              <input type="text" className="form-control" id="Discountprice" />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input type="text" className="form-control" id="description" />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                id="image"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
