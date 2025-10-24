import React from 'react';
import Image from 'next/image';

// --- Data for the Team Members ---
// In a real application, this would likely come from a CMS or API.
// IMPORTANT: The `imageUrl` should point to images that already have the glowing effect.
const teamData = [
  {
    name: "Omnia Mohieldine Mohamed Ali Hamed",
    company: "Seed Group & The Private Office of Sheikh Saeed bin Ahmed Al Maktoum",
    companyColor: "text-teal-400", // Using a specific color prop for flexibility
    titles: ["Senior Director"],
    imageUrl: "/images/team/3.png", // Using existing team image
    logoUrl: "/images/companies/processed/microsoft.png", // Using existing company logo
  },
  {
    name: "Ankit Lathigara",
    company: "Nasdaq",
    companyColor: "text-teal-400",
    titles: ["AVP Client Services"],
    imageUrl: "/images/team/4.png", // Using existing team image
    logoUrl: "/images/companies/processed/google.png", // Using existing company logo
  },
  {
    name: "Sundas Khalid",
    company: "Google",
    companyColor: "text-teal-400",
    titles: ["Principal Analytics Lead"],
    imageUrl: "/images/team/3.png", // Using existing team image
    logoUrl: "/images/companies/processed/meta.png", // Using existing company logo
  },
  {
    name: "Ahmed Mostafa",
    company: "NVIDIA",
    companyColor: "text-teal-400",
    titles: ["Regional AI Adoption Lead"],
    imageUrl: "/images/team/4.png", // Using existing team image
    logoUrl: "/images/companies/processed/amazon.png", // Using existing company logo
  },
];

// --- Reusable Arrow Icon ---
const ArrowIcon = () => (
  <svg className="w-5 h-5 text-teal-400 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

// --- Reusable Team Member Card Component ---
interface TeamMemberCardProps {
  name: string;
  company: string;
  companyColor: string;
  titles: string[];
  imageUrl: string;
  logoUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, company, companyColor, titles, imageUrl, logoUrl }) => {
  return (
    <div className="group text-left">
      {/* Image and Logo Container */}
      <div className="relative mb-6">
        <Image
          src={imageUrl}
          alt={`Portrait of ${name}`}
          width={500}
          height={500}
          className="w-full object-cover rounded-lg"
        />
        {/* Subtle gradient to ensure logo is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
        {/* Company Logo */}
        <div className="absolute bottom-6 left-6">
          <Image
            src={logoUrl}
            alt={`${company} logo`}
            width={120}
            height={40}
            className="h-8 w-auto object-contain filter brightness-0 invert" // Makes logo white
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="px-1">
        <h3 className="text-lg font-bold text-white uppercase tracking-wider">{name}</h3>
        <p className={`mt-2 font-semibold ${companyColor}`}>{company}</p>
        <div className="text-gray-400 mt-1">
          {titles.map(title => <p key={title}>{title}</p>)}
        </div>
        <div className="mt-4">
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
};

// --- Main Team Section Component ---
const TeamSection: React.FC = () => {
  return (
    <section className="bg-black py-24 px-8">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Meet Our Global Team</h2>
          <p className="text-xl text-gray-400 mt-4">Meet the experts driving our vision forward.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {teamData.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
