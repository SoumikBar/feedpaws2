// src/components/VolunteerOfYear.jsx
import React from "react";
import "./VolunteerOfYear.css";

const defaultWinner = {
  name: "Aarti Sharma",
  photo: "/images/volunteer-of-year/aarti.jpg",
  year: 2025,  // FIXED YEAR
  bio: "Aarti led community feeding programs across 7 locations, recruited 120 volunteers, and introduced the nightly checklist which improved reliability by 40%.",
  achievements: [
    "Led 120 volunteers",
    "Introduced the nightly checklist",
    "Organized 24 weekend drives",
  ],
};

export default function VolunteerOfYear({ winner = defaultWinner, others = [] }) {
  return (
    <section className="voy-section" aria-labelledby="voy-heading">
      <div className="voy-container">

        {/* FORCE YEAR 2025 */}
        <h2 id="voy-heading" className="voy-title">
          Volunteer of the Year — 2025
        </h2>

        <div className="voy-main">
          <div className="voy-photo-wrap">
            <img
              src={winner.photo}
              alt={`Photo of ${winner.name}`}
              className="voy-photo"
              loading="lazy"
            />
          </div>

          <div className="voy-details">
            <h3 className="voy-name">{winner.name}</h3>
            <p className="voy-bio">{winner.bio}</p>

            {winner.achievements && (
              <ul className="voy-achievements" aria-label="Key achievements">
                {winner.achievements.map((a, i) => (
                  <li key={i} className="voy-achievement">• {a}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* past winners remain optional */}
        {others.length > 0 && (
          <div className="voy-others">
            <h4>Past Winners</h4>
            <div className="voy-others-grid">
              {others.map((o) => (
                <div key={o.name} className="voy-other-card">
                  <img src={o.photo} alt={o.name} loading="lazy" />
                  <div className="voy-other-meta">
                    <div className="voy-other-name">{o.name}</div>
                    <div className="voy-other-year">{o.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
