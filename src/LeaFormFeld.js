import React from 'react';

const LeaFormFeld = ({ label, value, onChange }) => (
    <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>{label}</label>
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{ padding: '5px', width: '100%' }}
        />
    </div>
);

export default LeaFormFeld;
