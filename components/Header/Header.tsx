import css from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/tutorialNextJS">Учебник NextJS</Link>
          </li>
          <li>
            <Link href="/advancedRouting">Роутинг</Link>
          </li>
          <li>
            <Link href="/profile">Импорты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
