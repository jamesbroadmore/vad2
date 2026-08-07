import React, { useEffect, useRef, useState } from "react";
import { VIDEO_URL, VIDEO_URL_WEBM } from "../mock";

// Full-screen animated VAD logo intro that plays once per browser session.
// Uses WebM (VP9) + MP4 (H.264) sources for universal codec support and
// gracefully dismisses itself if the video cannot be played at all.
export default function IntroSplash() {
  const [show, setShow] = useState(() => !sessionStorage.getItem("vad_intro_done"));
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";
    const timeout = setTimeout(() => end(), 8000); // safety timeout
    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  const end = () => {
    setFadeOut(true);
    setTimeout(() => {
      sessionStorage.setItem("vad_intro_done", "1");
      setShow(false);
      document.body.style.overflow = "";
    }, 700);
  };

  if (!show) return null;

  return (
    <div
      data-testid="intro-splash"
      className={`fixed inset-0 z-[100] bg-black grid place-items-center transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Brand fallback shown behind the video while it loads (or if it can't play) */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div className="font-display text-5xl md:text-7xl font-bold tracking-widest text-white/90 select-none">
          VAD<span className="text-vad-red">.</span>
        </div>
      </div>

      <video
        ref={videoRef}
        data-testid="intro-video"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={end}
        onError={end}
        className="relative w-[80%] max-w-[720px] object-contain"
      >
        <source src={VIDEO_URL_WEBM} type="video/webm" />
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      <button
        data-testid="intro-skip-button"
        onClick={end}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 font-display text-xs tracking-widest-xl text-white/50 hover:text-white transition-colors uppercase"
      >
        Skip Intro
      </button>
    </div>
  );
}
