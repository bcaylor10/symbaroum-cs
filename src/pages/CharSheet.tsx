import { GridLayout, useContainerWidth, Layout } from '@snapgridjs/solid';
import { createSignal } from 'solid-js';

import { CharacterInfo } from '@/components/CharacterInfo';
import { Attributes } from '@/components/attributes/Attributes';
import { Container } from '@/components/layout/Container';

// containerPadding [0,0] so the first tile sits flush at the surface edge — aligning
// with the controls/labels at that same edge. Outer breathing room comes from the
// stage/card padding, not the grid's own padding.
export const GRID = {
  cols: 12,
  rowHeight: 52,
  margin: [10, 10] as [number, number],
  containerPadding: [0, 0] as [number, number],
};

// The DemoFrame stage's measured width. Full-stage demos seed `initialWidth` with it
// so their first paint matches the measured size — no reflow when the RO fires.
export const STAGE_WIDTH = 798;

export const RESP_BREAKPOINTS = { full: 480, mid: 360, compact: 0 };
export const RESP_COLS = { full: 12, mid: 8, compact: 4 };

export const BASIC: Layout = [
  { i: 'a', x: 0, y: 0, w: 4, h: 2 },
  { i: 'b', x: 4, y: 0, w: 4, h: 2 },
  { i: 'c', x: 8, y: 0, w: 4, h: 3 },
  { i: 'd', x: 0, y: 2, w: 6, h: 2 },
  { i: 'e', x: 6, y: 2, w: 2, h: 2 },
];

export default function CharSheet() {
  const [layout, setLayout] = createSignal(BASIC.slice(0, 4));
  const { width, ref } = useContainerWidth({ initialWidth: STAGE_WIDTH });

  console.log({ layout });

  return (
    <Container class={'px-4 max-w-full'}>
      <div class={'flex flex-row gap-4'}>
        <div class={'w-[40%]'}>
          <CharacterInfo />
        </div>
        <div class={'w-full'}>
          <Attributes />
        </div>
      </div>
    </Container>
  );
}
