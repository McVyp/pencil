'use client'

import { Button, Highlight } from "./button"
import { KeyboardIllustration } from "./illustrations/keyboard"

export const Keyboard =() => {
    return (
        <>
            <div className="mask-keyboard h-full w-full">
                <KeyboardIllustration />
            </div>
            <div>
                <Button onClick={() => {}} href="" variant = "secondary">
                    <Highlight>Create new issue</Highlight>
                </Button>
            </div>
        </>
    )
}