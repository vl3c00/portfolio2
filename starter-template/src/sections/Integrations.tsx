import Tag from "@/components/Tag";
import figmaIcon from "@/assets/images/10001.png";
import notionIcon from "@/assets/images/636A166778.png";
import slackIcon from "@/assets/images/das.png";
import relumeIcon from "@/assets/images/636A1678.png";
import framerIcon from "@/assets/images/636A1mkl678.png";
import githubIcon from "@/assets/images/636A21678.png";
import IntegrationColumn from "@/components/IntegrationsColumn";

const integrations = [
  { name: "ZCHPC", icon: figmaIcon, description: "ZCHPC is a business company for innovation accelerations." },
  { name: "GurdianGo", icon: notionIcon, description: "GuardianGo is a company that ensures safe travels for uber clients to families and friends." },
  { name: "Yogine", icon: slackIcon, description: "Basic finance management platform" },
  { name: "Finovatex", icon: relumeIcon, description: "A cutting-edge wealth management and investment strategies" },
  { name: "CryptoFlex", icon: framerIcon, description: "A blockchain, decentralised financial banking platform." },
  { name: "NeowFianse", icon: githubIcon, description: "A secure, and business banking." }
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
  return (
    <section id="integrations" className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <Tag>Partners</Tag>
            <h2 className="text-6xl font-medium mt-6">
  Plays well with{" "}
  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
    others
  </span>
</h2>

            <p className="text-white/50 mt-4 text-lg">
              Carlos Alec seamlessly connects with global leaders that drive innovation
            </p>
          </div>
          <div>
            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <IntegrationColumn integrations={integrations} />
              <IntegrationColumn integrations={integrations.slice().reverse()} className="hidden md:flex" reverse />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
