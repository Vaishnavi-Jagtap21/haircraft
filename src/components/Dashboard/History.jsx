import { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/appointments/user/1?status=COMPLETED")
      .then((res) => setHistory(res.data));
  }, []);

  return (
    <div className="space-y-4">
      {history.length === 0 ? (
        <p className="text-gray-500">No service history found</p>
      ) : (
        history.map((a) => (
          <div
            key={a.appointmentId}
            className="bg-gray-100 rounded-xl p-4"
          >
            <h3 className="font-semibold">{a.service.serviceName}</h3>
            <p className="text-sm text-gray-600">
              {a.appointmentDate}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default History;
