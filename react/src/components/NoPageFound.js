import React from 'react';
import { Link } from 'react-router';

const NoPageFound = () => {
  return (
    <div>
      <Link to="/"> 
        <img className="404-image" src="./../resources/404_page_you_found.gif" />
      </Link>
    </div>
  );
};

export default NoPageFound;
