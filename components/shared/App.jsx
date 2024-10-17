"use client"

import React, { useState } from "react";

// Sample user data
const userData = [
  { id: 1, name: "John Doe", city: "New York", country: "USA" },
  { id: 2, name: "Jane Smith", city: "London", country: "UK" },
  { id: 3, name: "Mike Johnson", city: "Sydney", country: "Australia" },
  { id: 4, name: "Ana Garcia", city: "Madrid", country: "Spain" },
  { id: 5, name: "Ravi Kumar", city: "Bangalore", country: "India" },
  { id: 6, name: "Lara Croft", city: "Paris", country: "France" },
  { id: 7, name: "Tom Hanks", city: "Los Angeles", country: "USA" },
  { id: 8, name: "Emily Brown", city: "Toronto", country: "Canada" },
  { id: 9, name: "Carlos Ruiz", city: "Mexico City", country: "Mexico" },
  { id: 10, name: "Sophia Li", city: "Beijing", country: "China" }
];

// UserCard Component
const UserCard = ({ user }) => (
  <div style={styles.card}>
    <h3>{user.name}</h3>
    <p>{user.city}, {user.country}</p>
  </div>
);

// Main App Component
const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtering logic for users based on name or location
  const filteredUsers = userData.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1>User Directory</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name or location..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.searchBar}
      />

      {/* Display User Cards */}
      <div style={styles.cardContainer}>
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

// Basic Styles
const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  searchBar: {
    padding: "10px",
    width: "300px",
    marginBottom: "20px",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  }
};

export default App;
