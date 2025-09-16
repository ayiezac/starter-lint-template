declare namespace lozad {
  type Options = {
    enableAutoReload?: boolean | undefined;
    rootMargin?: string | undefined;
    threshold?: number | undefined;
    load: ((element: Element) => void);
    loaded: (element: Element) => void;
  };

  // TODO: remove on next major version bump
  // tslint:disable:next-line no-empty-interface
  type Option = {} & Options;

  type Observer = {
    observe: () => void;
    triggerLoad: (element: Element) => void;
    observer: IntersectionObserver;
  };

  type Selector = string | Element | HTMLCollectionOf<Element> | NodeListOf<Element>;

  const prototype: object;
}

declare function lozad(selector?: lozad.Selector, options?: lozad.Options): lozad.Observer;

export as namespace lozad;

export = lozad;
