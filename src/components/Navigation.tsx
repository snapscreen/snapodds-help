import LocaleSwitcher from './LocaleSwitcher';

export default function Navigation() {
  return (
    <div>
      <nav className="container flex justify-between p-2">
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
