import React, { useState, useEffect } from "react";
import AddRoomForm from "./Componant/AddRoomForm";
import RoomList from "./Componant/RoomList";
import SearchRooms from "./Componant/SearchRooms";
import AllocateRoom from "./Componant/AllocateRoom";
import "./styles.css";

function App() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const savedRooms = JSON.parse(localStorage.getItem("rooms")) || [];
    setRooms(savedRooms);
  }, []);

  useEffect(() => {
    localStorage.setItem("rooms", JSON.stringify(rooms));
  }, [rooms]);

  return (
    <div style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", minHeight: "100vh", paddingTop: "40px", paddingBottom: "40px" }}>
      <div className="container">
        <div className="section-title animate-slide-down">
          <h1>🏢 Smart Hostel Room Allocation System</h1>
          <p>Manage your hostel rooms efficiently</p>
        </div>

        <div className="grid grid-2">
          <div className="animate-slide-up" style={{ animationDelay: "0s" }}>
            <AddRoomForm rooms={rooms} setRooms={setRooms} />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <AllocateRoom rooms={rooms} setRooms={setRooms} />
          </div>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <SearchRooms rooms={rooms} />
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <RoomList rooms={rooms} />
        </div>
      </div>
    </div>
  );
}

export default App;