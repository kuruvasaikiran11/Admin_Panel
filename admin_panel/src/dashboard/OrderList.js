import React, { Component } from "react";
import "./css/bootstrap.min.css";
import "./css/fontawesome.min.css";
import "./css/templatemo-style.css";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
      .then((response) => response.json())
      .then((data) => this.setState({ data }))
      .catch((error) => console.error("Error fetching data: ", error));
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return <div>Loading...</div>;
    }

    const orders = data.dasbhoardPage.orders;

    return (
      <>
        <div class="col-12 tm-block-col">
          <div class="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
            <h2 class="tm-block-title">Orders List</h2>
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
