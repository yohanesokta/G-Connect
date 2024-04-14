import { useDispatch } from "react-redux"
import { setClass } from "../../../store/slice/class"

export const ClassRender = ({ data }) => {
  const dispatch = useDispatch()
  const SettingClass = () => {
    dispatch(setClass(data))
    return (<></>)
  }
  return (
    <div className="class" onClick={SettingClass}>
      <div className='class-main'>
        <header>
          <h4>{data.name}</h4>
          <p>{data.desc}</p>
        </header>
        <div className="bottom-class">
          <p>{"2 - 10 - 2024"}</p>
          <i className="fa-solid fa-users"></i>
        </div>
      </div>
    </div>
  )
}
