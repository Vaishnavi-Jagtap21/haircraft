const Overview = () => {
  const stats = [
    { label: "Total Users", value: 245 },
    { label: "Appointments", value: 120 },
    { label: "Pending", value: 18 },
    { label: "Completed", value: 90 },
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-8">Dashboard Overview</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow"
          >
            <p className="text-gray-500">{s.label}</p>
            <h3 className="text-2xl font-bold">{s.value}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
