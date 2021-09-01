import React from 'react';
import styles from './BackButton.module.css';
import { useHistory } from 'react-router-dom';


const BackButton = (props) => { 
  
  const history = useHistory();
  const goToPreviousPage = function() { history.goBack() };

  return (
    
    <div className = { styles.backButton } onClick = { goToPreviousPage }>Back</div>
    
  )
};

export default BackButton;
