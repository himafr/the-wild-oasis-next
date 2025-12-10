import NavLink from "./components/NavLink";
export const metadata={
  title:"The Wild Oasis",
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <header>
          <img src="logo.png" />
        <NavLink />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
