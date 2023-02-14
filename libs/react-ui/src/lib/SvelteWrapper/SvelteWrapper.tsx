import { useLayoutEffect, useRef } from 'react';

export function SvelteWrapper(SvelteComponent: any) {
  return (props: any) => {
    const ref = useRef(null);

    useLayoutEffect(() => {
      // @ts-ignore
      while (ref.current?.firstChild) {
        // @ts-ignore
        ref.current?.firstChild?.remove();
      }

      new SvelteComponent({
        target: ref.current,
        props,
      });
    }, []);

    return <div ref={ref} />;
  };
}

export default SvelteWrapper;
