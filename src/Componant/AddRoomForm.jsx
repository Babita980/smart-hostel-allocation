import React, { useState } from "react";

function AddRoomForm({ rooms, setRooms }) {
  const [roomNo, setRoomNo] = useState("");
  const [capacity, setCapacity] = useState("");
  const [hasAC, setHasAC] = useState(false);
  const [hasWashroom, setHasWashroom] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!roomNo.trim() || !capacity) {
      setError("All fields are required");
      return;
    }
    if (parseInt(capacity) <= 0) {
      setError("Capacity must be greater than 0");
      return;
    }
    if (rooms.some((room) => room.roomNo.toString() === roomNo.toString())) {
      setError("Room number must be unique");
      return;
    }

    const newRoom = {
      roomNo,
      capacity: parseInt(capacity),
      hasAC,
      hasAttachedWashroom: hasWashroom,
      isAllocated: false,
    };

    setRooms([...rooms, newRoom]);
    setSuccess(`✅ Room ${roomNo} added successfully!`);
    setRoomNo("");
    setCapacity("");
    setHasAC(false);
    setHasWashroom(false);
    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <div className="card animate-bounce-in">
      <h2>➕ Add Room</h2>

      {error && <div className="error-msg">{error}</div>}
      {success && <div className="success-msg">{success}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Room Number</label>
          <input
            type="text"
            placeholder="Enter room number (e.g., 101)"
            value={roomNo}
            onChange={(e) => setRoomNo(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Capacity</label>
          <input
            type="number"
            placeholder="Enter capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </div>

        <div style={{ background: "#f3f4f6", padding: "16px", borderRadius: "8px", marginBottom: "16px" }}>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={hasAC}
              onChange={(e) => setHasAC(e.target.checked)}
            />
            <span>❄️ Has AC</span>
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={hasWashroom}
              onChange={(e) => setHasWashroom(e.target.checked)}
            />
            <span>🚿 Attached Washroom</span>
          </label>
        </div>

        <button type="submit" className="btn-primary">
          Add Room
        </button>
      </form>
    </div>
  );
}

export default AddRoomForm;