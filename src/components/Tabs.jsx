const Tabs = ({ activeTab, onTabSwitch }) => {
  const tabs = [
    { id: 'all', label: 'All Days', day: 'all' },
    { id: '1', label: 'Day 1 · AI/ML Fundamentals', day: '1' },
    { id: '2', label: 'Day 2 · Data & Evaluation', day: '2' },
    { id: '3', label: 'Day 3 · Generative AI', day: '3' },
    { id: '4', label: 'Day 4 · FM Applications', day: '4' },
    { id: '5', label: 'Day 5 · Advanced Bedrock', day: '5' },
    { id: '6', label: 'Day 6 · Responsible AI', day: '6' },
  ];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          data-day={tab.day}
          onClick={() => onTabSwitch(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
