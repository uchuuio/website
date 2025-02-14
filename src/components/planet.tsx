import { children, JSXElement, Show } from "solid-js";

interface Props {
  children?: JSXElement;
  color: string;
  height?: number;
  ref?: HTMLDivElement;
  width?: number;
}

function Planet(props: Props) {
  const safeChildren = children(() => props.children);

  const height = () => props.height ? `${props.height}px` : undefined;
  const width = () => props.width ? `${props.width + 20}px` : undefined;
  const extraPadding = () => props.height && props.width ? `110px` : undefined

  return (
    <div class="relative py-13 px-13 border border-white rounded-full flex items-center justify-center animate-spin" style={{ height: height(), "padding-block": extraPadding(), width: width() }} ref={props.ref}>
      <div class="absolute top-0 left-50% -translate-y-[49%] -translate-x-[49%] transform inline-flex h-4 w-4 rounded-full" style={{ "background-color": props.color }} />
      <Show when={props.children}>
        {safeChildren()}
      </Show>
    </div>
  )
}

export default Planet
