import { notesData } from '../data/notesData';
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

const AllDaysPanel = ({ searchQuery }) => {
  return (
    <div className="day-panel active" id="panel-all">
      {notesData.days.map((day) => {
        const filteredSections = day.sections.filter(s => sectionMatchesQuery(s, searchQuery));
        if (filteredSections.length === 0) return null;
        return (
          <div key={day.id} className="all-day-block">
            <div className="all-day-title" style={{ color: `var(--${day.colorClass})` }}>
              {day.allDayTitle}
            </div>
            <div className="sections">
              {filteredSections.map((section, index) => (
                <Section key={index} section={section} colorClass={day.colorClass} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllDaysPanel;
