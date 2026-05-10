import { useState } from "react";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { createOrder } from "../api/api";

export default function Checkout() {
  const { cart, total, clearCart, removeFromCart } = useCart();
  const [complete, setComplete] = useState(false);

  const [form, setForm] = useState({
    customerName: "",
    customerEmail: "",
    orderType: "Pickup",
    address: "",
    apartment: "",
    city: "",
    zipCode: "",
    deliveryNote: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      customerName: form.customerName,
      customerEmail: form.customerEmail,
      orderType: form.orderType,
      address: form.address,
      apartment: form.apartment,
      city: form.city,
      zipCode: form.zipCode,
      deliveryNote: form.deliveryNote,
      items: cart,
      total: Number(total),
    };

    await createOrder(orderData);

    clearCart();
    setComplete(true);
  };

  return (
    <>
      <div className="checkout-page">
        <div className="checkout-overlay">
          <div className="checkout-wrapper">
            {complete ? (
              <div className="checkout-card">
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "70px", marginBottom: "20px" }}>🦞</div>
                  <h1 className="checkout-title">Order Confirmed!</h1>
                  <p style={{ color: "#aaa" }}>
                    Your seafood feast is being prepared 🧡
                  </p>
                </div>
              </div>
            ) : (
              <div className="checkout-layout">
                <div className="checkout-card">
                  <h1 className="checkout-title">Checkout</h1>

                  <form onSubmit={handleSubmit} className="checkout-form">
                    <input
                      className="form-input"
                      name="customerName"
                      placeholder="Full Name"
                      value={form.customerName}
                      onChange={handleChange}
                      required
                    />

                    <input
                      className="form-input"
                      name="customerEmail"
                      type="email"
                      placeholder="Email"
                      value={form.customerEmail}
                      onChange={handleChange}
                      required
                    />
                    <input 
                     className="form-input"
                      name="customerNumber"
                      placeholder="Phone Number"
                      value={form.customerNumber}
                      onChange={handleChange}
                      required
                    />

                    <select
                      className="form-input"
                      name="orderType"
                      value={form.orderType}
                      onChange={handleChange}
                    >
                      <option value="Pickup">Pickup</option>
                      <option value="Delivery">Delivery</option>
                      <option value="Pay at Restaurant">Pay at Restaurant</option>
                    </select>

                    {form.orderType === "Delivery" && (
                      <>
                        <input
                          className="form-input"
                          name="address"
                          placeholder="Street Address"
                          value={form.address}
                          onChange={handleChange}
                          required
                        />

                        <input
                          className="form-input"
                          name="apartment"
                          placeholder="Apartment / Unit Number (optional)"
                          value={form.apartment}
                          onChange={handleChange}
                        />

                        <input
                          className="form-input"
                          name="city"
                          placeholder="City"
                          value={form.city}
                          onChange={handleChange}
                          required
                        />

                        <input
                          className="form-input"
                          name="zipCode"
                          placeholder="Area Code / ZIP Code"
                          value={form.zipCode}
                          onChange={handleChange}
                          required
                        />

                        <textarea
                          className="form-input"
                          name="deliveryNote"
                          placeholder="Delivery note for driver, ex: side door, gate code, call when outside"
                          value={form.deliveryNote}
                          onChange={handleChange}
                          rows="4"
                        />
                      </>
                    )}

                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ padding: "16px", fontSize: "16px", marginTop: "10px" }}
                    >
                      Place Order
                    </button>
                  </form>
                </div>

                <div className="checkout-card">
                  <h2 style={{ color: "#ff8c42", marginBottom: "18px" }}>
                    Order Summary
                  </h2>

                  {cart.length === 0 ? (
                    <p style={{ color: "#aaa" }}>Your cart is empty.</p>
                  ) : (
                    cart.map((item) => (
                      <div className="summary-item" key={item.id}>
                        <div>
                          <span>
                            {item.name} × {item.quantity || 1}
                          </span>
                          <p style={{ color: "#aaa", margin: "6px 0 0" }}>
                            $
                            {(Number(item.price) * (item.quantity || 1)).toFixed(2)}
                          </p>
                        </div>

                        <button
                          type="button"
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    ))
                  )}

                  <h3 style={{ color: "white", marginTop: "20px" }}>
                    Total: ${Number(total).toFixed(2)}
                  </h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}