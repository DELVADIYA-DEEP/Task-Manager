import React from 'react';
import PropTypes from 'prop-types';

const spinnerStyle = {
  display: 'inline-block',
  width: '48px',
  height: '48px',
  border: '5px solid #f3f3f3',
  borderTop: '5px solid',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
};

const textStyle = (color) => ({
  marginTop: '1rem',
  color,
  fontWeight: 500,
  fontSize: '1.1rem',
});

const Atom = ({ color = '#4ba7d1', size = 'large', text = '', textColor = '#54a2f8' }) => {
  const sizePx = size === 'large' ? 48 : size === 'small' ? 24 : 32;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 0' }}>
      <span
        style={{ ...spinnerStyle, borderTopColor: color, width: sizePx, height: sizePx, borderWidth: sizePx / 10 }}
      />
      {text && <span style={textStyle(textColor)}>{text}</span>}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

Atom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  text: PropTypes.string,
  textColor: PropTypes.string,
};

export default Atom;
