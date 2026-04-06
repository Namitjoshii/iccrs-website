import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ApplyNowPopup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("popupShown");

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setVisible(true);
        sessionStorage.setItem("popupShown", "true");
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 250);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-md px-4"
      onClick={close}
    >
      <div
        className={`relative w-full max-w-5xl rounded-2xl bg-[#F5F0E8] p-4 md:p-6 shadow-2xl ${
          closing ? "animate-fadeOut" : "animate-fadeIn"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={close}
          className="absolute top-3 right-4 text-black/60 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Heading */}
        <p className="text-center text-xs tracking-widest text-[#C8922A] mb-1">
          EXECUTIVE PROGRAMS
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
          Choose Your Program
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

          {/* RAMA */}
          <div className="relative rounded-2xl p-4 md:p-6 bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] text-white shadow-xl hover:scale-[1.02] transition-all duration-300">

            <span className="absolute -top-3 left-5 text-xs bg-red-500 px-3 py-1 rounded-full shadow-md">
              Limited Seats – Filling Fast
            </span>

            <p className="text-xs text-[#C8922A] tracking-widest mb-2">RAMA</p>

            <h3 className="text-lg font-semibold mb-1">
              Leadership & Governance
            </h3>

            <p className="text-sm text-white/70 mb-4">
              2-Day Executive Program + Ayodhya Visit
            </p>

            <p className="text-lg font-semibold text-[#C8922A] mb-4">
              USD 599
            </p>

            <div className="space-y-2 mb-5 text-sm">
              <p>🎯 Ethical Leadership</p>
              <p>📊 Public Policy Frameworks</p>
              <p>🏛 Governance & Decision Making</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/programs/leadership"
                onClick={close}
                className="w-full sm:w-1/2 text-center border border-[#C8922A] text-[#C8922A] py-2 rounded-lg text-sm hover:bg-[#C8922A]/10"
              >
                View Details
              </Link>

              <a
                href="https://forms.gle/CGwhfLheHfucVXkD6"
                target="_blank"
                onClick={close}
                className="w-full sm:w-1/2 text-center bg-[#C8922A] text-white py-2 rounded-lg text-sm hover:opacity-90"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* KRISHNA */}
          <div className="rounded-2xl p-4 md:p-6 bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] text-white shadow-xl hover:scale-[1.02] transition-all duration-300">

            <p className="text-xs text-blue-400 tracking-widest mb-2">
              KRISHNA
            </p>

            <h3 className="text-lg font-semibold mb-1">
              Diplomacy & Strategy
            </h3>

            <p className="text-sm text-white/70 mb-4">
              2-Day Executive Program + Kurukshetra Visit
            </p>

            <p className="text-lg font-semibold text-blue-400 mb-4">
              USD 599
            </p>

            <div className="space-y-2 mb-5 text-sm">
              <p>🧠 Diplomacy & Crisis Management</p>
              <p>⚔ Mahabharata Case Studies</p>
              <p>👥 25–30 Participants</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/programs/krishnas-learning"
                onClick={close}
                className="w-full sm:w-1/2 text-center border border-blue-400 text-blue-400 py-2 rounded-lg text-sm hover:bg-blue-400/10"
              >
                View Details
              </Link>

              <a
                href="https://forms.gle/CGwhfLheHfucVXkD6"
                target="_blank"
                onClick={close}
                className="w-full sm:w-1/2 text-center bg-[#1a2744] text-white py-2 rounded-lg text-sm hover:opacity-90"
              >
                Apply Now
              </a>
            </div>
          </div>

        </div>

        {/* Footer */}
        <p
          className="text-center text-xs mt-6 cursor-pointer hover:underline text-gray-600"
          onClick={close}
        >
          Maybe later
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeOut {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.95); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease forwards; }
        .animate-fadeOut { animation: fadeOut 0.25s ease forwards; }
      `}</style>
    </div>
  );
}