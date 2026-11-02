import { Loading } from 'solid-js';

import { Router } from './router';
import { cn } from '@/libs/cn';
import { Header } from '@/components/Header';

import './styles/app.css';

const baseClasses = 'max-w-[100rem] px-4 py-6 flex justify-start';

export default function App() {
  return (
    <Router>
      {(props) => (
        <>
          <Header />

          <Loading
            fallback={
              <main class={cn('flex items-center justify-center', baseClasses)}>
                <span class={'loading loading-ball loading-xl'}></span>
              </main>
            }
          >
            <main class={baseClasses}>{props.children}</main>
          </Loading>
        </>
      )}
    </Router>
  );
}
