import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";
import { getMenuItems } from "../api/api";

function MenuCard({ item, onAdd }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd(item.name, item.price, {});
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <div className="orange-card" style={{ padding: 0, overflow: "hidden" }}>
      <img
        src={item.image}
        alt={item.name}
        style={{ width: "100%", height: 180, objectFit: "cover" }}
      />

      <div style={{ padding: 18 }}>
        <h3>{item.name}</h3>
        <p style={{ color: "#aaa", fontSize: 14 }}>{item.description}</p>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>${Number(item.price).toFixed(2)}</strong>
          <button className="btn-primary" onClick={handleAdd}>
            {added ? "✓ Added!" : "+ Add"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const { cart, addToCart, removeFromCart, total } = useCart();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function loadMenu() {
      const data = await getMenuItems();
      setMenuItems(data);
    }

    loadMenu();
  }, []);

  return (
    <>
      <div
        style={{
          paddingTop: 70,
          minHeight: "100vh",
          backgroundImage: "url('/images/restaurant-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ background: "rgba(0,0,0,0.85)", minHeight: "100vh" }}>
          <div style={{ maxWidth: 1200, margin: "auto", padding: 40 }}>
            <h1 className="section-title">Order Online</h1>

            <div className="menu-layout">
              <div className="menu-grid">
                {menuItems.map((item) => (
                  <MenuCard key={item._id} item={item} onAdd={addToCart} />
                ))}
              </div>

              <div className="orange-card cart-box">
                <h2>🛒 Cart</h2>

                {cart.length === 0 ? (
                  <p style={{ color: "#aaa" }}>Your cart is empty.</p>
                ) : (
                  cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <div>
                        <strong>{item.name}</strong>
                        <p>
                          ${Number(item.price).toFixed(2)} × {item.quantity || 1}
                        </p>
                      </div>

                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}

                <h3>Total: ${Number(total).toFixed(2)}</h3>

                <Link to="/checkout" className="btn-primary checkout-btn">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}