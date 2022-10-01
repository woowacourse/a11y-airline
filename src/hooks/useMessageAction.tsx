import { useContext } from 'react';
import { MessageActionContext, MessageActionType } from '../Context/MessageProvider';

export const useMessageAction = () => useContext(MessageActionContext) as MessageActionType;
