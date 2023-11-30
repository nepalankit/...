"use client";
import { User } from "@prisma/client";
import Wrapper from "./Wrapper";
import Logo from "./navbar/Logo";
import Search from "./navbar/Search";
import UserMenu from "./navbar/UserMenu";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className=" py-4 border-b-[1px]">
        <Wrapper>
          <div
            className="flex
            flex-row 
            items-center
             justify-between
              gap-3
               md:gap-0
 
  
  "
          >
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Navbar;
