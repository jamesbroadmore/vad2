import React, { useEffect, useRef, useState } from "react";
import { VIDEO_URL } from "../mock";

// Full-screen animated VAD logo intro that plays once per browser session
export default function IntroSplash() {
  const [show, setShow] = useState(() => !sessionStorage.getItem("vad_intro_done"));
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";
    const timeout = setTimeout(() => end(), 6000); // safety timeout
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
      className={`fixed inset-0 z-[100] bg-black grid place-items-center transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        src={VIDEO_URL}
        autoPlay
        muted
        playsInline
        onEnded={end}
        className="w-[80%] max-w-[720px] object-contain"
      />
      <button
        onClick={end}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-display text-xs tracking-widest-xl text-white/50 hover:text-white transition-colors uppercase"
      >
        Skip Intro
      </button>
    </div>
  );
}
