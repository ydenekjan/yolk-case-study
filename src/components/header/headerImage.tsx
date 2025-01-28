import Image from "next/image";
import headerBg from "../../../public/header-bg.jpg";

const HeaderImage = () => {
  return (
    <div className={"h-full w-full overflow-hidden absolute -z-30"}>
      <Image
        src={headerBg}
        className={"object-cover h-full object-left opacity-30 -z-10"}
        alt={"Pokémon background"}
        fill
      />
      <div
        className={
          "absolute top-0 left-0 h-full w-full z-0 bg-gradient-to-t from-background to-transparent"
        }
      ></div>
    </div>
  );
};

export default HeaderImage;
