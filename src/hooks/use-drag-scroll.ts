import { useRef } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";

export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const state = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  const onMouseDown = (e: ReactMouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    state.current = { isDown: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
  };

  const stopDragging = () => {
    state.current.isDown = false;
  };

  const onMouseMove = (e: ReactMouseEvent<T>) => {
    const el = ref.current;
    if (!el || !state.current.isDown) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = x - state.current.startX;
    el.scrollLeft = state.current.scrollLeft - walk;
  };

  return {
    ref,
    onMouseDown,
    onMouseUp: stopDragging,
    onMouseLeave: stopDragging,
    onMouseMove,
  };
}
