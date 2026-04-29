import { useState } from "react";
import Footer from "../components/Footer";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <div style={{ paddingTop: "70px", minHeight: "100vh" }}>
        {/* Header */}
        <div style={{ padding: "60px 20px 50px", textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px,5vw,56px)",
              color: "#ff8c42",
              fontStyle: "italic",
              marginBottom: "12px",
            }}
          >
            Contact Us
          </h1>
          <p style={{ color: "#666", fontFamily: "'Poppins', sans-serif", fontSize: "15px" }}>
            We'd love to hear from you
          </p>
        </div>

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 20px 100px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
          }}
        >
          {/* Info */}
          <div>
            <div
              className="orange-card"
              style={{ padding: "36px", marginBottom: "24px" }}
            >
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "22px",
                  color: "#ff8c42",
                  fontStyle: "italic",
                  marginBottom: "24px",
                }}
              >
                Visit Us
              </h2>

              {[
                { icon: "📍", text: "123 Ocean Drive, Atlantis, NY 11111" },
                { icon: "📞", text: "(777) 123-4567" },
                { icon: "📧", text: "info@theseafoodshack.com" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "16px",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    color: "#ccc",
                  }}
                >
                  <span style={{ fontSize: "18px", marginTop: "1px" }}>
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </div>
              ))}

              <div className="divider" />

              <h3
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "13px",
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
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                  }}
                >
                  <span style={{ color: "#777" }}>{h.day}</span>
                  <span style={{ color: "#ccc", fontWeight: 500 }}>
                    {h.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid rgba(255,140,66,0.2)",
                background: "#111",
                height: "220px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                color: "#555",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "14px",
              }}
            >
              <span style={{ fontSize: "40px" }}>📍</span>
              <span>123 Ocean Drive, Atlantis NY</span>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#ff8c42",
                  textDecoration: "none",
                  fontSize: "13px",
                  padding: "6px 16px",
                  border: "1px solid rgba(255,140,66,0.4)",
                  borderRadius: "6px",
                }}
              >
                Open in Maps →
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="orange-card" style={{ padding: "36px" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "22px",
                color: "#ff8c42",
                fontStyle: "italic",
                marginBottom: "28px",
              }}
            >
              Send a Message
            </h2>

            {sent ? (
              <div
                className="confirm-pop"
                style={{ textAlign: "center", padding: "40px 0" }}
              >
                <div style={{ fontSize: "56px", marginBottom: "16px" }}>✉️</div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "22px",
                    color: "#ff8c42",
                    fontStyle: "italic",
                    marginBottom: "10px",
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  style={{
                    color: "#888",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                  }}
                >
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-input"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  className="form-input"
                />
                <textarea
                  placeholder="Your message..."
                  className="form-input"
                  required
                  style={{ height: "130px", resize: "vertical" }}
                />
                <button type="submit" className="btn-primary" style={{ padding: "14px" }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
