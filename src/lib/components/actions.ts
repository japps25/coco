export function trapFocus(node: HTMLElement) {
  const previous = document.activeElement as HTMLElement;

  function focusable() {
    return Array.from(node.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
  }

  function handleKeydown(event: any) {
    if (event.key !== "Tab") return;

    const current = document.activeElement;

    const elements = focusable() as HTMLElement[];
    const first = elements.at(0) as HTMLElement;
    const last = elements.at(-1) as HTMLElement;

    if (event.shiftKey && current === first) {
      last.focus();
      event.preventDefault();
    }

    if (!event.shiftKey && current === last) {
      first.focus();
      event.preventDefault();
    }
  }

  focusable()[0] && (focusable()[0] as HTMLElement).focus();

  node.addEventListener("keydown", handleKeydown);

  return {
    destroy() {
      node.removeEventListener("keydown", handleKeydown);
      previous.focus();
    },
  };
}
