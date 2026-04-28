import Divider from "./Divider";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

const LEVELS = ["mild", "medium", "hot"];
const SpiceLevelFilter = () => {
	return (
		<div className="pt-5">
			<Divider text="spice level" />
			<FieldGroup>
				{LEVELS.map((level,index) => {
					return (
						<Field orientation="horizontal">
							<Checkbox className="cursor-pointer" id={level+index} />
							<FieldLabel className="flex items-center justify-between cursor-pointer text-secondary text-[14px]" htmlFor={level+index}>
								<span className="capitalize">{level}</span>
                                <div className="flex items-center gap-0.5">
                                    {
                                        LEVELS.map((_,dotIndex)=>{
                                            return <span className={`size-2 rounded-full ${dotIndex<=index? 'bg-red-500':'bg-secondary-text/20'}`}></span>
                                        })
                                    }
                                </div>
							</FieldLabel>
						</Field>
					);
				})}
			</FieldGroup>
		</div>
	);
};

export default SpiceLevelFilter;
