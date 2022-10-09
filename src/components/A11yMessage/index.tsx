import './A11yMessage.css';
import { useContext } from 'react';
import { messageContext } from '../../context/MessageContext';

const A11yMessage: React.FC = () => {
  const messageState = useContext(messageContext);

  return (
    <div role='status' aria-live='assertive' className='message'>
      {messageState?.message}
    </div>
  );
};

export default A11yMessage;
