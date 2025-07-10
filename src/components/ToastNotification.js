import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const toastStyle = {
  position: 'fixed',
  top: '1.5rem',
  right: '1.5rem',
  zIndex: 9999,
  minWidth: '220px',
  background: '#fff',
  color: '#d32f2f',
  borderRadius: '10px',
  padding: '1rem 1.5rem 1.5rem 1.5rem',
  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
  fontSize: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  opacity: 0.97,
  transition: 'opacity 0.3s',
  overflow: 'hidden',
  border: '1.5px solid #d32f2f',
};

const progressBarStyle = (progress) => ({
  position: 'absolute',
  left: 0,
  bottom: 0,
  height: '5px',
  width: progress + '%',
  background: '#d32f2f',
  borderRadius: '0 0 10px 10px',
  transition: 'width 0.2s linear',
});

function ToastNotification({ message, show, duration = 2000 }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (show) {
      setProgress(100);
      const interval = setInterval(() => {
        setProgress((prev) => (prev > 0 ? prev - 5 : 0));
      }, duration / 20);
      return () => clearInterval(interval);
    } else {
      setProgress(100);
    }
  }, [show, duration]);

  if (!show) return null;
  return (
    <div style={toastStyle}>
      <span style={{ color: '#d32f2f', fontSize: 22, display: 'flex', alignItems: 'center' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#d32f2f"/><text x="12" y="17" textAnchor="middle" fontSize="16" fill="#fff" fontFamily="Arial" fontWeight="bold" alignmentBaseline="middle" dominantBaseline="middle">!</text></svg>
      </span>
      <span>{message}</span>
      <div style={progressBarStyle(progress)} />
    </div>
  );
}

ToastNotification.propTypes = {
  message: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  duration: PropTypes.number,
};

export default ToastNotification;
