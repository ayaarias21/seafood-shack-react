import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";

const menuItems = [
  {
    name: "Seafood Boil",
    price: 35,
    img: "/images/seafood-boil.jpg",
    desc: "All you can eat seafood feast with shrimp, crab, and shellfish.",
    hasOptions: true,
    options: {
      protein: ["Snow Crab Legs", "Lobster", "Shrimp", "Mussels", "Clams"],
      sauce: ["Garlic Butter", "Cajun Sauce", "Lemon Pepper", "Combo Specialty"],
      spice: ["Mild", "Medium", "Spicy"],
      addon: ["No Add-on", "Potatoes", "Corn", "Sausage", "Broccoli"],
    },
  },
  { name: "Lobster Tail", price: 28, img: "/images/lobster.JPG", desc: "Grilled lobster tail with garlic butter." },
  { name: "Grilled Salmon", price: 22, img: "/images/salmon.JPG", desc: "Atlantic salmon with lemon herb butter." },
  { name: "Calamari", price: 10, img: "/images/calamari.JPG", desc: "Crispy fried calamari & marinara." },
  { name: "Mussels", price: 18, img: "/images/mussels.JPG", desc: "Mussels in garlic wine broth." },
  { name: "Fried Fish", price: 16, img: "/images/fried-fish.JPG", desc: "Golden crispy fried fish." },
  { name: "Steamed Clams", price: 17, img: "/images/clams.JPG", desc: "Clams in garlic butter broth." },
  { name: "Clam Chowder", price: 7, img: "/images/clam-chowder.JPG", desc: "Creamy New England chowder." },
  { name: "Lobster Bisque", price: 7, img: "/images/lobster-bisque.JPG", desc: "Rich creamy lobster soup." },
  { name: "Shrimp Po Boy", price: 15, img: "/images/po-boy.JPG", desc: "Crispy shrimp sandwich." },
];

function MenuCard({ item, onAdd }) {
  const [added, setAdded] = useState(false);
  const handleAdd = () => {
    onAdd(item.name, item.price, {});
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <div className="orange-card" style={{ padding: 0, overflow: "hidden" }}>
      {/* IMAGE */}
      <img
        src={item.img}
        alt={item.name}
        style={{ width: "100%", height: 180, objectFit: "cover" }}
      />

      <div style={{ padding: 18 }}>
        <h3>{item.name}</h3>
        <p style={{ color: "#aaa", fontSize: 14 }}>{item.desc}</p>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>${item.price}</strong>
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

            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 40 }}>
              
              {/* FOOD GRID */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>
                {menuItems.map(item => (
                  <MenuCard key={item.name} item={item} onAdd={addToCart}/>
                ))}
              </div>

              {/* CART */}
              <div className="orange-card" style={{ padding: 20 }}>
                <h2>🛒 Cart</h2>
                {cart.map(item => (
                  <div key={item.id}>
                    {item.name} — ${item.price}
                    <button onClick={() => removeFromCart(item.id)}>remove</button>
                  </div>
                ))}
                <h3>Total: ${total}</h3>
                <Link to="/checkout" className="btn-primary">Checkout</Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}