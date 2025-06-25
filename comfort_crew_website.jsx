// Comfort Crew - Final Enhanced UI with Belt Image Integration & Better Control Panel UI

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export default function ComfortCrewApp() {
  const [heatMode, setHeatMode] = useState("auto");
  const [selectedHeat, setSelectedHeat] = useState(null);
  const [vibrationMode, setVibrationMode] = useState(null);
  const [activeSection, setActiveSection] = useState("about");
  const [isSignUp, setIsSignUp] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => setScrolled(window.scrollY > 40);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabClass = (tab) => `px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${activeSection === tab ? "bg-white text-black" : "text-white hover:bg-zinc-700"}`;

  const vibrationOptions = [
    { name: "Wave Ease", desc: "Deep rhythmic pulse" },
    { name: "Pulse Zap", desc: "Quick jolts for sharper relief" },
    { name: "Heartbeat", desc: "Soothing thump pattern" },
    { name: "Spiral Drift", desc: "Rotational tap rhythm" },
    { name: "Whisper Buzz", desc: "Light touch, near silent" }
  ];

  const autoHeatOptions = [
    "Cloud Warm — Gentle heat like a cozy breeze",
    "Core Pulse — Wave-pulse warmth to ease tension",
    "Night Glow — Long-lasting calm for restful hours"
  ];

  return (
    <div className="min-h-screen bg-black text-white font-[San Francisco] px-6 py-10 space-y-10">
      {/* Sticky Header */}
      <div className={`fixed top-0 left-0 w-full bg-black z-50 py-4 px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}>
        <img src="/belt.png" alt="Logo" className="w-10" />
        <h1 className={`text-3xl font-bold tracking-wide transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}>COMFORT CREW</h1>
      </div>

      {/* Hero Section */}
      <div className="text-center pt-20">
        <h1 className="text-6xl font-bold tracking-widest">COMFORT CREW</h1>
        <p className="text-lg mt-2 text-gray-400">Syncing comfort with care...</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center space-x-4 mt-6">
        <button onClick={() => setActiveSection("about")} className={tabClass("about")}>About</button>
        <button onClick={() => setActiveSection("control")} className={tabClass("control")}>Control Panel</button>
        <button onClick={() => setActiveSection("profile")} className={tabClass("profile")}>About Me</button>
      </div>

      {/* About Section */}
      {activeSection === "about" && (
        <div className="max-w-5xl mx-auto space-y-24">
          <section className="space-y-12">
            <h2 className="text-4xl font-bold">Why Comfort Crew?</h2>
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Instant Comfort</h3>
                <p>Feel relief the moment you need it. Our smart belt adapts quickly to deliver precise warmth and rhythmic massage to ease cramps and soothe muscles.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Tailored for Life</h3>
                <p>Whether you're working, relaxing, or traveling — Comfort Crew is your silent wellness partner. Sleek, wireless, and completely intuitive.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Science Meets Design</h3>
                <p>Combining heat and vibration not only improves blood flow but also accelerates recovery. Tested, refined, and woman-approved.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Built With You In Mind</h3>
                <p>Minimal look, maximum comfort. Every aspect from the materials to the mobile interface is designed for simplicity and peace of mind.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-4xl font-bold">Problem Analysis</h2>
            <p>Menstrual pain affects millions of women, yet most solutions fall short. Biological triggers like hormonal shifts, stress, and inflammation cause cramps that disrupt routines and wellbeing. Comfort Crew fills the gap by offering both heat and vibration in a portable, wearable format that adapts to every lifestyle.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-4xl font-bold">Our Solution</h2>
            <p>The Period Cramp Relief Belt is lightweight, rechargeable, and completely adjustable. Through targeted warmth and rhythmic vibration, it restores comfort anytime, anywhere. Controlled entirely through this seamless interface — it's your relief companion for work, rest, or travel.</p>
          </section>

          <section className="pt-10 border-t border-zinc-700 grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-2xl font-bold">Vibhuti</h3>
              <p className="text-md text-gray-300">Lead Product Designer — Shaping user experience and wearable ergonomics.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Bharat</h3>
              <p className="text-md text-gray-300">Tech & Hardware Lead — Crafting seamless firmware and embedded control.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Keisha</h3>
              <p className="text-md text-gray-300">Partnership Strategist — Driving brand collaborations and outreach.</p>
            </div>
          </section>

          <div className="flex justify-center pt-10">
            <img src="/belt.png" alt="Period Belt" className="w-[320px] rounded-xl shadow-lg" />
          </div>
        </div>
      )}

      {/* Control Panel Section */}
      {activeSection === "control" && (
        <div className="w-full max-w-3xl mx-auto space-y-10">
          <Card className="bg-white text-black p-6">
            <CardContent className="space-y-6">
              <h2 className="text-2xl font-bold text-center">Temperature Mode</h2>
              <div className="flex justify-center gap-4">
                <Button variant={heatMode === "auto" ? "default" : "outline"} onClick={() => setHeatMode("auto")}>Auto</Button>
                <Button variant={heatMode === "manual" ? "default" : "outline"} onClick={() => setHeatMode("manual")}>Manual</Button>
              </div>
              {heatMode === "auto" ? (
                <div className="grid gap-3">
                  {autoHeatOptions.map((option, index) => (
                    <Button
                      key={index}
                      variant={selectedHeat === option ? "default" : "outline"}
                      onClick={() => setSelectedHeat(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              ) : (
                <div>
                  <label className="block font-medium">Set Temperature (°C)</label>
                  <Input type="range" min="30" max="60" className="w-full" />
                </div>
              )}
              <Button className="block mx-auto">Done</Button>
            </CardContent>
          </Card>

          <Card className="bg-white text-black p-6">
            <CardContent className="space-y-6">
              <h2 className="text-2xl font-bold text-center">Vibration Modes</h2>
              <div className="grid gap-3">
                {vibrationOptions.map((option, index) => (
                  <Button
                    key={index}
                    variant={vibrationMode === option.name ? "default" : "outline"}
                    onClick={() => setVibrationMode(option.name)}
                    className="text-left"
                  >
                    <div className="font-semibold">{option.name}</div>
                    <div className="text-sm text-gray-600">{option.desc}</div>
                  </Button>
                ))}
              </div>
              <Button className="block mx-auto">Done</Button>
            </CardContent>
          </Card>

          <Card className="bg-white text-black p-6">
            <CardContent className="space-y-6">
              <h2 className="text-2xl font-bold text-center">Timer</h2>
              <label className="block font-medium">Auto Power-Off (mins)</label>
              <Input type="number" placeholder="e.g., 20" />
              <div className="flex items-center gap-2">
                <Switch id="autoTimer" />
                <label htmlFor="autoTimer" className="text-sm">Enable Auto Off</label>
              </div>
              <Button className="block mx-auto">Done</Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Profile Section */}
      {activeSection === "profile" && (
        <div className="w-full max-w-xl mx-auto bg-zinc-900 border border-zinc-700 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-center mb-6">{isSignUp ? "Sign Up" : "Sign In"}</h2>
          <div className="grid grid-cols-1 gap-4">
            {isSignUp ? (
              <>
                <Input placeholder="Full Name" />
                <Input placeholder="Gender" />
                <Input type="date" placeholder="DOB" className="text-gray-500" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Phone Number" />
                <Input type="password" placeholder="Create Password" />
              </>
            ) : (
              <>
                <Input type="email" placeholder="Email or Phone" />
                <Input type="password" placeholder="Password" />
              </>
            )}
            <Button className="w-full mt-4">{isSignUp ? "Create Account" : "Login"}</Button>
            <p className="text-center text-sm text-gray-400 cursor-pointer" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
