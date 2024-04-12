import { useEffect } from "react"

export const HeaderUpdater = ({ title }) => {
  useEffect(() => {
    document.querySelector('title').innerText = title
  }, [])
  return (<>
  </>
  )
}
