import type { CommonSectionPropsType } from "../../utils/types";
import { NavLink } from "react-router-dom";
import SectionDivider from "../hero/SectionDivider";
import { ChevronRight } from "lucide-react";

const CommonSection = ({ Component, text, dividerText, linkText = "Browse all", emphasizedText = "", lineBreak = false, hasLink = true }: CommonSectionPropsType) => {
	return (
		<section className="wrapper flex flex-col gap-6 py-10">
			<div className="flex flex-col gap-3 justify-between md:flex-row md:items-baseline-last">
				<div>
					<SectionDivider text={dividerText} />
					<h1 className="text-secondary font-bold font-serif leading-[1.1] tracking-[-1px] text-[clamp(36px,4vw,52px)]">
						{text}
						{lineBreak && <br />}
						{emphasizedText && <em className="text-primary-100">{emphasizedText}</em>}
					</h1>
				</div>
				{hasLink && (
					<div>
						<NavLink to="" className="flex items-center gap-3 w-fit border-b border-primary-100 text-primary-100 font-medium font-secondary-sans pb-0.5 text-[14px]">
							<span>{linkText}</span> <ChevronRight className="size-4" />
						</NavLink>
					</div>
				)}
			</div>
            <Component />
		</section>
	);
};

export default CommonSection;
