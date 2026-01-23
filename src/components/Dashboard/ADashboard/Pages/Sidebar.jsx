import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useStore } from "../../../../Store/Store";

const tabs = [
  { id: 1, label: "Overview" },
  { id: 2, label: "Services" },
  { id: 3, label: "Appointments" },
  { id: 4, label: "History" },
  { id: 5, label: "Users" },
];

const Sidebar = () => {
  const indicatorRef = useRef(null);
  const containerRef = useRef(null);

  // ✅ CORRECT CONTEXT USAGE
  const { openTabId, setOpenTabId } = useStore();

  useEffect(() => {
    if (!containerRef.current || !indicatorRef.current) return;

    const activeEl = containerRef.current.querySelector(
      `[data-id="${openTabId}"]`
    );

    if (activeEl) {
      gsap.to(indicatorRef.current, {
        x: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        duration: 0.4,
        ease: "power3.out",
      });
    }
  }, [openTabId]);

  return (
    <div
      ref={containerRef}
      className="fixed px-3 w-[90vw] md:w-[50vw] h-[60px]
                 flex items-center justify-between
                 bg-gray-300/80 backdrop-blur-md
                 rounded-full bottom-[10%]
                 left-1/2 -translate-x-1/2
                 shadow-lg"
    >
      {/* SLIDING INDICATOR */}
      <div
        ref={indicatorRef}
        className="absolute left-0 h-[80%] bg-black rounded-full"
        style={{ top: "10%" }}
      />

      {tabs.map((tab) => (
        <button
          key={tab.id}
          data-id={tab.id}
          onClick={() => setOpenTabId(tab.id)}
          className={`relative z-10 px-6 h-full text-sm rounded-full
            ${
              openTabId === tab.id
                ? "text-white"
                : "text-gray-700 hover:text-black"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
