import { useState } from "react";
import Hero from "./Hero";
import "./board-game-card.css";

interface BoardGameCardProps {
  backgroundImage: string;
  title: string;
  tags?: string[];
  description?: string;
}

export default function BoardGameCard({ backgroundImage, title, tags = [], description }: BoardGameCardProps) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="board-game-card">
      <div className="card-face" onClick={() => setShowDescription(!showDescription)}>
        <Hero background={backgroundImage} />
        <div className="card-content">
          <h3>{title}</h3>
          <div className="tags-container">
            {tags.map((tag) => (
              <div key={tag} className="label">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
      {showDescription && description && (
        <div className="card-description" onClick={() => setShowDescription(false)}>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}
