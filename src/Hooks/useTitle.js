import { useEffect } from "react"

// a hook is created for changing the title of UI pages

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - CarryYou`;
    }, [title])
};
export default useTitle;