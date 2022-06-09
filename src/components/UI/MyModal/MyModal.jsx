import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {
  const rootClasses = [cl.myModal];
  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    // zadaem 2 classa avec array
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}> 
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>   
    </div>
      
  );
};

export default MyModal;