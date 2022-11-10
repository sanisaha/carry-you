import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - CarryYou`;
    }, [title])
};
export default useTitle;