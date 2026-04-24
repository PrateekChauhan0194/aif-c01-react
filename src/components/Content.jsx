import { notesData } from '../data/notesData';
import DayPanel from './DayPanel';
import AllDaysPanel from './AllDaysPanel';

const Content = ({ activeTab, searchQuery }) => {
  const highlightText = (text, query) => {
    if (!query || query.length < 2) return text;

    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="search-hl">{part}</mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="content">
      {activeTab === 'all' ? (
        <AllDaysPanel searchQuery={searchQuery} highlightText={highlightText} />
      ) : (
        <DayPanel
          day={notesData.days.find(d => d.id === activeTab)}
          searchQuery={searchQuery}
          highlightText={highlightText}
        />
      )}
    </div>
  );
};

export default Content;
