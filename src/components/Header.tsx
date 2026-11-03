import { paths } from '@/router';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';

export const Header = () => {
  return (
    <header class="sticky top-0 z-100 px-4 py-2 navbar bg-base-100 shadow-sm secondary flex justify-between">
      <a href="/" class="text-xl">
        <h1>SymSheet</h1>
      </a>
      <nav class="flex-none">
        <div role="tablist" class="tabs tabs-border">
          <a href={paths()} role="tab" class="tab">
            Home
          </a>
          <a
            href={paths['character-sheet']}
            role="tab"
            class="tab"
            activeClass={'tab-active'}
          >
            Character Sheet
          </a>
        </div>
      </nav>
      <ThemeSwitcher />
    </header>
  );
};
