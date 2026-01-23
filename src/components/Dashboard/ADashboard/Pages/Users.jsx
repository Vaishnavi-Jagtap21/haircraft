// import { useEffect, useState } from "react";
// import axios from "axios";

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     const res = await axios.get("http://localhost:8080/api/admin/users");
//     setUsers(res.data);
//   };

//   const toggleStatus = async (id, status) => {
//     await axios.put(
//       `http://localhost:8080/api/admin/users/${id}/status`,
//       { status }
//     );
//     fetchUsers();
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-6">Manage Users</h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {users.map((u) => (
//           <div
//             key={u.id}
//             className="bg-white rounded-2xl shadow p-6 space-y-4"
//           >
//             {/* PROFILE */}
//             <div className="flex items-center gap-4">
//               <img
//                 src={u.image || "https://i.pravatar.cc/100"}
//                 alt="user"
//                 className="w-16 h-16 rounded-full object-cover"
//               />
//               <div>
//                 <h3 className="font-semibold text-lg">{u.name}</h3>
//                 <p className="text-sm text-gray-500">{u.email}</p>
//                 <p className="text-sm text-gray-500">{u.phone}</p>
//               </div>
//             </div>

//             {/* STATUS */}
//             <span
//               className={`inline-block px-3 py-1 text-xs rounded-full font-medium
//               ${
//                 u.status === "ACTIVE"
//                   ? "bg-green-100 text-green-700"
//                   : "bg-red-100 text-red-700"
//               }`}
//             >
//               {u.status}
//             </span>

//             {/* BOOKING SUMMARY */}
//             <div className="grid grid-cols-3 text-center gap-2">
//               <div>
//                 <p className="font-semibold">{u.totalBookings}</p>
//                 <p className="text-xs text-gray-500">Total</p>
//               </div>
//               <div>
//                 <p className="font-semibold">{u.pendingBookings}</p>
//                 <p className="text-xs text-gray-500">Pending</p>
//               </div>
//               <div>
//                 <p className="font-semibold">{u.completedBookings}</p>
//                 <p className="text-xs text-gray-500">Completed</p>
//               </div>
//             </div>

//             {/* ACTIONS */}
//             <div className="flex justify-between items-center">
//               <button
//                 onClick={() => setSelectedUser(u)}
//                 className="text-sm text-blue-600 hover:underline"
//               >
//                 View History
//               </button>

//               {u.status === "ACTIVE" ? (
//                 <button
//                   onClick={() => toggleStatus(u.id, "BLOCKED")}
//                   className="text-sm text-red-600 hover:underline"
//                 >
//                   Block
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => toggleStatus(u.id, "ACTIVE")}
//                   className="text-sm text-green-600 hover:underline"
//                 >
//                   Unblock
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* USER HISTORY MODAL */}
//       {selectedUser && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
//           <div className="bg-white rounded-xl p-6 w-full max-w-lg">
//             <h3 className="text-lg font-semibold mb-4">
//               {selectedUser.name}'s Booking History
//             </h3>

//             {selectedUser.history.length === 0 ? (
//               <p className="text-gray-500">No bookings found</p>
//             ) : (
//               selectedUser.history.map((h) => (
//                 <div
//                   key={h.id}
//                   className="border-b py-2 text-sm flex justify-between"
//                 >
//                   <span>{h.serviceName}</span>
//                   <span className="text-gray-500">{h.status}</span>
//                 </div>
//               ))
//             )}

//             <button
//               onClick={() => setSelectedUser(null)}
//               className="mt-4 px-4 py-2 bg-black text-white rounded-lg"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Users;
import { useEffect, useState } from "react";

/* 🔹 DUMMY USER DATA (For Understanding) */
const dummyUsers = [
  {
    id: 101,
    name: "Vaishnavi Jagtap",
    email: "vaishnavi@gmail.com",
    phone: "9876543210",
    image: "https://i.pravatar.cc/150?img=5",
    status: "ACTIVE",
    totalBookings: 5,
    pendingBookings: 2,
    completedBookings: 3,
    history: [
      { id: 1, serviceName: "Hair Styling", status: "COMPLETED" },
      { id: 2, serviceName: "Bridal Makeup", status: "COMPLETED" },
      { id: 3, serviceName: "Hair Spa", status: "PENDING" },
    ],
  },
];

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  /* 🔹 LOAD USERS (Dummy for now) */
  useEffect(() => {
    setUsers(dummyUsers);
  }, []);

  /* 🔹 BLOCK / UNBLOCK USER */
  const toggleStatus = (id, status) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, status } : u
      )
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Manage Users</h2>

      {/* USER CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((u) => (
          <div
            key={u.id}
            className="bg-white rounded-2xl shadow p-6 space-y-4"
          >
            {/* PROFILE */}
            <div className="flex items-center gap-4">
              <img
                src={u.image}
                alt="user"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{u.name}</h3>
                <p className="text-sm text-gray-500">{u.email}</p>
                <p className="text-sm text-gray-500">{u.phone}</p>
              </div>
            </div>

            {/* STATUS */}
            <span
              className={`inline-block px-3 py-1 text-xs rounded-full font-medium
              ${
                u.status === "ACTIVE"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {u.status}
            </span>

            {/* BOOKING SUMMARY */}
            <div className="grid grid-cols-3 text-center gap-2">
              <div>
                <p className="font-semibold">{u.totalBookings}</p>
                <p className="text-xs text-gray-500">Total</p>
              </div>
              <div>
                <p className="font-semibold">{u.pendingBookings}</p>
                <p className="text-xs text-gray-500">Pending</p>
              </div>
              <div>
                <p className="font-semibold">{u.completedBookings}</p>
                <p className="text-xs text-gray-500">Completed</p>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => setSelectedUser(u)}
                className="text-sm text-blue-600 hover:underline"
              >
                View History
              </button>

              {u.status === "ACTIVE" ? (
                <button
                  onClick={() => toggleStatus(u.id, "BLOCKED")}
                  className="text-sm text-red-600 hover:underline"
                >
                  Block
                </button>
              ) : (
                <button
                  onClick={() => toggleStatus(u.id, "ACTIVE")}
                  className="text-sm text-green-600 hover:underline"
                >
                  Unblock
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* USER HISTORY MODAL */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg">
            <h3 className="text-lg font-semibold mb-4">
              {selectedUser.name}'s Booking History
            </h3>

            {selectedUser.history.length === 0 ? (
              <p className="text-gray-500">No bookings found</p>
            ) : (
              selectedUser.history.map((h) => (
                <div
                  key={h.id}
                  className="border-b py-2 text-sm flex justify-between"
                >
                  <span>{h.serviceName}</span>
                  <span
                    className={`font-medium ${
                      h.status === "COMPLETED"
                        ? "text-green-600"
                        : "text-amber-600"
                    }`}
                  >
                    {h.status}
                  </span>
                </div>
              ))
            )}

            <button
              onClick={() => setSelectedUser(null)}
              className="mt-6 px-4 py-2 bg-black text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;

