const poplogin = (props) => {
  return props.trigger ? (
      <div className="input-form">
        <button className = "buttonClose" onClick={()=>props.setTrigger(false)}><p>X</p></button>
        <div className="input-email">
          <p>Email:</p>
          <input alt="Email" placeholder="example@gmail.com" type="text"></input>
        </div>
        <div className="input-password">
          <p>Password:</p>
          <input alt="Password" placeholder="password" type="text"></input>
        </div>
        <button className = "buttonLogin" ><p>LOGIN</p></button>
        {props.children}
      </div>
  ) : (
    ""
  );
};
export default poplogin;
