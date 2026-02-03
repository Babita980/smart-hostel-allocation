🏨 Smart Hostel Room Allocation System
📌 Overview
The Smart Hostel Room Allocation System is a web application designed to manage hostel rooms and automatically allocate them to students based on capacity and facility requirements.
This project demonstrates skills in data modeling, allocation algorithms, UI design, and deployment.

🚀 Features
Add Room: Add new hostel rooms with details (capacity, AC, washroom).

View All Rooms: Display a list of all available rooms.

Search Rooms: Filter rooms by:

Minimum required capacity

AC requirement

Attached washroom requirement

Allocate Room: Automatically allocate the smallest possible room that satisfies student needs.

If no suitable room exists → Displays “No room available”.

🛠️ Tech Stack
You can choose any stack, but here’s a suggested one:

Frontend: React.js  / Next.js

Backend: Node.js  / Express.js

Database: MongoDB / PostgreSQL

Deployment: Vercel / Netlify / Render

📊 Data Model
Each room contains:

roomNo → Unique room number

capacity → Maximum number of students

hasAC → Boolean (true/false)

hasAttachedWashroom → Boolean (true/false)

🎯 Allocation Logic
text
AllocateRoom(students, needsAC, needsWashroom):
1. Filter rooms that meet requirements (capacity, AC, washroom).
2. Select the smallest possible room that satisfies conditions.
3. If no room found → return "No room available".
🖥️ UI Screens
Add Room Form

Room Listing Screen

Search & Allocate Screen

Output Display Panel

📂 Project Structure
Code
├── src
│   ├── components   # UI Components
│   ├── pages        # Screens (Add, View, Search, Allocate)
│   ├── services     # Allocation logic & API calls
│   └── utils        # Helper functions
├── public           # Static assets
├── README.md
📦 Deployment
The project is deployed publicly and accessible via:
Live URL → [https://vercel.com/babita-mehtas-projects/smart-hostel-allocation]
GitHub Repo → [https://github.com/Babita980/smart-hostel-allocation.git]



🧑‍💻 Author
Developed by [Babita Mehta] as part of the Round-2 Assignment.
