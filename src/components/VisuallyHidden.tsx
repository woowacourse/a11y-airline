import '../Accessibility.css';

export default function VisuallyHidden({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="visually-hidden" {...props}>
      {children}
    </div>
  );
}
