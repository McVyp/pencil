import { Features } from "../features"
export const IssueTracking = () => {
    return (
        <Features title="Issue tracking you'll enjoy using">
            <Features.Main 
                text="Create tasks in seconds, discuss issues in context, and breeze through your work in views tailored to you and your team."
                image="/img/issue.webp" 
            />
            {/* <Features.Grid />
            <Features.Cards /> */}
        </Features>
    )
}