import React, { useState } from "react";

function SearchRooms({ rooms }) {
  const [minCapacity, setMinCapacity] = useState(0);
  const [needsAC, setNeedsAC] = useState(false);
  const [needsWashroom, setNeedsWashroom] = useState(false);

  const filteredRooms = rooms.filter((room) => {
    return (
      room.capacity >= minCapacity &&
      (!needsAC || room.hasAC) &&
      (!needsWashroom || room.hasAttachedWashroom) &&
      !room.isAllocated
    );
  });

  return (
    <div className="card animate-rotate-in">
      <h2>🔍 Search Available Rooms</h2>

      <div className="grid grid-2" style={{ marginBottom: "24px" }}>
        <div className="form-group">
          <label>Minimum Capacity</label>
          <input
            type="number"
            placeholder="Enter minimum capacity"
            value={minCapacity}
            onChange={(e) => setMinCapacity(Number(e.target.value))}
            min="0"
          />
        </div>

        <label className="checkbox-label" style={{ justifyContent: "flex-start", marginTop: "auto", marginBottom: "0" }}>
          <input
            type="checkbox"
            checked={needsAC}
            onChange={(e) => setNeedsAC(e.target.checked)}
          />
          <span>❄️ Needs AC</span>
        </label>

        <label className="checkbox-label" style={{ justifyContent: "flex-start", marginTop: "0" }}>
          <input
            type="checkbox"
            checked={needsWashroom}
            onChange={(e) => setNeedsWashroom(e.target.checked)}
          />
          <span>🚿 Needs Washroom</span>
        </label>
      </div>

      <div className="results-info animate-pulse">
        <p>Results: <span className="results-count">{filteredRooms.length}</span> room(s) found</p>
      </div>

      {filteredRooms.length === 0 ? (
        <div className="empty-state animate-fade-in">
          <p>📭 No available rooms match your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-2">
          {filteredRooms.map((room, index) => (
            <div
              key={room.roomNo}
              className="room-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="room-header">
                <h3>Room {room.roomNo}</h3>
                <span className="badge badge-success badge-pulse">Available</span>
              </div>
              <p><strong>👥 Capacity:</strong> {room.capacity} students</p>
              <p><strong>❄️ AC:</strong> {room.hasAC ? "✓ Yes" : "✗ No"}</p>
              <p><strong>🚿 Washroom:</strong> {room.hasAttachedWashroom ? "✓ Yes" : "✗ No"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchRooms;