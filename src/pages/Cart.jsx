import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../features/cart/cartSlice";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      {/* Start Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Cart</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}

      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row mb-5">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.items.length === 0 ? (
                      <tr>
                        <td colSpan={6}>No Items in Cart</td>
                      </tr>
                    ) : (
                      cart.items.map((item) => (
                        <tr key={item.id}>
                          <td className="product-thumbnail">
                            <img
                              src={item.imgPath}
                              alt="Image"
                              className="img-fluid"
                            />
                          </td>
                          <td className="product-name">
                            <h2 className="h5 text-black">{item.title}</h2>
                          </td>
                          <td>${item.price}</td>
                          <td>
                            <div
                              className="input-group mb-3 d-flex align-items-center quantity-container"
                              style={{ maxWidth: 120 }}
                            >
                              <div className="input-group-prepend">
                                <button
                                  className="btn btn-outline-black decrease"
                                  type="button"
                                  onClick={() =>
                                    dispatch(decrementQuantity(item.id))
                                  }
                                >
                                  -
                                </button>
                              </div>
                              <input
                                type="text"
                                className="form-control text-center quantity-amount"
                                value={item.quantity}
                                readOnly
                                placeholder=""
                                aria-label="Example text with button addon"
                                aria-describedby="button-addon1"
                              />
                              <div className="input-group-append">
                                <button
                                  className="btn btn-outline-black increase"
                                  type="button"
                                  onClick={() =>
                                    dispatch(incrementQuantity(item.id))
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </td>
                          <td>
                            $
                            {(parseFloat(item.price) * item.quantity).toFixed(
                              2
                            )}
                          </td>
                          <td>
                            <button
                              className="btn btn-black btn-sm"
                              onClick={() => dispatch(removeItem(item.id))}
                            >
                              X
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-6 mb-3 mb-md-0">
                  <button className="btn btn-black btn-sm btn-block">
                    Update Cart
                  </button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-outline-black btn-sm btn-block">
                    Continue Shopping
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label className="text-black h4" htmlFor="coupon">
                    Coupon
                  </label>
                  <p>Enter your coupon code if you have one.</p>
                </div>
                <div className="col-md-8 mb-3 mb-md-0">
                  <input
                    type="text"
                    className="form-control py-3"
                    id="coupon"
                    placeholder="Coupon Code"
                  />
                </div>
                <div className="col-md-4">
                  <button className="btn btn-black">Apply Coupon</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">
                        Cart Totals
                      </h3>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <span className="text-black">Subtotal</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">
                        $
                        {cart.items
                          .reduce(
                            (totalAmount, item) =>
                              totalAmount +
                              parseFloat(item.price) * item.quantity,
                            0
                          )
                          .toFixed(2)}
                      </strong>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">
                        $
                        {cart.items
                          .reduce(
                            (totalAmount, item) =>
                              totalAmount +
                              parseFloat(item.price) * item.quantity,
                            0
                          )
                          .toFixed(2)}
                      </strong>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <button
                        className="btn btn-black btn-lg py-3 btn-block"
                        onClick={() => navigate("/chechout")}
                      >
                        Proceed To Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
