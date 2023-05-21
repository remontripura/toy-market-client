import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Gac-Gonow | ${title}`;
    }, [title])
}

export default useTitle