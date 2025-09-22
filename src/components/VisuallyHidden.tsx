export default function VisuallyHidden({ children }: { children: React.ReactNode }) {
  return <p className="visually-hidden">{children}</p>;
}
