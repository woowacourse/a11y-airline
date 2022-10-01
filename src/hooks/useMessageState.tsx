import { useContext } from 'react';
import { MessageStateContext, MessageStateType } from '../Context/MessageProvider';

export const useMessageState = () => useContext(MessageStateContext) as MessageStateType;
