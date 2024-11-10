declare module 'aos' {
    interface AosOptions {
      disable?: boolean | string | (() => boolean);
      startEvent?: string;
      initClassName?: string;
      animatedClassName?: string;
      useClassNames?: boolean;
      disableMutationObserver?: boolean;
      debounceDelay?: number;
      throttleDelay?: number;
      offset?: number;
      delay?: number;
      duration?: number;
      easing?: string;
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: string;
    }
  
    function init(options?: AosOptions): void;
    function refresh(): void;
    function refreshHard(): void;
  
    export default {
      init,
      refresh,
      refreshHard,
    };
  }