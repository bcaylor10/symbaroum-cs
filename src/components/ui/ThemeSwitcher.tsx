import { createSignal, onSettled, For } from 'solid-js';
import { FiSliders } from 'solid-icons/fi';
import { themeChange } from 'theme-change';

const themes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
  'dim',
  'nord',
  'sunset',
  'caramellatte',
  'abyss',
  'silk',
];

export const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = createSignal('light');

  onSettled(() => {
    themeChange(false);

    const savedTheme = localStorage.getItem('theme') || 'fantasy';
    const activeTheme =
      savedTheme && themes.includes(savedTheme)
        ? savedTheme
        : document.documentElement.getAttribute('data-theme') || 'light';

    setCurrentTheme(activeTheme);
    document.documentElement.setAttribute('data-theme', activeTheme);
  });

  const setTheme = (theme: string) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <>
      <div class={'tooltip tooltip-left'} data-tip={'Change Theme'}>
        <button
          class="btn btn-ghost cursor-pointer"
          popovertarget="theme-popover"
          style="anchor-name:--anchor-popover"
          aria-label="Change Theme"
        >
          <FiSliders />
        </button>
      </div>
      <ul
        class="dropdown dropdown-end menu w-52 bg-base-200 text-base-content rounded-box h-122 max-h-[calc(100vh-8.6rem)] overflow-y-auto border-(length:--border) border-white/5 shadow-2xl outline-(length:--border) outline-black/5 mt-6"
        popover
        id="theme-popover"
        style="position-anchor:--anchor-popover"
      >
        <li class={'menu-title tex-sm text-left'}>Theme</li>
        <For each={themes}>
          {(theme) => (
            <li>
              <button
                class="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left capitalize hover:bg-base-300"
                data-set-theme={theme}
                onClick={() => setTheme(theme)}
                aria-label={`Change Theme to ${theme}`}
              >
                {theme}
                {currentTheme() === theme && <span>✓</span>}
              </button>
            </li>
          )}
        </For>
      </ul>
    </>
  );
};
