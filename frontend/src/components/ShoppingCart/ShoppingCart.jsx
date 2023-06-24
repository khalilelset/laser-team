import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./ShoppingCart.css";

const ShoppingCart = ({ show, onClose, products }) => {
  let totalPrice = 0;
  const [responseMsg, setResponseMsg] = useState("");

  const handleRemove = (productId) => {
    const id = productId.toString();
    const email = window.localStorage.getItem("email");
    const cleanedEmail = email.replace(/^"(.*)"$/, "$1");
    fetch(
      `http://localhost:4000/api/cart/removeProduct/${cleanedEmail}/${id}`,
      {
        method: "post",
      }
    )
      .then((response) => {
        const data = response.json();
        setResponseMsg(data.msg);
      })
      .catch((error) => {
        console.error("Error adding Id:", error);
      });
  };

  const handleTransaction = () => {
    const email = window.localStorage.getItem("email");
    const cleanedEmail = email.replace(/^"(.*)"$/, "$1");
    fetch(`http://localhost:4000/api/transaction/add/${cleanedEmail}`, {
      method: "post",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: {
      //   totalPrice: totalPrice,
      // },
    })
      .then((response) => {
        const data = response.json();
        console.log(data.msg);
      })
      .catch((error) => {
        console.error("Error adding Id:", error);
      });
  };

  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="container">
            <h1>Shopping Cart</h1>
            {responseMsg && <p>{responseMsg}</p>}
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => {
                  const subTotal =
                    product.product[0].price * product.numOfProduct;
                  totalPrice += subTotal;

                  return (
                    <tr class="product-row">
                      <th scope="row">#</th>
                      <td className="">
                        <span class="d-inline-block text-truncate">
                          {product.product[0].productTitle}
                        </span>
                      </td>
                      <td>${product.product[0].price}</td>
                      <td>
                        <input
                          type="number"
                          class="form-control "
                          value={product.numOfProduct}
                          min="1"
                        />
                      </td>
                      <td class="total">${subTotal}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm remove-button mb-4"
                          onClick={() => handleRemove(product.productId)}
                        >
                          -
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="4" class="text-right">
                    <strong>Total:</strong>
                  </td>
                  <td colspan="2" id="cart-total">
                    ${totalPrice}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleTransaction()}>
            Buy Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShoppingCart;
