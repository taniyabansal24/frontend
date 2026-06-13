export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="public-layout-wrapper">
      {/* Navbar will go here */}
      <main>{children}</main>
      {/* Footer will go here */}
    </div>
  );
}
