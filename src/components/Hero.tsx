"use client";

import Image from "next/image";
import { Mail, Download, Linkedin, Github, Phone } from "lucide-react";
import { getProfile } from "@/lib/data";

const Hero = () => {
  const profile = getProfile();

  return (
    <section className="section-padding">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Side */}
        <div className="space-y-8">
          <h1 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Portfolio
          </h1>

          <div>
            <p className="text-2xl mb-3 lg:text-2xl font-bold text-gray-900 leading-tight">
              Hello, I&apos;m {profile.name}.
            </p>
            <p className="text-base leading-relaxed">{profile.about}</p>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 text-blue-800"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 text-gray-900"
            >
              <Github size={22} />
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="hover:text-gray-700 text-green-600"
            >
              <Phone size={22} />
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
          <div className="w-80 h-80 rounded-2xl overflow-hidden">
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
