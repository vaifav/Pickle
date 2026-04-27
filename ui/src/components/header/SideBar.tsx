import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
import type { StateProps } from "../../utils/types";
import { DUMMY_PERSON, NAV } from "../../utils/constants";

const SideBar = ({ isMenuOpen, setIsMenuOpen }: StateProps<boolean, "isMenuOpen">) => {
	const closeMenu = () => setIsMenuOpen(false);

	return (
		<div className={`fixed left-0 top-0 z-200 h-dvh w-full md:hidden ${isMenuOpen ? "flex" : "hidden"}`}>
			<div className="flex flex-col w-60 bg-white">
				<div className="flex items-center justify-between h-20 w-full p-3 shadow">
					<h1 className="font-serif font-black text-2xl text-primary-100 tracking-[-0.5px]">
						PickTaste<span>.</span>
					</h1>
					<X onClick={closeMenu} />
				</div>
				<nav className="flex flex-col gap-2 pl-4 pt-4.5 grow font-secondary-sans">
					{NAV.map(({ name, path, Icon }) => {
						return (
							<NavLink
								key={name + path}
								to={path}
								className={({ isActive }) =>
									`relative flex items-center h-12 px-4 rounded-l-full font-medium transition-all  ${isActive ? "bg-black/20 text-primary-200" : "text-gray-600 hover:bg-gray-100"}`
								}>
								{({ isActive }) => (
									<>
										<div className="flex items-center gap-3 *:font-medium *:tracking-[0.2px] *:text-[1rem]">
											<span>{<Icon className="size-5" />}</span>
											<span>{name}</span>
										</div>
										{isActive && (
											<>
												<div className="absolute -top-4 right-0 w-4 h-4 bg-black/20">
													<div className="w-full h-full bg-white rounded-br-full" />
												</div>
												<div className="absolute -bottom-4 right-0 w-4 h-4 bg-black/20">
													<div className="w-full h-full bg-white rounded-tr-full" />
												</div>
											</>
										)}
									</>
								)}
							</NavLink>
						);
					})}
					<div className="flex flex-col justify-end gap-5 py-3 grow">
						<div className="flex items-center gap-5 *:text-secondary-text *:tracking-[0.2px] *:text-[1.1rem]">
							<div className="size-10 rounded-full">
								<img className="size-full object-cover object-center rounded-[inherit]" src={DUMMY_PERSON} alt="avatar" />
							</div>
							<span className="font-medium">Luke Adams</span>
						</div>
						<div className="flex items-center justify-center bg-primary-100 rounded-full py-2 mr-4 *:font-medium *:text-white *:tracking-[0.2px] *:text-[1.1rem]">
							<span>Login</span>
						</div>
					</div>
				</nav>
			</div>
			<div className="bg-black/20 grow" onClick={closeMenu}></div>
		</div>
	);
};

export default SideBar;
