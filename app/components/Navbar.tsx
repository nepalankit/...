import Wrapper from "./Wrapper";
import Logo from "./navbar/Logo";
import Search from "./navbar/Search";

export default function Navbar() {
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
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
