import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../dashboard/css/bootstrap.css"
import "../dashboard/css/fontawesome.css"
import "../dashboard/css/templatemo-style.css"

const NewProduct = () => {
  // Define state variables for the form fields
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "1",
    expirationDate: null,
    stock: "",
  });

  const handleFormChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      expirationDate: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Access form data from the state (formData) and proceed to store in localStorage
    const newProduct = {
      category: formData.category,
      description: formData.description,
      expireDate: getFormattedDate(formData.expirationDate),
      name: formData.name,
      stock: formData.stock,
      unitSold: formData.unitSold, // You can set this value as needed
    };

    // Get existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem("appData")) || {
      productsPage: { products: [] },
    };

    // Add the new product to the products array
    existingData.productsPage.products.push(newProduct);

    // Update localStorage with the new data
    localStorage.setItem("appData", JSON.stringify(existingData));

    // Clear the form
    setFormData({
      name: "",
      description: "",
      category: "1",
      expirationDate: null,
      stock: "",
      unitSold: "",
    });
  };

  // Helper function to format the date as "DD Month YYYY"
  const getFormattedDate = (date) => {
    if (!date) {
      return "";
    }

    const options = { year: "numeric", month: "long", day: "2-digit" };
    const dateParts = new Intl.DateTimeFormat("en-US", options).formatToParts(
      date
    );

    const day = dateParts.find((part) => part.type === "day").value;
    const month = dateParts.find((part) => part.type === "month").value;
    const year = dateParts.find((part) => part.type === "year").value;

    return `${day} ${month} ${year}`;
  };

  return (
    <div>
      <div className="container tm-mt-big tm-mb-big">
        <div className="row">
          <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <div className="row">
                <div className="col-12">
                  <h2 className="tm-block-title d-inline-block">Add Product</h2>
                </div>
              </div>
              <div className="row tm-edit-product-row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <form
                    action=""
                    className="tm-edit-product-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group mb-3">
                      <label htmlFor="name">Product Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control validate"
                        required
                        value={formData.name}
                        onChange={(e) => handleFormChange(e, "name")}
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="description">Description</label>
                      <textarea
                        id="description"
                        className="form-control validate"
                        rows="3"
                        required
                        value={formData.description}
                        onChange={(e) => handleFormChange(e, "description")}
                      ></textarea>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="category">Category</label>
                      <select
                        className="custom-select tm-select-accounts"
                        id="category"
                        value={formData.category}
                        onChange={(e) => handleFormChange(e, "category")}
                      >
                        <option value="0" selected>
                          Select Category
                        </option>
                        <option value="New Arrival">New Arrival</option>
                        <option value="Latest Fashion">Latest Fashion</option>
                        <option value="Trending">Trending</option>
                        <option value="Christmas Special">
                          Christmas Special
                        </option>
                        <option value="New Year Special">
                          New Year Special
                        </option>
                      </select>
                    </div>
                    <div className="row">
                      <div className="form-group mb-3 col-xs-12 col-sm-6">
                        <label htmlFor="expire_date">Expire Date</label>
                        <DatePicker
                          id="expire_date"
                          name="expire_date"
                          className="form-control validate"
                          selected={formData.expirationDate}
                          onChange={handleDateChange}
                        />
                      </div>
                      <div className="form-group mb-3 col-xs-12 col-sm-6">
                        <label htmlFor="stock">Units In Stock</label>
                        <input
                          id="stock"
                          name="stock"
                          type="text"
                          className="form-control validate"
                          required
                          value={formData.stock}
                          onChange={(e) => handleFormChange(e, "stock")}
                        />
                      </div>
                      <div className="form-group mb-3 col-xs-12 col-sm-6">
                        <label htmlFor="unitSold">Units Sold</label>
                        <input
                          id="unitSold"
                          name="unitSold"
                          type="text"
                          className="form-control validate"
                          required
                          value={formData.unitSold}
                          onChange={(e) => handleFormChange(e, "unitSold")}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block text-uppercase"
                    >
                      Add Product Now
                    </button>
                  </form>
                </div>
                {/* ... rest of your JSX ... */}
                <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                  <div className="tm-product-img-dummy mx-auto">
                    <i
                      className="fas fa-cloud-upload-alt tm-upload-icon"
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
                    ></i>
                  </div>
                  <div className="custom-file mt-3 mb-3">
                    <input
                      id="fileInput"
                      type="file"
                      style={{ display: "none" }}
                    />
                    <input
                      type="button"
                      className="btn btn-primary btn-block mx-auto"
                      value="UPLOAD PRODUCT IMAGE"
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
