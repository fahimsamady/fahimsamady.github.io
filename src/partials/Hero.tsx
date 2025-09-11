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

  return (
    <section className="section-padding">
      <div className="grid lg:grid-cols-[65%_35%] gap-10 sm:gap-16 md:gap-20 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <div>
            <p className="text-6xl mb-3 font-bold leading-tight">
              <span className="text-onsurface">
                {displayText.substring(0, NAME_START_INDEX)}
              </span>
              <span className="text-primary">
                {displayText.substring(NAME_START_INDEX, NAME_END_INDEX)}
              </span>
              <span className="text-onsurface">
                {displayText.substring(NAME_END_INDEX)}
              </span>
              {showCursor && (
                <span className="inline-block w-2 h-[3.5rem] bg-primary rounded ml-1 animate-blink align-middle mb-3"></span>
              )}
            </p>
            <p className="leading-relaxed">{profile.about}</p>
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
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden">
            <Image
              src={profile.profilePicture}
              alt={profile.name}
              width={320}
              height={320}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
