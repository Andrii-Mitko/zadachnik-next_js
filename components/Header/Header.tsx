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
            <Link href="/tutorialNextJS">Підручник</Link>
          </li>
          <li>
            <Link href="/advancedRouting">Роутинг</Link>
          </li>
          <li>
            <Link href="/importsNext">Iмпорти</Link>
          </li>
          <li>
            <Link href="/layoutsNext">Макети</Link>
          </li>
          <li>
            <Link href="/navigation">Навігація</Link>
          </li>
          <li>
            <Link href="/styling">Стилізація</Link>
          </li>
          <li>
            <Link href="/practice">Практика</Link>
          </li>
          <li>
            <Link href="/examples">Приклади</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
