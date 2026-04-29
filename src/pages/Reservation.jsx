import { useState } from "react";
import Footer from "../components/Footer";

export default function Reservation() {
  const [confirmed, setConfirmed] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    party: "",
    requests: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const times = [
    "12:00 PM","12:30 PM","1:00 PM","1:30 PM",
    "2:00 PM","5:00 PM","5:30 PM","6:00 PM",
    "6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM",
  ];

  return (
    <>
      {/* BACKGROUND IMAGE */}
      <div
        style={{
          paddingTop: "70px",
          minHeight: "100vh",
          backgroundImage: "url('/images/interior1.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* LIGHT OVERLAY */}
        <div
          style={{
            minHeight: "100vh",
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "60px 20px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "540px",
              background: "rgba(10,10,10,0.92)",
              border: "1px solid rgba(255,140,66,0.25)",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 0 40px rgba(255,140,66,0.15)",
            }}
          >
            {confirmed ? (
              <div style={{ textAlign: "center" }}>
                <h2 style={{ color: "#ff8c42", fontFamily: "'Playfair Display', serif" }}>
                  🎉 Reservation Confirmed!
                </h2>
                <p style={{ color: "#ccc" }}>
                  {form.name}, we emailed confirmation to {form.email}
                </p>
                <button className="btn-primary" onClick={()=>setConfirmed(false)}>
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:"flex",flexDirection:"column",gap:"14px" }}>
                <h1 style={{ textAlign:"center", color:"#ff8c42", fontFamily:"'Playfair Display', serif" }}>
                  Reserve Your Table
                </h1>

                <input className="form-input" placeholder="Full Name" required
                  onChange={(e)=>setForm({...form,name:e.target.value})} />

                <input className="form-input" type="email" placeholder="Email" required
                  onChange={(e)=>setForm({...form,email:e.target.value})} />

                <input className="form-input" type="date" required
                  onChange={(e)=>setForm({...form,date:e.target.value})} />

                <select className="form-input" required
                  onChange={(e)=>setForm({...form,time:e.target.value})}>
                  <option value="">Select Time</option>
                  {times.map(t => <option key={t}>{t}</option>)}
                </select>

                <select className="form-input" required
                  onChange={(e)=>setForm({...form,party:e.target.value})}>
                  <option value="">Party Size</option>
                  {[1,2,3,4,5,6,7,"8+"].map(n => <option key={n}>{n}</option>)}
                </select>

                <textarea className="form-input" placeholder="Special Requests"
                  onChange={(e)=>setForm({...form,requests:e.target.value})} />

                <button className="btn-primary">Book My Table</button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}