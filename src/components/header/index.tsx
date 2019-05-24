import { h } from 'preact';
import { Link } from 'preact-router/match';
import * as style from './style.css';

export default function Header() {
  return (
    <header className={style.header}>
      <h1>Coaster Credits</h1>
      <nav>
        <Link activeClassName={style.active} href="/">
          Home
        </Link>
      </nav>
    </header>
  );
}
