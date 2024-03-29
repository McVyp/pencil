import Link from "next/link"
import { cva, VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import classNames from "classnames";

// interface ButtonProps extends VariantProps<typeof buttonClasses>,
//     AnchorHTMLAttributes<HTMLAnchorElement>{
//     children: React.ReactNode;
//     href: string;
// }

type ButtonBaseProps =  VariantProps<typeof buttonClasses> & {
    children: React.ReactNode;
}

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    href?: never;
}

type ButtonProps = ButtonBaseProps & (ButtonAsAnchorProps | ButtonAsButtonProps)

const buttonClasses = cva('rounded-full inline-flex items-center',{
    variants: {
        variant:{
            primary:['bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shawdow, text-shadow]', '[&_.highlight]:ml-2'],
            secondary:['text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in',
            '[&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2',
        ]
        },
        size: {
            small: 'text-xs px-3 h-7',
            medium: 'text-md px-4 h-8',
            large: 'text-lg px-6 h-12',
        },
        
    },
    defaultVariants:{
        variant: 'primary',
        size: 'medium',
    },
});

export const Highlight = ({children, className}:{children:React.ReactNode, className?: string}) => (
    <span className={classNames("highlight", className)}>{children}</span>
)

export const Button = ({
    children, 
    variant, 
    size,
    ...props
}: ButtonProps) => {
    const classes = buttonClasses({ variant, size, className: props.className });
    if ('href' in props && props.href !== undefined) {
        return (
            <Link 
                {...props} 
                className={classes} 
            >
                {children}
            </Link>
          )
    }
    return (
        <Button
            {...props} 
            className={classes} 
        >
            {children}
        </Button>
      )
}
