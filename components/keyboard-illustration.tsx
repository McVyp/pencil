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

    const illustrationWrapperRef = useRef<HTMLDivElement>(null);

    const onButtonClick = (ev: React.MouseEvent<HTMLButtonElement>, keys: string) =>{
        ev.preventDefault();
        if(!wrapperRef.current) return;
        
        wrapperRef.current.scrollTo({
            left: ev.currentTarget.offsetLeft - wrapperRef.current.clientWidth / 2,
            behavior: "smooth"
        });

        if(!illustrationWrapperRef.current) return;

        illustrationWrapperRef.current.querySelectorAll('.active').forEach(el => el.classList.remove("active"));
        
        const keyArray = keys.split("");
        const keyElements = keyArray.map((key) => illustrationWrapperRef.current?.querySelector(`[data-key="${key}"]`))

        keyElements.forEach((element) => element?.classList.add("active"))
    }

    return (
        <>
            <div
                ref={illustrationWrapperRef} 
                className="mask-keyboard h-full w-full">
                <KeyboardIllustration />
            </div>
            <div className="overflow-hidden min-h-[4rem] mb-8 w-full my-7">
                <div
                    ref={wrapperRef}
                    className="flex overflow-auto max-w-full h-[6rem] gap-2 mask-keyboardtexts snap-x snap-mandatory pb-8">
                    {
                        shortcuts.map((shortcut) => (
                            <Button
                                key={shortcut.text}
                                onClick={(ev) =>onButtonClick(ev, shortcut.keys)} 
                                className="shrink-0 snap-center last:mr-[50vw] first:ml-[50vw]"
                                href="" 
                                variant = "secondary"
                            >
                                <Highlight
                                    className="uppercase"
                                >
                                    {shortcut.keys}
                                </Highlight>
                                {shortcut.text}
                            </Button>
                        ))
                    }
                </div>
            </div>
        </>
    )
}