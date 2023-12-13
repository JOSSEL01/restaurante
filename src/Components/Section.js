// components/Section.js
import React from 'react';

const Section = ({ children }) => {
  return (
    <section>
      <div className="container">
        {children}
      </div>
    </section>
  );
}

export default Section;
