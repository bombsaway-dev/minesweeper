import React from 'react';

export default function ResetButton({ onReset, iconSrc }) {
  if (iconSrc) {
    return (
      <img
        src={iconSrc}
        alt="Reset"
        className="reset-icon"
        onClick={onReset}
      />
    );
  }
  return (
    <button className="reset-button" onClick={onReset}>
      Reset
    </button>
  );
}
