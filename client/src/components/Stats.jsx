function Stats() {
  const stats = [
    { number: "105", label: "Students" },
    { number: "20", label: "Teachers" },
    { number: "Nursery–5", label: "Classes" },
    { number: "2002", label: "Established" }
  ];

  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.number}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;