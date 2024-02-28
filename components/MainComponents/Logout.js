"use client"
import React, { useState } from 'react';
import ApiClient from '../../utils/ApiClient';

const Logout = () => {
    // new instance of ApiClient
    const apiClient = new ApiClient();
    
    const handleLogout = async (e) => {
      
      console.log("hello from handleLogout")
      e.preventDefault();
      try {
        const response = await apiClient.logout();
        console.log(response);
        window.location.reload(); // Refresh the page after successful logout
  
        
        // Handle response from server
      } catch (error) {
        console.error('Logout failed:', error);
        // Display error messages to the user
      }
    }; 
    return (
    <button className="text-white  font-italic bg-orange-500 w-fit font-bold px-2 rounded" onClick={handleLogout}>Logout</button>        
    )

}

export default Logout;