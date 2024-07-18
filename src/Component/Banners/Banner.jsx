import React from 'react';
import './Banner.css';

const Banner = ({ title, subtitle, backgroundImage, link, linkText }) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="banner" style={bannerStyle}>
      <div className="banner-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {link && <a href={link}>{linkText}</a>}
      </div>
    </div>
  );
};

export default Banner;
