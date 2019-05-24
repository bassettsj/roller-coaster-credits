import { h } from 'preact';
import { home } from './style.css';

interface Props {}
export default function Home() {
  return (
    <div className={home}>
      <h2 className="">Home</h2>
      <p>This is the Home component.</p>
    </div>
  );
}
