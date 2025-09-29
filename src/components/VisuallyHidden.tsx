import { ReactNode } from 'react';

const VisuallyHidden = ({ children }: { children: ReactNode }) => {
  return <p className="visually-hidden">{children}</p>;
};

export default VisuallyHidden;
