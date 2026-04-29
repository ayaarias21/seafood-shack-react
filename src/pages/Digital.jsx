import Footer from "../components/Footer";

const dishes = [
  { name: "Seafood Boil", price: "$35", desc: "Shrimp, crab, corn & potatoes in house sauce.", img: "/images/seafood-boil.jpg" },
  { name: "Lobster Tail", price: "$28", desc: "Fresh lobster grilled in garlic butter.", img: "/images/lobster.JPG" },
  { name: "Grilled Salmon", price: "$22", desc: "Atlantic salmon with lemon herb butter.", img: "/images/salmon.JPG" },
  { name: "Calamari", price: "$10", desc: "Crispy fried calamari & marinara.", img: "/images/calamari.JPG" },
  { name: "Mussels", price: "$18", desc: "Steamed mussels in white wine garlic broth.", img: "/images/mussels.JPG" },
  { name: "Fried Fish", price: "$16", desc: "Golden crispy fried fish & tartar sauce.", img: "/images/fried-fish.JPG" },
  { name: "Steamed Clams", price: "$17", desc: "Clams steamed in garlic butter.", img: "/images/clams.JPG" },
  { name: "Clam Chowder", price: "$7", desc: "Creamy New England chowder.", img: "/images/clam-chowder.JPG" },
  { name: "Lobster Bisque", price: "$7", desc: "Rich creamy lobster soup.", img: "/images/lobster-bisque.JPG" },
  { name: "Shrimp Po Boy", price: "$15", desc: "Crispy shrimp sandwich.", img: "/images/po-boy.JPG" },
];

export default function Digital() {
  return (
    <>
      <div style={{ paddingTop: "70px", minHeight: "100vh", background: "#0a0a0a" }}>
        
        {/* Header */}
        <div
          style={{
            padding: "60px 20px 20px",
            textAlign: "center",
            background: "linear-gradient(to bottom, rgba(255,140,66,0.06) 0%, transparent 100%)",
            borderBottom: "1px solid rgba(255,140,66,0.1)",
            marginBottom: "60px",
          }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px,5vw,56px)",
              color: "#ff8c42",
              fontStyle: "italic",
              marginBottom: "12px",
            }}
          >
            Digital Menu
          </h1>

          <p style={{ color: "#777", fontFamily: "'Poppins', sans-serif", fontSize: "15px" }}>
            Hover over any card to see details & pricing
          </p>
        </div>

        {/* GRID */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px 100px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "36px",
          }}
        >
          {dishes.map((dish, i) => (
            <div key={i} className="food-card">
              <div className="food-card-inner">

                {/* FRONT */}
                <div className="food-front">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      borderBottom: "1px solid rgba(255,140,66,0.1)",
                    }}
                  />

                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "18px",
                      color: "#ff8c42",
                      fontStyle: "italic",
                      padding: "14px",
                    }}
                  >
                    {dish.name}
                  </h3>
                </div>

                {/* BACK */}
                <div className="food-back">
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "20px",
                      color: "#ff8c42",
                      fontStyle: "italic",
                      marginBottom: "12px",
                    }}
                  >
                    {dish.name}
                  </h3>

                  <p
                    style={{
                      color: "#aaa",
                      fontSize: "14px",
                      lineHeight: 1.7,
                      marginBottom: "18px",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {dish.desc}
                  </p>

                  <span
                    style={{
                      fontSize: "28px",
                      color: "#ff8c42",
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                    }}
                  >
                    {dish.price}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}