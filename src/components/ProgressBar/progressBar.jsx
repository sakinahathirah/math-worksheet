

const ProgressBar = ({ current, total }) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-fill" style={{width: `${progress}%`}}></div>
      <p className="progress-text">Question {current + 1} of {total}</p>
    </div>

  );
};

export default ProgressBar;
