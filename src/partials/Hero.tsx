"use client";

import Image from "next/image";
import { Mail, Download, Linkedin, Github, Phone } from "lucide-react";
import { getProfile } from "@/lib/data";
import { useState, useEffect } from "react";

const Hero = () => {
  const profile = getProfile();
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(false);

  const FULL_TEXT = "hi, I'm Fahim.";
  const NAME_START_INDEX = 8;
  const NAME_END_INDEX = 14;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < FULL_TEXT.length) {
        setDisplayText(FULL_TEXT.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setShowCursor(true);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // logic to keep the last word + cursor together ----------
  const full = displayText || "";
  // find last whitespace (space). If none, we will treat the whole text as 'post'
  const lastSpaceIndex = full.lastIndexOf(" ");
  const splitIndex = lastSpaceIndex > 0 ? lastSpaceIndex : 0;

  const renderColoredSlice = (start: number, end: number) => {
    // returns array of spans (preserve pre-name/name/post-name color segments)
    const parts = [];

    let cursor = start;
    if (cursor < NAME_START_INDEX && start < end) {
      const segEnd = Math.min(end, NAME_START_INDEX);
      parts.push(
        <span key={`s-${start}-${segEnd}`} className="text-onsurface">
          {full.slice(start, segEnd)}
        </span>
      );
      cursor = segEnd;
    }

    if (cursor < NAME_END_INDEX && cursor < end) {
      const segEnd = Math.min(end, NAME_END_INDEX);
      parts.push(
        <span key={`n-${cursor}-${segEnd}`} className="text-primary">
          {full.slice(cursor, segEnd)}
        </span>
      );
      cursor = segEnd;
    }

    if (cursor < end) {
      parts.push(
        <span key={`p-${cursor}-${end}`} className="text-onsurface">
          {full.slice(cursor, end)}
        </span>
      );
    }

    return parts;
  };
  // ----------------------------------------------------------------------

  return (
    <section className="section-padding">
      <div className="grid lg:grid-cols-[65%_35%] gap-10 sm:gap-16 md:gap-20 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <div>
            {/* ---------- typed heading with robust last-word + cursor handling ---------- */}
            <p className="text-6xl mb-3 font-bold leading-tight">
              {/* render everything before the final (non-breaking) chunk */}
              {renderColoredSlice(0, splitIndex)}

              {/* the final chunk (includes leading space before the last word if present)
                  + cursor live together as one unit — whitespace-nowrap prevents a break inside */}
              <span className="whitespace-nowrap align-baseline">
                {renderColoredSlice(splitIndex, full.length)}
                {showCursor && (
                  <span
                    aria-hidden="true"
                    className="inline-block w-2 h-[1em] bg-primary rounded ml-2 animate-blink align-baseline"
                  />
                )}
              </span>
            </p>

            <p className="leading-relaxed text-justify">{profile.about}</p>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              <Github size={22} />
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="text-gray-700 inline-flex gap-2 hover:text-green-600"
            >
              <Phone size={22} />
              <p>{profile.phone}</p>
            </a>
          </div>

          <div className="">
            <a href={`mailto:${profile.email}`} className="hover:text-primary">
              {profile.email}
            </a>
          </div>

          {/* Buttons */}
          <div className="inline-flex gap-3 w-full">
            <a
              href={`mailto:${profile.email}`}
              className="btn inline-flex items-center gap-3"
            >
              <Mail size={15} />
              Email me
            </a>
            <a
              href={profile.CV}
              download
              className="btn inline-flex items-center gap-3"
            >
              <Download size={15} />
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <Image
              src={profile.profilePicture}
              alt={profile.name}
              width={320}
              height={320}
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-lg transition-transform duration-200 ease-out hover:-translate-y-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
