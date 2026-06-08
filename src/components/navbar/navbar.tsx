import CallYellowBtn from "../ui/buttons/call-yellow-btn";
import WhatsappButton from "../ui/buttons/whatsapp-btn";
import { NavbarLogo } from "./components/nav-logo";
import { NavbarMenu } from "./components/nav-menu";

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-s-0 w-full z-50 shadow-2xl py-4 bg-white">
      <div className="container flex items-center justify-between">
        <NavbarLogo />
        <NavbarMenu />
        <div className="hidden items-center gap-2 lg:flex">
          <WhatsappButton showText={true} iconSize={25} />
          <CallYellowBtn showText={true} iconSize={25} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
