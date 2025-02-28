import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

const features = [
  "Penetration testing",
  "Vuln Assessments",
  "Incidence response",
  "SIEM",
  "SOAR",
  "Network Security",
  "Data Security",
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Specialities</Tag>
        </div>

        <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
          Where talent meets{" "}
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            reality
          </span>
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="RoyallNorr Fashion Designs"
            description="The most elite fashion brand that brings in the best styles."
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="z-40">
                <Image src={avatar1} alt="Avatar 1" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-indigo-500">
                <Image src={avatar2} alt="Avatar 2" className="rounded-full z-30" />
              </Avatar>
              <Avatar className="-ml-6 border-amber-500">
                <Image src={avatar3} alt="Avatar 3" className="rounded-full z-20" />
              </Avatar>
              <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                  <Image
                    src={avatar4}
                    alt="Avatar 4"
                    className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                  />
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span className="size-1.5 rounded-full bg-white inline-flex" key={i}></span>
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Threat hunting and SIEM"
            description="Proactively searching for and identifying potential security threat in organisations."
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center">
                I&apos;ve achieved{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                  <span>incredible</span>
                  <video
                    src="/assets/gif-incredible.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                  />
                </span>{" "}
                growth this year
              </p>
            </div>
          </FeatureCard>

          <FeatureCard
            title="More than 10 companies"
            description="I have identified vulns in big companies for their applications, and networks."
            className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto group"
          >
            <div className="aspect-video flex items-center justify-center gap-4">
              <Key
                className="w-28 outline outline-2 
              outline-offset-4 outline-transparent  
              group-hover:outline-amber-400 transition-all 
              duration-500 group-hover:translate-y-1"
              >
                Factcheck
              </Key>
              <Key
                className="outline outline-2 
              outline-offset-4 outline-transparent 
              group-hover:outline-amber-400 transition-all 
              duration-500 group-hover:translate-y-1 delay-150"
              >
                for
              </Key>
              <Key
                className="outline outline-2
              outline-offset-4 outline-transparent 
              group-hover:outline-amber-400 transition-all 
              duration-500 group-hover:translate-y-1 delay-300"
              >
                you
              </Key>
            </div>
          </FeatureCard>
        </div>

        {/* Features list alignment fix */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
            >
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
