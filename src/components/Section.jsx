const Section = ({ section, colorClass }) => {
  const renderContent = (content) => {
    if (content.type === 'mono-block') {
      return (
        <div className={`mono-block ${content.fullWidth ? 'full-width' : ''}`}>
          {content.text}
        </div>
      );
    }

    if (content.type === 'table') {
      return (
        <>
          <table className="note-table">
            <thead>
              <tr>
                {content.headers.map((header, i) => (
                  <th key={i}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row, i) => (
                <tr key={i}>
                  {Object.entries(row).map(([key, value], j) => {
                    if (key === 'highlight') return null;
                    return (
                      <td key={j} className={row.highlight && j === 0 ? 'hl' : ''}>
                        {value}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          {content.footer && (
            <div className="note-val" style={{ marginTop: '8px', fontSize: '0.72rem', color: 'var(--muted)' }}>
              {content.footer}
            </div>
          )}
        </>
      );
    }

    return null;
  };

  return (
    <div className={`section ${section.fullWidth ? 'full-width' : ''}`} data-domain={section.domain}>
      <div className="section-header">
        <span className="section-dot" style={{ background: `var(--${colorClass})` }}></span>
        {section.title}
      </div>
      <div className="section-body">
        {renderContent(section.content)}
      </div>
    </div>
  );
};

export default Section;
