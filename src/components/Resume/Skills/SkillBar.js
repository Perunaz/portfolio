import React from 'react';
import PropTypes from 'prop-types';

const SkillBar = ({ data, categories }) => {
  const { category, competency, title } = data;

  const titleStyle = {
    background: categories
      .filter((cat) => category.includes(cat.name))
      .map((cat) => cat.color)[0],
  };

  const barStyle = {
    ...titleStyle,
    width: `${String(Math.min(100, Math.max((competency / 5.0) * 100.0, 0)))}%`,
  };

  return (
    <div>
      <div className="skillbar-title" style={{marginLeft: '11%'}}><span>{title}</span></div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <div className="skillbar clearfix">
          <div className="skillbar-bar" style={barStyle} />
          <div className="skill-bar-percent">{competency} / 5</div>
        </div>
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    competency: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

SkillBar.defaultProps = {
  categories: [],
};

export default SkillBar;
