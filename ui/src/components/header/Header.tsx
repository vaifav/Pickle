import { Menu, Search, ShoppingBag, User } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import { ENDPOINTS } from "../../utils/constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocus, setIsSearchFocus] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const focusSearch = () => setIsSearchFocus(true);
  const unFocusSearch = () => setIsSearchFocus(false);

  return (
    <>
      <header className={`wrapper flex items-center justify-between h-20 w-full p-2 fixed inset-0 z-100 bg-white/50 backdrop-blur font-secondary-sans ${!isMenuOpen && "shadow"}`}>
        <div>
          <h1 className="font-serif font-black text-xl text-primary-100 tracking-[-0.5px]">
            PickTaste<span>.</span>
          </h1>
        </div>
        <div className="flex gap-3 justify-end items-center grow md:grow-0">
          <div className={`md:hidden ${isMenuOpen && "hidden"}`}>
            <div className={`flex gap-3 ${isSearchFocus && "hidden"}`}>
              <Search className="size-5" onClick={focusSearch} />
              <Menu className="size-5" onClick={openMenu} />
            </div>
            <div className="pl-5">
              <SearchBar 
                isMobile
                unFocusSearch={unFocusSearch} 
                className={`items-center bg-gray-100 px-1.75 py-2 rounded-full md:hidden ${isSearchFocus ? "flex" : "hidden"}`} 
              />
            </div>
          </div>
          <div className="hidden items-center gap-6 *:font-medium *:tracking-[0.2px] *:text-secondary-text *:text-[0.875rem] md:flex">
            <NavLink to={ENDPOINTS.HOME}>Home</NavLink>
            <NavLink to={ENDPOINTS.SHOP}>Shop</NavLink>
            <NavLink to={ENDPOINTS.OUR_STORY}>Our Story</NavLink>
            <NavLink to={ENDPOINTS.CONTACT}>Contact</NavLink>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <SearchBar 
            unFocusSearch={unFocusSearch} 
            className={`hidden items-center bg-gray-100 px-3 py-2 rounded-full lg:flex ${isSearchFocus && "md:flex"}`} 
          />
          <div className={`hidden items-center gap-4 border-l pl-5 ml-2 border-gray-200 md:flex ${isSearchFocus && "md:hidden"}`}>
            <Search className="size-5 lg:hidden" onClick={focusSearch} />
            <NavLink to={ENDPOINTS.CART}>
              <ShoppingBag className="size-5" />
            </NavLink>
            <NavLink to={ENDPOINTS.ACCOUNT}>
              <User className="size-5" />
            </NavLink>
            <button className="bg-primary-100 text-white rounded-full px-4 py-1">Login</button>
          </div>
        </div>
      </header>

      <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default Header;