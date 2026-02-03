import React from "react";

function RoomList({ rooms }) {
  return (
    <div className="card animate-rotate-in">
      <h2>📋 All Rooms</h2>

      {rooms.length === 0 ? (
        <div className="empty-state animate-fade-in">
          <p>📭 No rooms added yet. Please add a room first.</p>
        </div>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Room No</th>
                <th>Capacity</th>
                <th>AC</th>
                <th>Washroom</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room, index) => (
                <tr key={room.roomNo} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                  <td><strong>{room.roomNo}</strong></td>
                  <td>👥 {room.capacity}</td>
                  <td style={{ color: room.hasAC ? "#16a34a" : "#dc2626", fontWeight: "600" }}>
                    {room.hasAC ? "✓ Yes" : "✗ No"}
                  </td>
                  <td style={{ color: room.hasAttachedWashroom ? "#16a34a" : "#dc2626", fontWeight: "600" }}>
                    {room.hasAttachedWashroom ? "✓ Yes" : "✗ No"}
                  </td>
                  <td>
                    <span
                      className={`badge ${room.isAllocated ? "badge-danger" : "badge-success"} ${room.isAllocated ? "" : "badge-pulse"}`}
                    >
                      {room.isAllocated ? "🔴 Allocated" : "🟢 Available"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default RoomList;