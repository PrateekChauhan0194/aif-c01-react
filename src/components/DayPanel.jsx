import Section from './Section';

const sectionMatchesQuery = (section, query) => {
  if (!query || query.trim().length < 2) return true;
  const q = query.toLowerCase();

  if (section.title && section.title.toLowerCase().includes(q)) return true;

  const { content } = section;
  if (!content) return false;

  if (content.type === 'mono-block' && content.text) {
    return content.text.toLowerCase().includes(q);
  }

  if (content.type === 'table') {
    if (content.headers && content.headers.some(h => h.toLowerCase().includes(q))) return true;
    if (content.rows && content.rows.some(row =>
      Object.values(row).some(v => typeof v === 'string' && v.toLowerCase().includes(q))
    )) return true;
    if (content.footer && content.footer.toLowerCase().includes(q)) return true;
  }

  return false;
};

const DayPanel = ({ day, searchQuery }) => {
  if (!day) return null;

  const filteredSections = day.sections.filter(s => sectionMatchesQuery(s, searchQuery));

  return (
    <div className="day-panel active">
      <div className={`day-header ${day.colorClass}`}>
        <span className="day-number">{day.number}</span>
        <span className="day-title">{day.title}</span>
        <span className="weight-chip">{day.weight}</span>
      </div>
      <div className="sections">
        {filteredSections.length > 0 ? (
          filteredSections.map((section, index) => (
            <Section key={index} section={section} colorClass={day.colorClass} />
          ))
        ) : (
          <div style={{ padding: '2rem', color: 'var(--muted)', textAlign: 'center' }}>No matching sections found.</div>
        )}
      </div>
    </div>
  );
};

export default DayPanel;
