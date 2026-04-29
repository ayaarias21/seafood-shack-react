import { useState } from "react";
import Footer from "../components/Footer";

/* REAL IMAGE LIST FROM YOUR FOLDER */
const galleryItems = [
  { img: "/images/seafood-boil.jpg", label: "Seafood Boil" },
  { img: "/images/seafood-boil2.JPG", label: "Seafood Boil Feast" },
  { img: "/images/seafood-boil3.JPG", label: "Family Boil" },
  { img: "/images/seafood-boil4.JPG", label: "Spicy Boil" },
  { img: "/images/seafood-boil5.JPG", label: "Signature Boil" },

  { img: "/images/lobster.JPG", label: "Lobster" },
  { img: "/images/lobster-bisque.JPG", label: "Lobster Bisque" },
  { img: "/images/salmon.JPG", label: "Grilled Salmon" },
  { img: "/images/fried-fish.JPG", label: "Fried Fish" },
  { img: "/images/fried-fish2.JPG", label: "Crispy Fish Basket" },
  { img: "/images/calamari.JPG", label: "Calamari" },
  { img: "/images/mussels.JPG", label: "Mussels" },
  { img: "/images/clams.JPG", label: "Steamed Clams" },
  { img: "/images/clam-chowder.JPG", label: "Clam Chowder" },
  { img: "/images/po-boy.JPG", label: "Shrimp Po Boy" },

  { img: "/images/interior1.JPG", label: "Restaurant Interior" },
  { img: "/images/interior2.JPG", label: "Dining Area" },
  { img: "/images/interior3.JPG", label: "Bar Area" },
  { img: "/images/interior4.JPG", label: "Night Ambiance" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const open = (i) => setLightbox(i);
  const close = () => setLightbox(null);
  const prev = () =>
    setLightbox((i) => (i === 0 ? galleryItems.length - 1 : i - 1));
  const next = () =>
    setLightbox((i) => (i === galleryItems.length - 1 ? 0 : i + 1));

  return (
    <>
      <div style={{ paddingTop: "70px", minHeight: "100vh", background: "#050505" }}>
        {/* Header */}
        <div style={{ padding: "60px 20px 50px", textAlign: "center" }}>
          <h1 className="section-title">Gallery</h1>
          <p style={{ color: "#666" }}>
            Click any photo to view fullscreen
          </p>
        </div>

        {/* GRID */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 20px 100px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {galleryItems.map((item, i) => (
            <div
              key={i}
              onClick={() => open(i)}
              style={{
                height: "240px",
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: "14px",
                border: "1px solid rgba(255,140,66,0.2)",
              }}
            >
              <img
                src={item.img}
                alt={item.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "0.4s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.08)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div className="lightbox" onClick={close}>
          <img
            src={galleryItems[lightbox].img}
            alt=""
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              borderRadius: "16px",
              boxShadow: "0 0 80px rgba(255,140,66,0.4)",
            }}
          />

          <button onClick={(e)=>{e.stopPropagation();prev();}} className="lightbox-btn left">‹</button>
          <button onClick={(e)=>{e.stopPropagation();next();}} className="lightbox-btn right">›</button>
        </div>
      )}

      <Footer />
    </>
  );
}