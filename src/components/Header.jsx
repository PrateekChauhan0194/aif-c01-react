import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src="/aws-logo.png" alt="AIF-C01 Logo" className="logo" height={50} />
        <div>
          <h1>AIF-C01 Quick Revision Notes</h1>
          <p>AWS Certified AI Practitioner · 7-day study sprint · Days 1–6</p>
        </div>
      </div>
      <div className="header-right">
        <ThemeToggle />
        <div className="exam-badge">65 questions · 90 min · ~720/1000 to pass</div>
      </div>
    </div>
  );
};

export default Header;
