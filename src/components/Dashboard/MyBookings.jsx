import { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/appointments/user/1") // userId later dynamic
      .then((res) => setAppointments(res.data));
  }, []);

  return (
    <div className="space-y-4">
      {appointments.length === 0 ? (
        <p className="text-gray-500">No upcoming appointments</p>
      ) : (
        appointments.map((a) => (
          <div
            key={a.appointmentId}
            className="bg-white rounded-xl p-4 shadow"
          >
            <h3 className="font-semibold">{a.service.serviceName}</h3>
            <p className="text-sm text-gray-600">
              {a.appointmentDate} • {a.appointmentTime}
            </p>
            <span className="text-xs text-green-600 font-medium">
              {a.status}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default MyBookings;
