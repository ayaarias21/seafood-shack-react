import Footer from "../components/Footer";

const sections = [
  {
    title: "Our Story",
    icon: "🦀",
    text: "The Seafood Shack was founded with one mission — to bring bold Caribbean and Southern coastal flavors to the freshest seafood. We set out to create a place where great food and great company come together naturally.",
  },
  {
    title: "The Cuisine",
    icon: "🔥",
    text: "Our menu celebrates seafood in its most exciting form. From signature seafood boils loaded with crab, shrimp, and lobster, to house-made sauces packed with flavor, every dish is cooked to order and crafted with care.",
  },
  {
    title: "The Experience",
    icon: "🍽️",
    text: "Dining at The Seafood Shack is about more than just a meal. It is about gathering around the table, sharing unforgettable food, and enjoying a lively atmosphere with friends and family.",
  },
  {
    title: "Join Us",
    icon: "🎉",
    text: "Whether you're visiting for a casual dinner, date night, or special celebration, we invite you to come hungry and experience the bold flavors of The Seafood Shack.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          minHeight: "55vh",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.75) 60%, rgba(10,10,10,1) 100%), linear-gradient(135deg, #1a0a00 0%, #0d0500 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 20px 80px",
        }}
      >
        <div className="page-enter">
          <div style={{ fontSize: "60px", marginBottom: "20px" }}>🦀</div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px,6vw,72px)",
              color: "#ff8c42",
              fontStyle: "italic",
              marginBottom: "16px",
              textShadow: "0 0 40px rgba(255,140,66,0.3)",
            }}
          >
            About Us
          </h1>
          <p
            style={{
              color: "#aaa",
              fontSize: "18px",
              fontFamily: "'Dancing Script', cursive",
              fontSize: "22px",
            }}
          >
            The story behind the shack
          </p>
        </div>
      </section>

      {/* Content */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "80px 20px 100px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: "30px",
          }}
        >
          {sections.map((sec, i) => (
            <div
              key={i}
              className="orange-card"
              style={{ padding: "36px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "18px",
                }}
              >
                <span style={{ fontSize: "32px" }}>{sec.icon}</span>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "22px",
                    color: "#ff8c42",
                    fontStyle: "italic",
                  }}
                >
                  {sec.title}
                </h2>
              </div>
              <p
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: "20px",
                  color: "#ccc",
                  lineHeight: 1.8,
                }}
              >
                {sec.text}
              </p>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="divider" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "20px",
            textAlign: "center",
          }}
        >
          {[
            { value: "2026", label: "Est. Year" },
            { value: "10+ Items", label: "Menu Items" },
            { value: "5★", label: "Avg Rating" },
            { value: "100%", label: "Fresh Daily" },
          ].map((stat, i) => (
            <div key={i}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "40px",
                  color: "#ff8c42",
                  fontWeight: 700,
                  marginBottom: "6px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: "#666",
                  fontSize: "13px",
                  fontFamily: "'Poppins', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
