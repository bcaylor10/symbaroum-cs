import { Loading } from 'solid-js';

import { Router } from './router';
import { cn } from '@/lib/utils';
import { Header } from '@/components/Header';

import './styles/app.css';
import { CharacterProvider } from '@/contexts/CharacterContext';

const baseClasses = 'py-6 flex justify-start';
// px-4

export default function App() {
  return (
    <Router>
      {(props) => (
        <CharacterProvider>
          <Header />

          <Loading
            fallback={
              <main class={cn('flex items-center justify-center', baseClasses)}>
                <span class={'loading loading-ball loading-xl'} />
              </main>
            }
          >
            <main class={baseClasses}>{props.children}</main>
          </Loading>
        </CharacterProvider>
      )}
    </Router>
  );
}
