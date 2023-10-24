import React from 'react';
import "../dashboard/css/bootstrap.min.css";
import "../dashboard/css/fontawesome.min.css"
import "../dashboard/css/templatemo-style.css"

function Products() {
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
                    {/* Add your product table rows here */}
                  </tbody>
                </table>
              </div>
              <a href="add-product.html" className="btn btn-primary btn-block text-uppercase mb-3">Add new product</a>
              <button className="btn btn-primary btn-block text-uppercase">Delete selected products</button>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-product-categories">
              <h2 className="tm-block-title">Product Categories</h2>
              <div className="tm-product-table-container">
                <table className="table tm-table-small tm-product-table">
                  <tbody>
                    {/* Add your product categories table rows here */}
                  </tbody>
                </table>
              </div>
              <button className="btn btn-primary btn-block text-uppercase mb-3">Add new category</button>
            </div>
          </div>
        </div>
      </div>

      <footer className="tm-footer row tm-mt-small">
        <div className="col-12 font-weight-light">
          <p className="text-center text-white mb-0 px-4 small">
            Copyright &copy; <b>2018</b> All rights reserved.
            Design: <a rel="nofollow noopener" href="https://templatemo.com" className="tm-footer-link">Template Mo</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Products;
