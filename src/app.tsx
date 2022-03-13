import { Logo } from './logo';
import { FunctionalComponent } from 'preact';

interface Props {
  bootCount: number;
}

export const App: FunctionalComponent<Props> = ( { bootCount } ) => {
  return (
    <>
      <Logo />
      <p>Hello Vite + Preact!</p>
      <p>bootCount: { bootCount }</p>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
    </>
  );
};
