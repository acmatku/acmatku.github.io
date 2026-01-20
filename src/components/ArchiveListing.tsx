import { useEffect, useState} from "react";
import { ALL_ENTRY_TYPES, ARCHIVE_YEARS, type ArchiveEntryType, type ArchiveItem, type ArchiveYear } from "../data/archive";
import RadioButtons from "./RadioButtons";

interface ArchiveListingProps {
    buttonIDs: string[];
    buttonText: string[];
    inputElementName: string;
    items: ArchiveItem[];
}

const ArchiveItemDisplay = ({ item } : { item: ArchiveItem }) => {

    return (
        <div className="bg-slate-900 p-4 rounded-lg flex flex-col gap-y-4">
            <div>
                <div className="flex flex-row justify-between flex-wrap">
                    {/* Name */}
                    <h4 className="mr-2 text-xl">{item.name}</h4>
                    <div className="flex flex-row gap-x-4">
                        {/* Type */}
                        {item.entryType ?
                        <p>
                            🗄️ in {item.entryType}
                        </p> : <></>}
                        {/* Date */}
                        <p>
                            <span className="mr-2">🗓️</span>
                            {item.date.toLocaleDateString()}
                        </p>
                    </div>
                </div>
                {/* Description */}
                {item.description ?
                <p className="text-slate-400">{item.description}</p> : <></>}
            </div>
            {/* Links */}
            {item.links && item.links.length > 0 ?
            <div>
                <h5>Associated Links:</h5>
                <ul>
                    {item.links.map((e, idx) => <li key={idx}>
                        <a
                            href={e.url.href}
                            referrerPolicy="no-referrer"
                            rel="noreferrer"
                            className="underline"
                        >{e.name}</a>
                        <span
                            className="text-slate-600 ml-2"
                        >at {e.url.hostname.replace(/^www\./, "")}</span>
                    </li>)}
                </ul>
            </div> : <></>}
            {/* Tags */}
            {item.tags && item.tags.length > 0 ?
            <div className="flex flex-row gap-x-2 flex-wrap">
                <p>Tags:</p>
                {item.tags?.map((e, idx) => <p key={idx} className="p-1 bg-slate-600 rounded-md">{e}</p>)}
            </div> : <></>}
        </div>
    );
}

const ArchiveListing = ({ buttonText, buttonIDs, inputElementName, items }: ArchiveListingProps) => {
    const defaultYearFilterState = ARCHIVE_YEARS.at(-1) || "All";
    const [yearFilter, setYearFilter] = useState<ArchiveYear | "All">(defaultYearFilterState);
    const [entryTypeFilter, setEntryTypeFilter] = useState<ArchiveEntryType | "All">("All");
    const [filteredItemList, setFilteredItemList] = useState<ArchiveItem[]>([]);

    // After first render
    useEffect(() => {
        const inputs = document.querySelectorAll(`#${inputElementName}-baseContainer input`);
        const lastInput = (Array.from(inputs) as HTMLInputElement[]).at(-1);
        if (lastInput) {
            lastInput.checked = true;
        }

        const entryTypeInput = document.querySelector(`#entryTypeRadio-baseContainer input[value="All"]`) as HTMLInputElement;
        if (entryTypeInput) {
            entryTypeInput.checked = true;
        }
    }, []);

    useEffect(() => {
        setFilteredItemList(items
            .filter(e => yearFilter === "All" || e.year === yearFilter)
            .filter(e => entryTypeFilter === "All" || e.entryType === entryTypeFilter)
        )
    }, [yearFilter, entryTypeFilter])

    return (
        <section className="archiveLising">
            <div className="flex flex-row justify-between flex-wrap">
                <RadioButtons
                    buttonIDs={buttonIDs}
                    buttonText={buttonText}
                    inputElementName={inputElementName}
                    stateSetter={setYearFilter}
                />
                <RadioButtons
                    buttonIDs={["All"].concat(ALL_ENTRY_TYPES)}
                    buttonText={["All"].concat(ALL_ENTRY_TYPES)}
                    inputElementName="entryTypeRadio"
                    stateSetter={setEntryTypeFilter}
                />
            </div>
            <div className="flex flex-col gap-y-4">
                { 
                    filteredItemList.length > 0 ?
                    filteredItemList.map((e, idx) => <ArchiveItemDisplay item={e} key={idx} />) :
                    <p className="text-2xl text-center my-8">
                        No entries match this query.
                    </p>
                }
            </div>
        </section>
    );

}

export default ArchiveListing;