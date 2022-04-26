import { useState } from "react";

export const ToggleComponent = () => {

    const [toggled, setToggled] = useState<boolean>(false);

    function getToggledText(toggled: boolean): string {
        if (toggled)
        {
            return "Enabled";
        }
        else
        {
            return "Disabled";
        }
    }

    return (
        <>
            <button data-testid='toggleButton' onClick={() => setToggled(!toggled)}>Click me!</button>
            {
                <h3 data-testid='toggleState'>{getToggledText(toggled)}</h3>
            }
        </>
   );
}