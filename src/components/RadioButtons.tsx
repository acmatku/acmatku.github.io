import _ from "lodash";

interface RadioButtonsProps {
    buttonIDs: string[];
    buttonText: string[];
    inputElementName: string;
    stateSetter: React.Dispatch<React.SetStateAction<string>>;
}

const RadioButtons = ({buttonIDs, buttonText, inputElementName, stateSetter} : RadioButtonsProps) => {
    if (buttonText && buttonText?.length !== buttonIDs.length) {
        throw "RadioButtons.astro: Passed text length !== IDs length";
    }

    const buttonProps = _.zip(buttonIDs, buttonText);
    
    return (
        <fieldset
            id={`${inputElementName}-baseContainer`}
            className="flex flex-row gap-x-2 mb-2"
        >
            {
                buttonProps.map((btn, idx) => (
                    <div>
                        <input
                            type="radio"
                            id={`${inputElementName}-${btn[0]}`}
                            name={inputElementName}
                            value={btn[0]}
                            className="sr-only peer"
                            onChange={e => stateSetter(e.currentTarget.value)}
                        />
                        <label
                            htmlFor={`${inputElementName}-${btn[0]}`}
                            id={`${inputElementName}-${btn[0]}-label`}
                            className="p-2 border-2 rounded-xl border-slate-950 cursor-pointer peer-checked:cursor-auto bg-slate-900 peer-checked:bg-slate-800 select-none box-border block peer-checked:border-slate-200 peer-focus-visible:bg-blue-300"
                            onFocus={(e) => e.currentTarget.click()}
                        >
                            {btn[1]}
                        </label>
                    </div>
                ))
            }
        </fieldset>
    );
}

export default RadioButtons;