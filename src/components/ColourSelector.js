import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
<<<<<<< HEAD
    <button id={config.key} className={config.classname} onClick={() => selectNextBackground({background: background})}>
=======
    <button className={config.classname} onClick={() => selectNextBackground({background: background})}>
>>>>>>> f6a3245d5cd255190ff10ad19c782cd63cd469a3
      {config.label}
    </button>
  )
}
export default ColourSelector;
