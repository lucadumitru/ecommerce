import { Container } from "@/components/ui";
import { infoItems } from "@/data";

import { InfoItem } from "./InfoItem/InfoItem";

type BgVariants = "gray";

interface InfoProps {
  bg?: BgVariants;
}

export const Info: React.FC<InfoProps> = ({ bg }) => (
  <section className={`${bg === "gray" && "bg-dark-white"}`}>
    <Container className="flex flex-wrap items-center justify-around gap-x-2 gap-y-5 py-[25px] tablet:pb-[45px] tablet:pt-[60px]">
      {infoItems.map((infoItem, index) => (
        <InfoItem key={index} icon={infoItem.icon} label={infoItem.label} text={infoItem.text} />
      ))}
    </Container>
  </section>
);
