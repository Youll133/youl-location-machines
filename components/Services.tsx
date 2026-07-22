export default function Services() {
  const services = [
    "🚜 Location d'engins",
    "👷 Chauffeur qualifié",
    "🔧 Maintenance",
    "🚚 Livraison sur chantier",
    "📞 Assistance 24h/24",
    "💰 Devis gratuit",
  ];

  return (
    <section className="bg-zinc-900 text-white py-24">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          Nos Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-2xl p-8 hover:bg-yellow-400 hover:text-black transition duration-300"
            >
              <h3 className="text-2xl font-bold">
                {service}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}