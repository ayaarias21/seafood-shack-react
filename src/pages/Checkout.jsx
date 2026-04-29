import { useState } from "react";
import Footer from "../components/Footer";

export default function Checkout() {
  const [complete, setComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setComplete(true);
  };

  return (
    <>
      <div
        style={{
          paddingTop: "70px",
          minHeight: "100vh",
          backgroundImage: "url('/images/interior1.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* dark overlay */}
        <div
          style={{
            minHeight: "100vh",
            background: "rgba(0,0,0,0.88)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "60px 20px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "520px",
              background: "rgba(10,10,10,0.95)",
              border: "1px solid rgba(255,140,66,0.25)",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 0 40px rgba(255,140,66,0.15)",
              backdropFilter: "blur(10px)",
            }}
          >
            {complete ? (
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "70px", marginBottom: "20px" }}>🦞</div>
                <h1
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#ff8c42",
                    fontStyle: "italic",
                    marginBottom: "12px",
                  }}
                >
                  Order Confirmed!
                </h1>
                <p style={{ color: "#aaa" }}>
                  Your seafood feast is being prepared 🧡
                </p>
              </div>
            ) : (
              <>
                <h1
                  style={{
                    textAlign: "center",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "38px",
                    color: "#ff8c42",
                    fontStyle: "italic",
                    marginBottom: "25px",
                  }}
                >
                  Checkout
                </h1>

                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: "14px" }}
                >
                  <input className="form-input" placeholder="Full Name" required />
                  <input className="form-input" placeholder="Email" required />
                  <input className="form-input" placeholder="Address" required />
                  <input className="form-input" placeholder="City" required />
                  <input className="form-input" placeholder="Card Number" required />
                  <input className="form-input" placeholder="Expiration Date" required />
                  <input className="form-input" placeholder="CVV" required />

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ padding: "16px", fontSize: "16px", marginTop: "10px" }}
                  >
                    Place Order
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
