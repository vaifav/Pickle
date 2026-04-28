import Divider from "./Divider";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup } from "@/components/ui/field";

const SIZES = ["200g", "250g", "500g", "1kg", "gift set"];
const JarSizeFilter = () => {
	return (
		<div className="pt-5">
			<Divider text="jar size" />
				<FieldGroup className="grid grid-cols-2 gap-1">
					{SIZES.map((size) => {
						return (
							<Field orientation="horizontal">
								<Checkbox id={size} className="peer hidden" />
								<label
									htmlFor={size}
									className="capitalize border w-full py-2 rounded-lg border-secondary-text/20 text-center text-secondary-text transition-colors duration-100 cursor-pointer text-[12px] hover:border-primary-100/80 hover:bg-primary-50/30 hover:text-primary-100/80 peer-data-[state=checked]:border-primary-100/80 peer-data-[state=checked]:bg-primary-50/30 peer-data-[state=checked]:text-primary-100/80">
									{size}
								</label>
							</Field>
						);
					})}
				</FieldGroup>
			</div>
	);
};

export default JarSizeFilter;
