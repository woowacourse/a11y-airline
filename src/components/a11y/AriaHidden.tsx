const AriaHidden = ({ children }: { children: React.ReactNode }) => {
  return (
    <div aria-hidden="true" style={{ display: 'contents' }}>
      {children}
    </div>
  );
};

export default AriaHidden;
