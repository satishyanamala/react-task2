import React from 'react';
import './Cards.css';

const TechnologyCard = ({ name, description, logoUrl }) => {
  return (
    <div className="technology-card">
      <img src={logoUrl} alt={`${name} logo`} className="technology-card-logo" />
      <h2 className="technology-card-name">{name}</h2>
      <p className="technology-card-description">{description}</p>
    </div>
  );
};

const Technology = () => {
  const technologies = [
    {
      name: 'React',
      description: 'A JavaScript library for building user interfaces.',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    {
      name: 'Node.js',
      description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    },
    {
      name: 'Python',
      description: 'A programming language that lets you work quickly and integrate systems more effectively.',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    },
  ];

  return (
    <div className="technology">
      <h1>Technology Cards</h1>
      <div className="technology-cards-container">
        {technologies.map((tech, index) => (
          <TechnologyCard
            key={index}
            name={tech.name}
            description={tech.description}
            logoUrl={tech.logoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Technology;
