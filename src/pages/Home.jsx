import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          background:
  "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.65) 60%, rgba(10,10,10,1) 100%), url('/images/seafood-boil5.JPG') center/cover no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "100px 20px 60px",
        }}
      >
        <div className="page-enter" style={{ maxWidth: "800px" }}>
          <div
            className="float-anim"
            style={{ fontSize: "72px", marginBottom: "20px" }}
          >
            🦀
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(42px, 8vw, 88px)",
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: "24px",
              fontStyle: "italic",
            }}
          >
            <span style={{ color: "white" }}>The</span>{" "}
            <span
              style={{
                color: "#ff8c42",
                textShadow:
                  "0 0 30px rgba(255,140,66,0.5), 0 0 60px rgba(255,140,66,0.2)",
              }}
            >
              Seafood
            </span>
            <br />
            <span style={{ color: "white" }}>Shack</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 2.5vw, 20px)",
              color: "#ccc",
              marginBottom: "40px",
              lineHeight: 1.7,
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 300,
            }}
          >
            Fresh seafood meets bold Caribbean & Southern coastal flavors.
            <br />A dining experience like no other.
          </p>

          <div
            style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link to="/menu" className="btn-primary">
              Order Online
            </Link>
            <Link
              to="/reservation"
              style={{
                padding: "14px 36px",
                border: "2px solid rgba(255,140,66,0.6)",
                borderRadius: "8px",
                color: "#ff8c42",
                textDecoration: "none",
                fontWeight: 600,
                fontFamily: "'Poppins', sans-serif",
                fontSize: "15px",
                transition: "all 0.3s",
                background: "rgba(255,140,66,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,140,66,0.15)";
                e.currentTarget.style.borderColor = "#ff8c42";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,140,66,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,140,66,0.6)";
              }}
            >
              Reserve a Table
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            color: "#666",
            fontSize: "12px",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          <span>Scroll</span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, #666, transparent)",
              animation: "float 2s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section
        style={{
          background: "#0d0d0d",
          padding: "80px 20px",
          borderTop: "1px solid rgba(255,140,66,0.1)",
          borderBottom: "1px solid rgba(255,140,66,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
            textAlign: "center",
          }}
        >
          {[
            {
              icon: "🦞",
              title: "Fresh Daily",
              desc: "Sourced fresh every morning from local suppliers.",
            },
            {
              icon: "🔥",
              title: "Bold Flavors",
              desc: "Caribbean & Southern spices in every bite.",
            },
            {
              icon: "🍋",
              title: "Made to Order",
              desc: "Every dish crafted fresh when you order.",
            },
            {
              icon: "🍺",
              title: "Lively Atmosphere",
              desc: "Great food, great company, unforgettable vibes.",
            },
          ].map((feat, i) => (
            <div
              key={i}
              style={{
                padding: "30px 20px",
                borderRadius: "14px",
                background: "rgba(255,140,66,0.04)",
                border: "1px solid rgba(255,140,66,0.1)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,140,66,0.35)";
                e.currentTarget.style.background = "rgba(255,140,66,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,140,66,0.1)";
                e.currentTarget.style.background = "rgba(255,140,66,0.04)";
              }}
            >
              <div style={{ fontSize: "44px", marginBottom: "16px" }}>
                {feat.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px",
                  color: "#ff8c42",
                  marginBottom: "10px",
                  fontStyle: "italic",
                }}
              >
                {feat.title}
              </h3>
              <p
                style={{
                  color: "#888",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section style={{ padding: "100px 20px", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 className="section-title">Signature Dishes</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px",
            }}
          >
            {[
              {
                emoji: "🦐",
                name: "Seafood Boil",
                desc: "Shrimp, crab, lobster in our house sauce",
                price: "$35",
                tag: "Most Popular",
              },
              {
                emoji: "🦞",
                name: "Lobster Tail",
                desc: "Grilled with garlic butter & seasoned rice",
                price: "$28",
                tag: "Chef's Pick",
              },
              {
                emoji: "🐟",
                name: "Grilled Salmon",
                desc: "Atlantic salmon with lemon herb butter",
                price: "$22",
                tag: "",
              },
              {
                emoji: "🥣",
                name: "Lobster Bisque",
                desc: "Rich creamy soup finished with fresh cream",
                price: "$7",
                tag: "",
              },
            ].map((dish, i) => (
              <div
                key={i}
                className="orange-card"
                style={{ padding: "28px", position: "relative" }}
              >
                {dish.tag && (
                  <span
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      background: "rgba(255,140,66,0.15)",
                      border: "1px solid rgba(255,140,66,0.4)",
                      color: "#ff8c42",
                      fontSize: "11px",
                      fontWeight: 600,
                      padding: "3px 10px",
                      borderRadius: "20px",
                      fontFamily: "'Poppins', sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {dish.tag}
                  </span>
                )}
                <div style={{ fontSize: "40px", marginBottom: "14px" }}>
                  {dish.emoji}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "22px",
                    color: "white",
                    marginBottom: "8px",
                    fontStyle: "italic",
                  }}
                >
                  {dish.name}
                </h3>
                <p
                  style={{
                    color: "#888",
                    fontSize: "14px",
                    marginBottom: "16px",
                    lineHeight: 1.6,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {dish.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#ff8c42",
                      fontSize: "22px",
                      fontWeight: 700,
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {dish.price}
                  </span>
                  <Link
                    to="/menu"
                    style={{
                      color: "#ff8c42",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      padding: "6px 14px",
                      border: "1px solid rgba(255,140,66,0.4)",
                      borderRadius: "6px",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,140,66,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    Order →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Link to="/menu" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        style={{
          padding: "80px 20px",
          background:
            "linear-gradient(135deg, rgba(255,140,66,0.12) 0%, rgba(255,107,26,0.08) 100%)",
          borderTop: "1px solid rgba(255,140,66,0.15)",
          borderBottom: "1px solid rgba(255,140,66,0.15)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            color: "white",
            marginBottom: "16px",
            fontStyle: "italic",
          }}
        >
          Ready for an unforgettable meal?
        </h2>
        <p
          style={{
            color: "#888",
            marginBottom: "36px",
            fontSize: "16px",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Reserve your table or order online today.
        </p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link to="/reservation" className="btn-primary">
            Book a Table
          </Link>
          <Link to="/contact" style={{ color: "#ff8c42", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "15px" }}>
            Contact Us →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
