import React from 'react'


function MailList() {
  return (
    <div className='third-section'>
      <h1>Ready to start?</h1>
      <p>Get the latest jobs direct to your inbox</p>
      <form>
        <p style={{fontSize:"12px"}}><span>*</span>indicates required</p>
        <label>Email Address <span>*</span></label>
        <input placeholder='enter your email...' required/>
        <br/>
        <br/>
        <button>Join Alert List</button>
      </form>
    </div>
  )
}

export default MailList;
