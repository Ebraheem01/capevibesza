const Stats = () => {
  const stats = [
    { value: "100+", label: "Activities" },
    { value: "50+", label: "Locations" },
    { value: "4.8", label: "Rating" },
    { value: "1000+", label: "Reviews" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg text-center animate-fadeIn"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-3xl font-bold text-cape-blue mb-1">{stat.value}</div>
          <div className="text-cape-grey">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;