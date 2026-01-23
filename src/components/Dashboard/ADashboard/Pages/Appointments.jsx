const Appointments = () => {
  const appointments = [
    { id: 1, user: "Sarthak", service: "Hair Styling", status: "PENDING" },
    { id: 2, user: "Anita", service: "Bridal Makeup", status: "CONFIRMED" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Appointments</h2>

      <table className="w-full bg-white rounded-xl shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">User</th>
            <th className="p-3 text-left">Service</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((a) => (
            <tr key={a.id} className="border-t">
              <td className="p-3">{a.user}</td>
              <td className="p-3">{a.service}</td>
              <td className="p-3">{a.status}</td>
              <td className="p-3 space-x-2">
                <button className="px-3 py-1 bg-green-500 text-white rounded">
                  Confirm
                </button>
                <button className="px-3 py-1 bg-red-500 text-white rounded">
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
