import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="container">
      <div className="content text-center">
        <h1 className="text-4xl font-bold mb-6 text-dracula-purple">404 - Page Not Found</h1>
        <p className="text-xl mb-8">Sorry, the page you are looking for does not exist.</p>
        <Link 
          to="/" 
          className="inline-block bg-dracula-purple hover:bg-dracula-pink text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          <i className="fas fa-home mr-2"></i>
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;