import React from 'react';
import './Body.css';

const Body: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};

export default Body;
