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
];

export const CommandMenu = () => {
    return (
        <div className="rounded-lg bg-transparent-white border border-transparent-white w-[90vw] max-w-[64rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-start"
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
                    commandOptions.map(({label, icon: Icon}) => (
                        <button
                            key={label}
                            className="px-5 flex h-[4.6rem] items-center hover:bg-white/[0.005] w-full">
                            <Icon />
                            <span className="ml-3">{label}</span>
                        </button>
                    ))
                }
            </div>
        </div>
 )
}