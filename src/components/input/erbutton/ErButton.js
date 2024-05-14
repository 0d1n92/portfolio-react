
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap';
import './erbutton.scss'


export const ErButton = ( {title, icon = false, type="primary", action, size="lg" } ) => {

  const [classBtn, setClassBtn] = useState('erbtn-primary');
  useEffect ( () => {
    switch (type) {
			case 'secondary':
				  setClassBtn('erbtn-secondary');
        break;
			default:
				setClassBtn('erbtn-primary');
        break;
		}
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ,[]);
  return (
  <Button  size='sm' className={classBtn} href={action} >
    {title}
    {icon?
      <FontAwesomeIcon className="ericon-btn" icon={icon} /> : null
    }
  </Button>
  );
}