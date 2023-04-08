"use client"
import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";
import { AddLabels, AssignToIcon, BacklogIcon, ChangePriorityIcon, ChangeStatusIcon, DoneIcon, HighIcon, InProgressIcon, LabelIcon, LowIcon, MediumIcon, NoPriorityIcon, PersonIcon, TodoIcon, UrgentIcon } from "./icons/command";

const commandOptions =[
    {
        label: "Assign to...",
        icon: AssignToIcon,
        subOptions:[
            {
                label: 'lye',
                icon: PersonIcon
            },
            {
                label: 'Clementine',
                icon: PersonIcon
            },
            {
                label: 'Ayle',
                icon: PersonIcon 
            }
        ],
    },
    {
        label: "Change status...",
        icon: ChangeStatusIcon,
        subOptions:[
            {
                label: 'Backlog',
                icon: BacklogIcon
            },
            {
                label: 'Todo',
                icon: TodoIcon
            },
            {
                label: 'In Progress',
                icon: InProgressIcon
            },
            {
                label: 'Done',
                icon: DoneIcon
            }
        ],
    },
    {
        label: "Change priority...",
        icon: ChangePriorityIcon,
        subOptions:[
            {
                label: 'No priority',
                icon:  NoPriorityIcon
            },
            {
                label: 'Urgent',
                icon: UrgentIcon
            },
            {
                label: 'High',
                icon: HighIcon 
            },
            {
                label: 'Medium',
                icon: MediumIcon
            },
            {
                label: 'Low',
                icon: LowIcon 
            }
        ],
    },
    {
        label: "Add labels...",
        icon: AddLabels,
        subOptions:[
            {
                label: 'Bug',
                icon: <LabelIcon type="bug"/>
            },
            {
                label: 'Feature',
                icon: <LabelIcon type="feature"/>
            },
            {
                label: 'Improvement',
                icon: <LabelIcon type="improvement" /> 
            }
        ],
    },
] as const;

export const CommandMenu = () => {

    const commandMenuRef = useRef<HTMLDivElement>(null)
    const [opened, setOpened] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    useEffect(()=>{
        const toggleCommandMenu = (e:MouseEvent) =>{
            const clickedOutside = !commandMenuRef.current?.contains(e.target as Node)
            setOpened(clickedOutside? false: true)
        };

        window.addEventListener('click',toggleCommandMenu);

        return () =>{
            window.removeEventListener('click',toggleCommandMenu);
        }
    },[])

    const currentOtipns = useMemo(() => {
        const options = selectedOption === null ? commandOptions : commandOptions[selectedOption].subOptions;
        return options;
    },[selectedOption]);

    return (
        <div 
            ref={commandMenuRef}
            className={classNames("rounded-lg bg-transparent-white border border-transparent-white w-[90vw] max-w-[64rem] absolute left-1/2 -translate-x-1/2  flex flex-col items-start transition-[transform,opacity]",
            opened && "-translate-y-[2.4rem] opacity-100 opened",
            !opened && 'translate-y-[12.8rem] opacity-60'
            )}
        >
            <span className="bg-white/[0.05] text-xs px-2 leading-10 text-white/50 ml-4 mt-2">
                LIN-111 Walkway lightning
            </span>
            <input 
                className="text-lg bg-transparent p-5 w-full outline-none" 
                placeholder="Type a command or search..." 
            />
            <div className="flex flex-col text-sm text-off-white w-full">
                {
                    commandOptions.map(({label, icon: Icon, subOptions}, index) => (
                        <button
                            key={label}
                            className="px-5 flex h-[4.6rem] items-center hover:bg-white/[0.005] w-full"
                            onClick={() =>{
                                setSelectedOption(subOptions? index: null)
                            }}
                        >
                            <Icon />
                            <span className="ml-3">{label}</span>
                        </button>
                    ))
                }
            </div>
        </div>
 )
}