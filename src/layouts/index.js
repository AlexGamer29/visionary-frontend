// Setup layout here
import { Navbar, Explorer } from '../components';

function Layout({ children }) {
  return <div>{children}</div>;
}

function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white shadow-md">
      <div className="px-4 text-neutral-500">
        <Navbar />
        <Explorer />
      </div>
    </header>
  );
}

function Main({ children }) {
  return (
    <main className="mb-20">
      <div className="px-4 space-y-6 overflow-hidden">{children}</div>
    </main>
  );
}

export { Layout, Header, Main };
