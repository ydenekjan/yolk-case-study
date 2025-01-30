import Image from "next/image";
import headerBg from "../../../public/header-bg.jpg";

const HeaderImage = () => {
  return (
    <div className="h-full w-full overflow-hidden absolute">
      {/* Background Image */}
      <Image
        src={headerBg}
        className="object-cover h-full object-left opacity-30"
        alt="Pokémon background"
        fill
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default HeaderImage;
