type ForecastCard = {
  day: string;
  summary: string;
  temperature: string;
  wind: string;
};

const forecast: ForecastCard[] = [
  { day: "Lundi", summary: "Ensoleillé", temperature: "21°C", wind: "12 km/h" },
  { day: "Mardi", summary: "Éclaircies", temperature: "18°C", wind: "18 km/h" },
  { day: "Mercredi", summary: "Averses", temperature: "15°C", wind: "24 km/h" },
  { day: "Jeudi", summary: "Nuageux", temperature: "17°C", wind: "10 km/h" }
];

const alertSummary = {
  level: "Surveillance",
  message: "Rafales annoncées mercredi après-midi."
};

export default function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <div>
          <p className="kicker">Weather Station</p>
          <h1>Tableau météo local</h1>
          <p className="hero-copy">
            Une interface simple pour suivre la tendance sur quatre jours, utile
            comme support de démonstration pour les scénarios RepoOps.
          </p>
        </div>

        <div className="hero-side">
          <span className="hero-badge">Démo publique</span>
          <strong>Station de Lyon</strong>
          <span>Dernière mise à jour : 08:40</span>
        </div>
      </section>

      <section className="hero-side" aria-label="Alerte locale">
        <span className="hero-badge">{alertSummary.level}</span>
        <strong>{alertSummary.title}</strong>
        <span>{alertSummary.message}</span>
      </section>

      <section className="panel-grid">
        {forecast.map((card) => (
          <article key={card.day} className="forecast-card">
            <p className="forecast-day">{card.day}</p>
            <h2>{card.summary}</h2>
            <p className="forecast-temp">{card.temperature}</p>
            <p className="forecast-wind">Vent : {card.wind}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
