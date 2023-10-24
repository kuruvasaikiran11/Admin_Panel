import React, { Component } from "react";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: null,
    };
  }

  componentDidMount() {
    // Retrieve appData from LocalStorage
    const appData = JSON.parse(localStorage.getItem("appData"));

    if (appData) {
      this.setState({
        orders: appData.dasbhoardPage.orders,
      });
    }
  }

  render() {
    const { orders } = this.state;

    if (!orders) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <div className="col-12 tm-block-col">
          <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
            <h2 className="tm-block-title">Orders List</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ORDER NO.</th>
                  <th scope="col">STATUS</th>
                  <th scope="col">OPERATORS</th>
                  <th scope="col">LOCATION</th>
                  <th scope="col">DISTANCE</th>
                  <th scope="col">START DATE</th>
                  <th scope="col">EST DELIVERY DUE</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <th scope="row">
                      <b>#{order.orderNo}</b>
                    </th>
                    <td>
                      <div
                        className={`tm-status-circle ${order.status.toLowerCase()}`}
                      ></div>
                      {order.status}
                    </td>
                    <td>
                      <b>{order.operators}</b>
                    </td>
                    <td>
                      <b>{order.location}</b>
                    </td>
                    <td>
                      <b>{order.distance} km</b>
                    </td>
                    <td>{order.startDate}</td>
                    <td>{order.deliveryDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default OrderList;
