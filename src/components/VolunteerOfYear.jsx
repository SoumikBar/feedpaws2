// src/components/VolunteerOfYear.jsx
import React from "react";
import "./VolunteerOfYear.css"; // add styling below

/**
 * Props:
 *  - winner: { name, photo, year, bio, achievements: [] }
 *  - others: [{ name, photo, year }]
 *
 * If you don't pass props, component will use the defaultWinner below.
 */

const defaultWinner = {
  name: "Aarti Sharma",
  photo: "/images/volunteer-of-year/aarti.jpg", // put image in public/images/volunteer-of-year/
  year: 2025,
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
        <h2 id="voy-heading" className="voy-title">Volunteer of the Year — {winner.year}</h2>

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

            <ul className="voy-achievements" aria-label="Key achievements">
              {winner.achievements.map((a, i) => (
                <li key={i} className="voy-achievement">• {a}</li>
              ))}
            </ul>

            <div className="voy-cta">
              <button className="voy-button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Nominate next year
              </button>
            </div>
          </div>
        </div>

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
