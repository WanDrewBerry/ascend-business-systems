import { useEffect, useRef } from "react";

export default function VideoModal({ video, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!video) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "Tab") {
        const modal = closeButtonRef.current?.closest("[role='dialog']");
        const focusable = modal?.querySelectorAll(
          'button, video[controls], [href], [tabindex]:not([tabindex="-1"])'
        );

        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus?.();
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${video.title} video`}
        className="relative w-full max-w-5xl rounded-2xl bg-[#10264A] p-3 shadow-2xl md:p-5"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-[#10264A] transition hover:bg-[#EAF5FA]"
        >
          ×
        </button>

        <h3 className="mb-4 text-lg font-semibold text-white md:text-xl">
          {video.title}
        </h3>

        <video
          key={video.src}
          src={video.src}
          controls
          autoPlay
          playsInline
          preload="metadata"
          tabIndex={0}
          className="aspect-video w-full rounded-lg bg-black object-contain"
        >
          Your browser does not support video playback.
        </video>
      </div>
    </div>
  );
}