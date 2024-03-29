import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../dashboard/css/bootstrap.css"
import "../dashboard/css/fontawesome.css"
import "../dashboard/css/templatemo-style.css"

function Products() {
  const initialData = JSON.parse(localStorage.getItem("appData")) || {
    productsPage: { products: [] },
  };

  const [data, setData] = useState(initialData.productsPage.products);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCheckboxChange = (index, isChecked) => {
    if (isChecked) {
      setSelectedProducts([...selectedProducts, index]);
    } else {
      setSelectedProducts(selectedProducts.filter((i) => i !== index));
    }
  };

  const handleProductDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
    setSelectedProducts(selectedProducts.filter((i) => i !== index));
  };

  const handleDeleteSelected = () => {
    const updatedData = data.filter((_, index) => !selectedProducts.includes(index));
    setData(updatedData);
    setSelectedProducts([]);
  };

  useEffect(() => {
    const updatedAppData = {
      ...initialData,
      productsPage: {
        products: data,
      },
    };
    localStorage.setItem("appData", JSON.stringify(updatedAppData));
  }, [data]);

  return (
    <div>
      <div className="container mt-5">
        <div className="row tm-content-row">
          <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-products">
              <div className="tm-product-table-container">
                <table className="table table-hover tm-table-small tm-product-table">
                  <thead>
                    <tr>
                      <th scope="col">&nbsp;</th>
                      <th scope="col">PRODUCT NAME</th>
                      <th scope="col">UNIT SOLD</th>
                      <th scope="col">IN STOCK</th>
                      <th scope="col">EXPIRE DATE</th>
                      <th scope="col">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((product, index) => (
                      <tr key={index} className={selectedProducts.includes(index) ? 'selected-row' : ''}>
                        <th scope="row">
                          <input
                            type="checkbox"
                            checked={selectedProducts.includes(index)}
                            onChange={(e) => handleCheckboxChange(index, e.target.checked)}
                          />
                        </th>
                        <td className="tm-product-name">{product.name}</td>
                        <td>{product.unitSold}</td>
                        <td>{product.stock}</td>
                        <td>{product.expireDate}</td>
                        <td>
                          <a
                            href="#"
                            className="tm-product-delete-link"
                            onClick={() => handleProductDelete(index)}
                          >
                            <i className="far fa-trash-alt tm-product-delete-icon"></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button className="btn btn-primary btn-block text-uppercase" onClick={handleDeleteSelected}>
                DELETE SELECTED PRODUCTS
              </button>
              <Link to="/products/add-product" className="btn btn-primary btn-block text-uppercase mb-3">
                Add New Product
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-product-categories">
              <h2 className="tm-block-title">Product Categories</h2>
              <div className="tm-product-table-container">
                <table className="table tm-table-small tm-product-table">
                  <tbody>
                    {data.map((product, index) => (
                      <tr key={index}>
                        <td className="tm-product-name">{product.category}</td>
                        <td className="text-center">
                          <a href="#" className="tm-product-delete-link">
                            <i className="far fa-trash-alt tm-product-delete-icon"></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Link to="/add-category" className="btn btn-primary btn-block text-uppercase mb-3">
                Add New Category
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
