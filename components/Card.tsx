import React from "react";

interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => (
  <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16, maxWidth: 300 }}>
    <img src={image} alt={title} style={{ width: "100%", borderRadius: 4 }} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Card;