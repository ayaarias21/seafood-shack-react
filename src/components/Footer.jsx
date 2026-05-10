import { Link } from "react-router-dom";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { to: "/about", label: "About Us" },
    { to: "/menu", label: "Order Online" },
    { to: "/digital", label: "Digital Menu" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
    { to: "/reservation", label: "Make Reservation" },
  ];

  return (
    <footer className="main-footer">
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
          marginBottom: "40px",
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "20px",
              color: "#ff8c42",
              marginBottom: "14px",
              fontStyle: "italic",
            }}
          >
            🦀 The Seafood Shack
          </h3>

          <p style={{ color: "#888", lineHeight: 1.7, fontSize: "14px" }}>
            Bold Caribbean and Southern coastal flavors. Fresh seafood, great
            company.
          </p>
        </div>

        <div>
          <h3
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "#ff8c42",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "14px",
            }}
          >
            Explore
          </h3>

          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={scrollTop}
              style={{
                display: "block",
                color: "#777",
                textDecoration: "none",
                fontSize: "14px",
                marginBottom: "8px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ff8c42";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#777";
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <h3
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "#ff8c42",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "14px",
            }}
          >
            Hours
          </h3>

          {[
            { day: "Mon – Thu", hours: "12PM – 9PM" },
            { day: "Fri – Sat", hours: "12PM – 11PM" },
            { day: "Sunday", hours: "1PM – 8PM" },
          ].map((h) => (
            <div
              key={h.day}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
                fontSize: "14px",
              }}
            >
              <span style={{ color: "#888" }}>{h.day}</span>
              <span style={{ color: "#ccc", fontWeight: 500 }}>{h.hours}</span>
            </div>
          ))}
        </div>

        <div>
          <h3
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "#ff8c42",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "14px",
            }}
          >
            Contact
          </h3>

          <Link
            to="/contact"
            onClick={scrollTop}
            style={{
              display: "block",
              color: "#888",
              fontSize: "14px",
              marginBottom: "8px",
              textDecoration: "none",
            }}
          >
            📍 123 Ocean Drive, Atlantis, NY 11111
          </Link>

          <Link
            to="/contact"
            onClick={scrollTop}
            style={{
              display: "block",
              color: "#888",
              fontSize: "14px",
              marginBottom: "8px",
              textDecoration: "none",
            }}
          >
            📞 (777) 123-4567
          </Link>

          <Link
            to="/contact"
            onClick={scrollTop}
            style={{
              display: "block",
              color: "#888",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            📧 info@theseafoodshack.com
          </Link>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #1a1a1a",
          paddingTop: "24px",
          textAlign: "center",
          color: "#444",
          fontSize: "13px",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        © 2026 The Seafood Shack · All rights reserved
      </div>
    </footer>
  );
}