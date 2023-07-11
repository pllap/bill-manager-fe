import React, { useState } from 'react';

const MenuItem = ({ name }) => {
  // available status: waiting, on-going, cooked, delivered
  // TODO: click to send current status to server, and update status by server response
  const [status, setStatus] = useState('waiting');
  return (
    <div key={name} className="card-text" onClick={handleClick}>
      {name} ({status})
    </div>
  );

  function handleClick() {
    if (status === 'waiting') {
      setStatus('on-going');
    } else if (status === 'on-going') {
      setStatus('cooked');
    } else if (status === 'cooked') {
      setStatus('delivered');
    }
  }
}

export default MenuItem;
