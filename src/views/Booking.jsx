// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import Navbar from "../components/Navbar";

// const Booking = () => {
//   const { state } = useLocation();

//   // 🔹 Form state
//   const [service, setService] = useState("");

//   // 🔹 Auto-fill service when coming from Explore
//   useEffect(() => {
//     if (state?.service) {
//       setService(state.service);
//     }
//   }, [state]);

//   return (
//     <div className="min-h-screen bg-[#fffaf4] pt-28 px-6">
      
//       {/* Navbar */}
//       <Navbar />

//       {/* Heading */}
//       <div className="text-center mb-12 mt-10">
//         <h1 className="text-4xl font-playfair tracking-wide mb-3">
//           Book Your Appointment
//         </h1>
//         <p className="text-gray-600">
//           Choose your service and preferred time
//         </p>

//         {/* 🔹 Show selected service (optional UX) */}
//         {state?.service && (
//           <p className="mt-2 text-sm text-gray-500">
//             Selected Service: <b>{state.service}</b> ({state.price})
//           </p>
//         )}
//       </div>

//       {/* Booking Form */}
//       <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10"> 
//         <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

//           {/* Name
//           <div>
//             <label className="block mb-2 text-gray-700">Full Name</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black"
//             />
//           </div> */}

//           {/* Email */}
//           {/* <div>
//             <label className="block mb-2 text-gray-700">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black"
//             />
//           </div> */} 
//           {/* } */}

//           {/* Service */}
//           <div>
//             <label className="block mb-2 text-gray-700">Service</label>
//             <select
//               value={service}
//               onChange={(e) => setService(e.target.value)}
//               className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black"
//             >
//               <option value="">Select Service</option>
//               <option>Hair Styling</option>
//               <option>Bridal Makeup</option>
//               <option>Hair Coloring</option>
//               <option>Spa & Care</option>
//             </select>
//           </div>

//           {/* Date */}
//           <div>
//             <label className="block mb-2 text-gray-700">Date</label>
//             <input
//               type="date"
//               className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black"
//             />
//           </div>

//           {/* Time */}
//           <div>
//             <label className="block mb-2 text-gray-700">Time</label>
//             <input
//               type="time"
//               className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block mb-2 text-gray-700">Phone</label>
//             <input
//               type="tel"
//               placeholder="Enter phone number"
//               className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black"
//             />
//           </div>

//           {/* Message */}
//           <div className="md:col-span-2">
//             <label className="block mb-2 text-gray-700">Message</label>
//             <textarea
//               rows="4"
//               placeholder="Any special request..."
//               className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black"
//             />
//           </div>

//           {/* Button */}
//           <div className="md:col-span-2 text-center mt-6">
//             <button
//               type="submit"
//               className="bg-black text-white px-10 py-3 rounded-full hover:bg-gray-800 transition"
//             >
//               Confirm Booking
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default Booking;


import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

const Booking = () => {
  const { state } = useLocation();

  // 🔹 Form states
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Auto-fill service
  useEffect(() => {
    if (state?.service) {
      setService(state.service);
    }
  }, [state]);

  // ✅ SUBMIT HANDLER (ADD HERE)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:8080/api/appointments/book", {
        appointmentDate: date,          // yyyy-mm-dd
        appointmentTime: time,          // HH:mm
        service: { serviceId: 1 },      // TEMP: replace later
        user: { userId: 1 },            // TEMP: logged-in user
      });

      alert("✅ Booking Successful");
      setDate("");
      setTime("");
      setPhone("");
      setMessage("");
    } catch (err) {
      console.error(err);
      alert("❌ Booking Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffaf4] pt-28 px-6">
      <Navbar />

      {/* Heading */}
      <div className="text-center mb-12 mt-10">
        <h1 className="text-4xl font-playfair mb-3">
          Book Your Appointment
        </h1>
        <p className="text-gray-600">
          Choose your service and preferred time
        </p>

        {state?.service && (
          <p className="mt-2 text-sm text-gray-500">
            Selected Service: <b>{state.service}</b>
          </p>
        )}
      </div>

      {/* FORM */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10">
        {/* 🔴 ADD onSubmit HERE */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Service */}
          <div>
            <label className="block mb-2 text-gray-700">Service</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full border rounded-xl px-4 py-3"
              required
            >
              <option value="">Select Service</option>
              <option>Hair Styling</option>
              <option>Bridal Makeup</option>
              <option>Hair Coloring</option>
              <option>Spa & Care</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block mb-2 text-gray-700">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border rounded-xl px-4 py-3"
              required
            />
          </div>

          {/* Time */}
          <div>
            <label className="block mb-2 text-gray-700">Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border rounded-xl px-4 py-3"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-gray-700">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-gray-700">Message</label>
            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border rounded-xl px-4 py-3"
              placeholder="Any special request..."
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 text-center mt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-10 py-3 rounded-full hover:bg-gray-800"
            >
              {loading ? "Booking..." : "Confirm Booking"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;

