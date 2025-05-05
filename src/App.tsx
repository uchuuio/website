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
    <div class="bg-stone-950 text-stone-50 font-mono">
      <main class="h-screen w-screen flex justify-center align-items-center overflow-hidden font-sans">
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
            <p class="mt-1">from <a href="https://tomo.uchuu.io" class="hover:underline">thomas</a> & friends</p>
          </div>
        </div>
      </main>

      <section class="max-w-screen-md mx-auto p-4">
        <h3 class="text-4xl mb-8">Missions</h3>
        <div class="flex flex-col gap-8">
          <div>
            <h4 class="text-2xl">
              01: <a href="https://translator.uchuu.io" class="hover:underline">Translator</a>
            </h4>
            <p>Your passport to a universe of languages</p>
          </div>
          {/* <div class="text-right">
            <h4 class="text-2xl">
              02: <a href="https://translator.uchuu.io" class="hover:underline">Translator</a>
            </h4>
            <p>Your passport to a universe of languages</p>
          </div>
          <div>
            <h4 class="text-2xl">
              03: <a href="https://translator.uchuu.io" class="hover:underline">Translator</a>
            </h4>
            <p>Your passport to a universe of languages</p>
          </div> */}
        </div>
      </section>

      <section class="max-w-screen-md mx-auto p-4 mt-12">
        <h5 class="text-center text-md"><a href="https://github.com/uchuuio" class="hover:underline">Github</a></h5>
      </section>
    </div>
  )
}

export default App
