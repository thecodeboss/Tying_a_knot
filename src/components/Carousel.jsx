import { h } from 'preact';
import { useCallback, useEffect, useState } from 'preact/hooks';

const Carousel = ({ children = [], intervalMs = 3000, className = '', style = {} }) => {
  const [activeChildIdx, setActiveChildIdx] = useState(0);
  const [height, setHeight] = useState(0);

  // Change which child is visible (aka. active) on an interval
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setActiveChildIdx((activeChildIdx + 1) % children.length);
    }, intervalMs);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [activeChildIdx]);

  // Because the carousel is positioned relatively, by default it will have a height of 0px.
  // We listen here for size changes in the child, so we can force the height of the
  // carousel to match the currently visible child.
  const activeChild = useCallback(node => {
    if (node !== null) {
      new ResizeObserver(() => {
        setHeight(node.getBoundingClientRect().height);
      }).observe(node);
    }
  }, []);

  return (
    <div className={`carousel ${className}`} style={{ ...style, height }}>
      {children.map((child, idx) =>
        activeChildIdx === idx ? (
          <div key={idx} ref={activeChild} className="active">
            {child}
          </div>
        ) : (
          <div key={idx}>{child}</div>
        )
      )}
    </div>
  );
};

export default Carousel;
