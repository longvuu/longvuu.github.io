import React, { useState } from 'react';

const Private: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const correctPassword = "2972009"; // Your password from the HTML version

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="private-content">
        <h1>Private Page</h1>
        {!isAuthenticated ? (
          <div id="passwordSection">
            <form id="passwordForm" onSubmit={handleSubmit}>
              <input 
                type="password" 
                id="password" 
                placeholder="Enter password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Unlock</button>
            </form>
          </div>
        ) : (
          <div id="dataSection">
            <form id="dataForm">
              <input type="file" id="fileInput" multiple />
              <textarea id="fileCaption" rows={3} placeholder="Add a caption for this upload (optional)"></textarea>
              <select id="folderSelect">
                <option value="root">Root</option>
              </select>
              <button type="submit">Upload Files</button>
            </form>
            <button id="newFolderBtn">New Folder</button>
            <button id="importGooglePhotos">Import from Google Photos</button>
            <button id="importOneDrive">Import from OneDrive</button>
            <div id="currentPath"></div>
            <div id="savedFiles"></div>
            <div id="pagination"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Private;