import React, { useState, useEffect } from 'react';
import UserContext from '../../contexts/userContext'; // Assuming your context is in a file named UserContext.js
import { getAuth } from 'firebase/auth'; // Import Firebase authentication

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(); // Initialize Firebase authentication

    // Add a listener to Firebase Authentication for changes in user authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // If a user is signed in, update the currentUser state
        setCurrentUser({
          uid: user.uid,
          email: user.email,
          // Add more user properties as needed
        });
      } else {
        // If no user is signed in, set currentUser to null
        setCurrentUser(null);
      }
    });

    // Make sure to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
