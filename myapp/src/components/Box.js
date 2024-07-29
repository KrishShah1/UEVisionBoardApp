import React from 'react'

export const Box = ({ title }) => (
  <div style={
    { border: '1px', 
      padding: '1rem',
      backgroundColor: '#CCCC00A0' }}>
    {title}
  </div>
)