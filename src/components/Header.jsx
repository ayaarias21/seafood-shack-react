import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/digital", label: "Digital Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
  { to: "/reservation", label: "Reservation" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();
  const location = useLocation();

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 998,
          background: "rgba(5,5,5,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,140,66,0.25)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 28px",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "22px",
            fontWeight: 700,
            color: "#ff8c42",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontStyle: "italic",
          }}
        >
          <span className="float-anim" style={{ fontSize: "26px" }}>🦀</span>
          <span>The Seafood Shack</span>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            gap: "6px",
            alignItems: "center",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                padding: "7px 14px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "13.5px",
                fontWeight: 500,
                color: location.pathname === link.to ? "#ff8c42" : "#ccc",
                background:
                  location.pathname === link.to
                    ? "rgba(255,140,66,0.1)"
                    : "transparent",
                transition: "all 0.2s",
                fontFamily: "'Poppins', sans-serif",
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== link.to) {
                  e.target.style.color = "#ff8c42";
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== link.to) {
                  e.target.style.color = "#ccc";
                }
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/checkout"
            style={{
              position: "relative",
              marginLeft: "8px",
              padding: "8px 18px",
              background: "rgba(255,140,66,0.15)",
              border: "1px solid rgba(255,140,66,0.4)",
              borderRadius: "8px",
              color: "#ff8c42",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              transition: "all 0.25s",
            }}
          >
            🛒
            {cart.length > 0 && (
              <span className="cart-badge">{cart.length}</span>
            )}
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(true)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "28px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "#ff8c42",
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "white",
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              display: "block",
              width: "18px",
              height: "2px",
              background: "#ff8c42",
              borderRadius: "2px",
            }}
          />
        </button>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div className="nav-overlay" onClick={() => setOpen(false)} />
      )}

      {/* Side nav */}
      <nav className={`side-nav ${open ? "open" : ""}`}>
        <button
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "none",
            border: "none",
            color: "#666",
            fontSize: "26px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        <div
          style={{
            padding: "10px 0",
            fontFamily: "'Playfair Display', serif",
            fontSize: "18px",
            color: "#ff8c42",
            fontStyle: "italic",
            paddingLeft: "24px",
            marginBottom: "20px",
          }}
        >
          🦀 Navigate
        </div>

        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              padding: "16px 28px",
              color: location.pathname === link.to ? "#ff8c42" : "#ddd",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: location.pathname === link.to ? 600 : 400,
              borderBottom: "1px solid #1a1a1a",
              borderLeft:
                location.pathname === link.to
                  ? "3px solid #ff8c42"
                  : "3px solid transparent",
              transition: "all 0.2s",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {link.label}
          </Link>
        ))}

        <Link
          to="/checkout"
          onClick={() => setOpen(false)}
          style={{
            display: "block",
            margin: "20px 24px",
            padding: "14px",
            background: "linear-gradient(135deg,#ff8c42,#ff6b1a)",
            borderRadius: "8px",
            color: "#000",
            textAlign: "center",
            fontWeight: 700,
            textDecoration: "none",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          🛒 Cart ({cart.length})
        </Link>
      </nav>
    </>
  );
}
