import React from 'react';

interface LogoutProps {
  onLogout: () => void; // Callback function to be called when the user logs out
}

const Logout: React.FC<LogoutProps> = ({ onLogout }) => {
  const handleLogout = async () => {
    try {
      const response = await fetch('https://library-crud-sample.vercel.app/api/user/logout', {
        method: 'DELETE',
        // Add any required headers here
      });

      if (response.ok) {
        // Successful logout
        console.log('Logout successful');
        onLogout(); // Call the onLogout callback function
      } else {
        // Failed logout
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;