
export const ClassRender = ({ name = "Loading ..", desc = "Loading ..", time = "Loading .." }) => {
  return (
    <div className="class">
      <div className='class-main'>
        <header>
          <h4>{name}</h4>
          <p>{desc}</p>
        </header>
        <div className="bottom-class">
          <p>{time}</p>
          <i className="fa-solid fa-users"></i>
        </div>
      </div>
    </div>
  )
}
