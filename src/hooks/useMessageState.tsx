import { useContext } from 'react';
import { MessageStateContext, MessageStateType } from '../context/MessageProvider';

export const useMessageState = () => useContext(MessageStateContext) as MessageStateType;
