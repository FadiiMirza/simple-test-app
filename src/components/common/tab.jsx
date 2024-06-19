const Tab = ({ tabText, tabTarget, active }) => {
  return (
    <li className="nav-item">
      <button
        className={`nav-link ${active}`}
        data-bs-toggle="tab"
        data-bs-target={tabTarget}
      >
        {tabText}
      </button>
    </li>
  );
};

export default Tab;
