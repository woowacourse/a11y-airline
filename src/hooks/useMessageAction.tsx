import { useContext } from 'react';

import { MessageActionContext, MessageActionType } from '../context/MessageProvider';

export const useMessageAction = () => useContext(MessageActionContext) as MessageActionType;
