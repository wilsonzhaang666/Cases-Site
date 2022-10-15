import React, { useState, useContext } from "react";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { updateOrder } from "../api/mutations";

import { OrderContext } from "../context/orders";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const ManagementSystem = () => {
  const { orders } = useContext(OrderContext);
  const [show, setShow] = useState(false);
  const [order, setOrder] = useState({});
  const handleClose = () => setShow(false);
  const inProcess = async (e) => {
    e.preventDefault();

    order.status = "PROCESSING";
    const { products, ...updatedOrder } = order;
    await API.graphql(graphqlOperation(updateOrder, { input: updatedOrder }));
    setShow(false);
  };
  const orderComplete = async (e) => {
    e.preventDefault();

    order.status = "COMPLETE";
    const { products, ...updatedOrder } = order;
    await API.graphql(graphqlOperation(updateOrder, { input: updatedOrder }));
    // await API.graphql(graphqlOperation)
    console.log(order);
    setShow(false);
  };
  const orderPending = async (e) => {
    e.preventDefault();
    order.status = "PENDING";
    const { products, ...updatedOrder } = order;

    await API.graphql(graphqlOperation(updateOrder, { input: updatedOrder }));

    console.log(order);
    setShow(false);
  };
  const handleShow = (props) => {
    console.log(props);
    const updatedAreas = [...orders];
    for (let i = 0; i < updatedAreas.length; i++) {
      if (props === updatedAreas.at(i).id) {
        setOrder(updatedAreas.at(i));
      }
    }

    setShow(true);
  };
  console.log(order);
  return (
    <div className="manger-container">
      <AmplifyAuthenticator>
        <section>
          <header className="form-header">
            <h3 className="management-header">CasesSite Management System</h3>
          </header>
        </section>
        <br />
        <div className="form-management-container">
          <table className="table table-striped">
            <thead>
              <tr>
                <td>Order ID</td>
                <td>Customer Name</td>
                <td>Status</td>
                <td>Operation</td>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                return (
                  <tr style={{ textAlign: "center" }} key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>

                    <td>{order.status}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleShow(order.id)}
                      >
                        Operate
                      </button>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Change Order Status</Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                          <Button
                            variant="primary"
                            onClick={(e) => orderPending(e)}
                          >
                            Order Pending
                          </Button>
                          <Button
                            variant="secondary"
                            onClick={(e) => inProcess(e)}
                          >
                            Order in Process
                          </Button>
                          <Button variant="primary" onClick={orderComplete}>
                            Order Complete
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </AmplifyAuthenticator>
    </div>
  );
};

export default ManagementSystem;
