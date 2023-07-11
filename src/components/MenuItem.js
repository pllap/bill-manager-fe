import React, { useState } from 'react';
import moment from 'moment';

const MenuItem = ({ name }) => {
  // available status: waiting, on-going, cooked, delivered
  // TODO: click to send current status to server, and update status by server response
  const [status, setStatus] = useState('waiting');

  let holdTimer = null;
  let lastMouseDown = null;

  return (
    <div
      key={name}
      className="card-text"
      onMouseDown={
        () => {
          lastMouseDown = moment().valueOf();
          holdTimer = setTimeout(revertToPrevStatus, 500);
        }
      }
      onMouseUp={
        () => {
          clearTimeout(holdTimer);
          if (moment().valueOf() - lastMouseDown < 500) {
            proceedToNextStatus();
          }
        }
      }
    >
      {name} ({status})
    </div>
  );

  function proceedToNextStatus() {
    if (status === 'waiting') {
      setStatus('on-going');
    } else if (status === 'on-going') {
      setStatus('cooked');
    } else if (status === 'cooked') {
      setStatus('delivered');
    }
  }

  function revertToPrevStatus() {
    if (status === 'delivered') {
      setStatus('cooked');
    } else if (status === 'cooked') {
      setStatus('on-going');
    } else if (status === 'on-going') {
      setStatus('waiting');
    }
  }
}

export default MenuItem;
