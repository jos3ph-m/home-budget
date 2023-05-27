import {Form} from 'react-router-dom'

function Intro() {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is the gateway to financial freedom.  Start your journey today.
        </p>
        <Form method="post">
          <input 
            type="text" 
            name="userName" 
            required 
            placeholder='What is your name?' 
            aria-label="Your Name" 
            autoComplete='given-name'
          />
        </Form>
      </div>
    </div>
  )
}

export default Intro