import { useState } from "react";

function Login() {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async(e)=>{
    e.preventDefault()
     

  }
  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300 w-96 ">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div className="p-2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email ID</legend>
              <input
                type="text"
                name="emailId"
                value={emailId}
                className="input"
                onChange={(e)=>setEmailId(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="input"
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button onClick={handleLogin} className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
