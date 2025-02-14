import { createSignal, onMount } from "solid-js";
import Planet from "./components/planet"

function App() {
  let contentRef!: HTMLDivElement;
  const [contentHeight, setContentHeight] = createSignal(0);
  const [contentWidth, setContentWidth] = createSignal(0);

  let topPlanetRef!: HTMLDivElement;
  const [overlayXPos, setOverlayXPos] = createSignal(0);
  const [overlayYPos, setOverlayYPos] = createSignal(0);

  onMount(() => {
    setContentHeight(contentRef.clientHeight);
    setContentWidth(contentRef.clientWidth);

    setOverlayXPos(topPlanetRef.clientWidth / 2.5);
    setOverlayYPos(topPlanetRef.clientHeight / 1.8);
  });

  return (
    <main class="bg-stone-950 text-stone-50 h-screen w-screen flex justify-center align-items-center">
      <div class="m-auto relative group">
        <section class="z-1 absolute top-0 left-0" style={{ top: `-${overlayYPos()}px`, left: `-${overlayXPos()}px` }}>
          <Planet color="var(--color-yellow-400)" ref={topPlanetRef}>
            <Planet color="var(--color-violet-700)">
              <Planet color="var(--color-green-400)">
                <Planet color="var(--color-sky-400)" height={contentHeight()} width={contentWidth()} />
              </Planet>
            </Planet>
          </Planet>
        </section>
        <div class="z-2 relative text-center" ref={contentRef}>
          <h1 class="text-6xl tracking-wide">- 宇宙 -</h1>
          <p class="mt-1">from <a href="https://tomo.uchuu.io">tomo</a></p>
        </div>
      </div>
    </main>
  )
}

export default App
