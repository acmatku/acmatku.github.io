import { useEffect, useState } from "react";
import type { ArchiveItem, ArchiveYear } from "../data/archive";
import _ from "lodash";

interface ArchiveListingProps {
    buttonIDs: string[];
    buttonText: string[];
    inputElementName: string;
    items: ArchiveItem[];
}

const ArchiveListing = ({buttonText, buttonIDs, inputElementName, items} : ArchiveListingProps) => {
    const [yearFilter, setYearFilter] = useState("All");

    useEffect(() => {
        if (buttonText && buttonText?.length !== buttonIDs.length) {
            throw "RadioButtons.astro: Passed text length !== IDs length";
        }
    }, []);

    const buttonProps = _.zip(buttonIDs, buttonText);

    const radioChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {

        console.log("Change to", e.currentTarget.value);
        setYearFilter(e.currentTarget.value);
    }

    return (<>

        <div 
            id={`${inputElementName}-baseContainer`}
            className="flex flex-row gap-x-2"
        >
            {
                buttonProps.map(btn => (
                    <span>
                        <input
                            type="radio"
                            id={`${inputElementName}-${btn[0]}`}
                            name={inputElementName}
                            value={btn[0]}
                            className="hidden peer"
                            onChange={radioChangeEvent}
                        />
                        <label
                            htmlFor={`${inputElementName}-${btn[0]}`}
                            id={`${inputElementName}-${btn[0]}-label`}
                            className="p-2 border rounded-xl cursor-pointer peer-checked:cursor-auto peer-checked:bg-green-400 select-none"
                        >
                            {btn[1]}
                        </label>
                    </span>
                ))
            }
        </div>

        {items.filter(e => e.year === yearFilter).map((e, idx) => (
            <div key={idx}>{e.name}</div> 
        ))}

    </>);

}

export default ArchiveListing;