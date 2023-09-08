import React from 'react';
import firebase from 'firebase/compat/app';

const Profile = ({ user }) => {
  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // <div>
    //   <h2>Profile</h2>
    //   <img src={user.photoURL} alt="Profileimg" />
      
    //   <p>{user.email}</p>
    //   <h3>{user.bio}</h3>
    //   <button onClick={handleSignOut}>Sign Out</button>
    // </div>
    <>
    

<div class="w-full max-w-sm mx-auto mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg text-center" src={user.photoURL}  alt="img"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.bio}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700" onClick={handleSignOut}>Sign out</a>
        </div>
    </div>
</div>

</>
  );
};

export default Profile;