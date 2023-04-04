'use client'

import { useRef } from "react";
import { Button, Highlight } from "./button"
import { KeyboardIllustration } from "./illustrations/keyboard"

const shortcuts = [
    { text: "Opens command line", keys: "⌘k" },
    { text: "Assign issue to me", keys: "i" },
    { text: "Assign issue to", keys: "a" },
    { text: "Change issue status", keys: "s" },
    { text: "Set issue priority", keys: "p" },
    { text: "Add issue labels", keys: "l" },
    { text: "Set due date", keys: "⇧d" },
    { text: "Set parent issue", keys: "⇧⌘p" },
    { text: "Add sub-issue", keys: "⇧⌘o" },
    { text: "Create new issue", keys: "c" },
    { text: "Create new issue from template", keys: "⌥c" },
    { text: "Move to project", keys: "⇧p" },
  ];

export const Keyboard =() => {

    const wrapperRef = useRef<HTMLDivElement>(null);

    const onButtonClick = (ev: React.MouseEvent<HTMLButtonElement>) =>{
        ev.preventDefault();
        if(!wrapperRef.current) return;
        
        wrapperRef.current.scrollTo({
            left: ev.currentTarget.offsetLeft - wrapperRef.current.clientWidth / 2,
            behavior: "smooth"
        });
    }

    return (
        <>
            <div className="mask-keyboard h-full w-full">
                <KeyboardIllustration />
            </div>
            <div className="overflow-hidden min-h-[4rem] mb-8 w-full">
                <div
                    ref={wrapperRef}
                    className="flex overflow-auto max-w-full h-[6rem] gap-2 mask-keyboardtexts snap-x snap-mandatory pb-8">
                    {
                        shortcuts.map((shortcut) => (
                            <Button
                                key={shortcut.text}
                                onClick={onButtonClick} 
                                className="shrink-0 snap-center last:mr-[50vw] first:ml-[50vw]"
                                href="" 
                                variant = "secondary"
                            >
                                <Highlight>{shortcut.keys}</Highlight>
                                {shortcut.text}
                            </Button>
                        ))
                    }
                </div>
            </div>
        </>
    )
}