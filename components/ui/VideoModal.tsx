"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";

type Ctx = { open: (url: string) => void };
const VideoModalContext = createContext<Ctx | null>(null);

/**
 * Wrap any part of a page with this to let descendants open a fullscreen video dialog
 * via <VideoTrigger url="..."/>. The iframe is only mounted while open, so no third-party
 * request is made until a visitor actually presses play.
 */
export function VideoModalProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [url, setUrl] = useState<string | null>(null);

  const open = useCallback((next: string) => {
    setUrl(next);
  }, []);

  const close = useCallback(() => setUrl(null), []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (url && !dialog.open) dialog.showModal();
    if (!url && dialog.open) dialog.close();
  }, [url]);

  return (
    <VideoModalContext.Provider value={{ open }}>
      {children}
      <dialog
        ref={dialogRef}
        className="modal-overlay fixed inset-0 z-[9999] h-full w-full bg-transparent"
        aria-label="Video"
        onClose={close}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="fixed top-1/2 left-1/2 h-full max-h-[30%] w-full max-w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[10px] max-[400px]:max-h-[20%] max-[400px]:max-w-[90%] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[600px] lg:max-w-[1000px]">
          {url && (
            <iframe
              className="h-full w-full rounded-[10px]"
              src={`${url}?autoplay=1`}
              title="Cirsec video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
          <button
            type="button"
            onClick={close}
            aria-label="Close video"
            className="absolute -top-8 -right-8 flex size-8 cursor-pointer items-center justify-center rounded-full bg-white p-1 text-black max-[400px]:-top-4 max-[400px]:-right-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6 transition-transform duration-300 ease-in-out hover:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </dialog>
    </VideoModalContext.Provider>
  );
}

export function VideoTrigger({
  url,
  className,
  label,
  children,
}: {
  url: string;
  className?: string;
  label: string;
  children: ReactNode;
}) {
  const ctx = useContext(VideoModalContext);
  return (
    <button type="button" className={className} aria-label={label} onClick={() => ctx?.open(url)}>
      {children}
    </button>
  );
}
