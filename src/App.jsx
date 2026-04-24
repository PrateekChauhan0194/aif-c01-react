import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Tabs from './components/Tabs';
import Content from './components/Content';

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabSwitch = (day) => {
    setActiveTab(day);
    setSearchQuery('');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
      <Tabs activeTab={activeTab} onTabSwitch={handleTabSwitch} />
      <Content activeTab={activeTab} searchQuery={searchQuery} />
    </div>
  );
}

export default App;
