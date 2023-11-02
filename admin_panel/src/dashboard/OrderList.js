// import React, { Component } from "react";

// class OrderList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       orders: null,
//     };
//   }

//   componentDidMount() {
//     // Retrieve appData from LocalStorage
//     const appData = JSON.parse(localStorage.getItem("appData"));

//     if (appData) {
//       this.setState({
//         orders: appData.dasbhoardPage.orders,
//       });
//     }
//   }

//   render() {
//     const { orders } = this.state;

//     if (!orders) {
//       return <div>Loading...</div>;
//     }

//     return (
//       <>
//         <div className="col-12 tm-block-col">
//           <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
//             <h2 className="tm-block-title">Orders List</h2>
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th scope="col">ORDER NO.</th>
//                   <th scope="col">STATUS</th>
//                   <th scope="col">OPERATORS</th>
//                   <th scope="col">LOCATION</th>
//                   <th scope="col">DISTANCE</th>
//                   <th scope="col">START DATE</th>
//                   <th scope="col">EST DELIVERY DUE</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {orders.map((order, index) => (
//                   <tr key={index}>
//                     <th scope="row">
//                       <b>#{order.orderNo}</b>
//                     </th>
//                     <td>
//                       <div
//                         className={`tm-status-circle ${order.status.toLowerCase()}`}
//                       ></div>
//                       {order.status}
//                     </td>
//                     <td>
//                       <b>{order.operators}</b>
//                     </td>
//                     <td>
//                       <b>{order.location}</b>
//                     </td>
//                     <td>
//                       <b>{order.distance} km</b>
//                     </td>
//                     <td>{order.startDate}</td>
//                     <td>{order.deliveryDate}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default OrderList;

import React, { Component } from "react";
import axios from "axios";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    // Retrieve appData from LocalStorage
    const appData = JSON.parse(localStorage.getItem("appData"));
  
    if (appData && appData.dasbhoardPage.orders) {
      this.setState({
        orders: appData.dasbhoardPage.orders,
        loading: false,
      });
    } else {
      // If data is not in LocalStorage, fetch it from the API
      fetch("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          // Update the component state
          this.setState({
            orders: data.dasbhoardPage.orders,
            loading: false,
          });
  
          // Store the fetched data in LocalStorage
          const updatedAppData = {
            ...appData,
            dasbhoardPage: {
              ...appData.dasbhoardPage,
              orders: data.dasbhoardPage.orders,
            },
          };
          localStorage.setItem("appData", JSON.stringify(updatedAppData));
        })
        .catch((error) => {
          // Handle the error
          this.setState({ error: error.message, loading: false });
        });
    }
  }

  render() {
    const { orders, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
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
