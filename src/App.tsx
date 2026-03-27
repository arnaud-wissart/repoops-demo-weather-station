type ForecastCard = {
  day: string;
  summary: string;
  temperature: string;
  wind: string;
};

type TrendPoint = {
  hour: string;
  value: string;
};

const forecast: ForecastCard[] = [
  { day: "Lundi", summary: "Ensoleillé", temperature: "21°C", wind: "12 km/h" },
  { day: "Mardi", summary: "Éclaircies", temperature: "18°C", wind: "18 km/h" },
  { day: "Mercredi", summary: "Averses", temperature: "15°C", wind: "24 km/h" },
  { day: "Jeudi", summary: "Nuageux", temperature: "17°C", wind: "10 km/h" }
];

const trend: TrendPoint[] = [
  { hour: "06h", value: "11°C" },
  { hour: "09h", value: "14°C" },
  { hour: "12h", value: "18°C" },
  { hour: "15h", value: "20°C" },
  { hour: "18h", value: "17°C" }
];

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

      <section className="trend-panel">
        <div className="trend-header">
          <div>
            <p className="kicker">Tendance horaire</p>
            <h2>Variation de température sur la journée</h2>
          </div>
          <span className="hero-badge">Prévision locale</span>
        </div>

        <div className="trend-grid">
          {trend.map((point) => (
            <article key={point.hour} className="trend-card">
              <span>{point.hour}</span>
              <strong>{point.value}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
