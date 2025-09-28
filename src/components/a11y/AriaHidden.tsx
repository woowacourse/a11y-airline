const AriaHidden = ({ children }: { children: React.ReactNode }) => {
  return <span aria-hidden="true">{children}</span>;
};

export default AriaHidden;
