import Image from "next/image";
import mainLogo from "../../../../public/imgs/mainLogo.svg"

export const NavbarLogo = () => {
  return (
    <Image
      src={mainLogo}
      alt="logo"
      priority
      width={100}
      height={100}
      className="cursor-pointer"
    />
  );
};
