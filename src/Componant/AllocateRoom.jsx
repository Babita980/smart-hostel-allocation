import React, { useState } from "react";

function AllocateRoom({ rooms, setRooms }) {
  const [students, setStudents] = useState(0);
  const [needsAC, setNeedsAC] = useState(false);
  const [needsWashroom, setNeedsWashroom] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const allocateRoom = () => {
    if (students <= 0) {
      setMessage("Please enter a valid number of students");
      setMessageType("error");
      return;
    }

    const validRooms = rooms.filter(
      (room) =>
        !room.isAllocated &&
        room.capacity >= students &&
        (!needsAC || room.hasAC) &&
        (!needsWashroom || room.hasAttachedWashroom)
    );

    if (validRooms.length === 0) {
      setMessage("No room available matching your criteria");
      setMessageType("error");
      return;
    }

    const selectedRoom = validRooms.reduce((prev, curr) =>
      curr.capacity < prev.capacity ? curr : prev
    );

    const updatedRooms = rooms.map((room) =>
      room.roomNo === selectedRoom.roomNo
        ? { ...room, isAllocated: true }
        : room
    );

    setRooms(updatedRooms);
    setMessage(`✅ Room ${selectedRoom.roomNo} allocated successfully!`);
    setMessageType("success");
    setStudents(0);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="card animate-bounce-in">
      <h2>🏠 Allocate Room</h2>

      <div className="form-group">
        <label>Number of Students</label>
        <input
          type="number"
          placeholder="Enter number of students"
          value={students}
          onChange={(e) => setStudents(Number(e.target.value))}
          min="1"
        />
      </div>

      <div style={{ background: "#f3f4f6", padding: "16px", borderRadius: "8px", marginBottom: "16px" }}>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={needsAC}
            onChange={(e) => setNeedsAC(e.target.checked)}
          />
          <span>❄️ Needs AC</span>
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={needsWashroom}
            onChange={(e) => setNeedsWashroom(e.target.checked)}
          />
          <span>🚿 Needs Washroom</span>
        </label>
      </div>

      <button onClick={allocateRoom} className="btn-success">
        Allocate Room
      </button>

      <div className="message-container">
        {message && (
          <div className={messageType === "success" ? "success-msg animate-fade-in" : "error-msg animate-shake"}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default AllocateRoom;