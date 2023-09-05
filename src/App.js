import React, { useState } from 'react'
import axios from 'axios';
import './App.css';

const App = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [highest, setHighest] = useState("");
  const [institute, setInstitute] = useState("");
  const [study, setStudy] = useState("")
  const [experience, setExperience] = useState("");
  const [instituteCanada, setInstituteCanada] = useState("");
  const [programCanada, setProgramCanada] = useState("");
  const [country, setCountry] = useState("");
  const [future, setFuture] = useState("");
  const [listening, setListening] = useState("");
  const [reading, setReading] = useState("");
  const [speaking, setSpeaking] = useState("");
  const [writing, setWriting] = useState("");
  const [payToogle, setPayToogle] = useState("");
  const [pay, setPay] = useState("");
  const [gicToogle, setGicToogle] = useState("");
  const [gic, setGic] = useState("");
  const [loading, setLoading] = useState(false);


  const handleBlur = (e) => {
    e.target.value === '' ? e.target.nextSibling.innerText = "fill this field" : e.target.nextSibling.innerText = ""
  }

  const handleSubmit = () => {
    if (email === "" || name === "" || age === "" || highest === "Choose" || highest === "" ||
      institute === "" || study === "" || experience === "" || instituteCanada === "" ||
      programCanada === "" || country === "" || future === "" || listening === "" ||
      reading === "" || speaking === "" || writing === "" || payToogle === "" ||
      pay === "" || gicToogle === "" || gic === "") {
      alert("fill all the fields")
    }
    else {
      setLoading(true)
      let details = {
        email,
        name,
        age,
        highest,
        institute,
        study,
        experience,
        instituteCanada,
        programCanada,
        country,
        future,
        listening,
        reading,
        speaking,
        writing,
        payToogle,
        pay,
        gicToogle,
        gic,
      }
      axios.post("http://localhost:4000/", details).then(res => {
        if (res.data.status === "ok") {
          alert("form submitted successfully");
          window.location.reload(false);
        }
        else {
          alert("error in submitting");
        }
        setLoading(false);
      })
    }
  }

  return (
    <>
      <div className='header'>
        <img className='logo' src={require('./asserts/logo.png')} alt='logo' />
      </div>

      <div className='content'>
        <p className='c-title'>Customized SOP Generator</p>
        Fill this questionnaire for the student. After submitting, you will receive an email at the email address that you have provided with a Statement of Purpose customized for you. You can use and modify that as per your needs.<br />
        If you would like to get it edited, reviewed, or drafted by our experts, you can get in touch with us: <a href='https://effizient-immigration-inc.square.site/s/shop'>https://effizient-immigration-inc.square.site/s/shop</a>
      </div>

      <div className='form'>
        <div className='two-box'>
          <div className='box'>
            <label>Email *</label>
            <input type="text" placeholder='Your Answer' onBlur={(e) => { handleBlur(e) }} onChange={(e) => setEmail(e.target.value)} />
            <p className='danger'>&nbsp;</p>
          </div>
          <div className='box'>
            <label>Full Name *</label>
            <input type="text" placeholder='Your Answer' onBlur={(e) => { handleBlur(e) }} onChange={(e) => setName(e.target.value)} />
            <p className='danger'>&nbsp;</p>
          </div>
        </div>

        <div className='two-box'>
          <div className='box'>
            <label>Age *</label>
            <input type="text" placeholder='Your Answer' onBlur={(e) => { handleBlur(e) }} onChange={(e) => { setAge(e.target.value) }} />
            <p className='danger'>&nbsp;</p>
          </div>
          <div className='box'>
            <label>Highest Level of Education *</label>
            <select onChange={(e) => { setHighest(e.target.value) }} onBlur={(e) => { e.target.value === "Choose" ? e.target.nextSibling.innerText = "fill this field" : e.target.nextSibling.innerText = "" }}>
              <option>Choose</option>
              <option>Grade 12</option>
              <option>Diploma</option>
              <option>Bachelors Degree</option>
              <option>Masters Degree</option>
              <option>PhD</option>
            </select>
            <p className='danger'>&nbsp;</p>
          </div>
        </div>

        <div className='two-box'>
          <div className='box'>
            <label>Institute where you completed your highest level of education *</label>
            <input type="text" placeholder='Your Answer' onBlur={(e) => { handleBlur(e) }} onChange={(e) => { setInstitute(e.target.value) }} />
            <p className='danger'>&nbsp;</p>
          </div>
          <div className='box'>
            <label>What did you study *</label>
            <input type="text" placeholder='Your Answer' onBlur={(e) => { handleBlur(e) }} onChange={(e) => setStudy(e.target.value)} />
            <p className='danger'>&nbsp;</p>
          </div>
        </div>

        <div className='one-box'>
          <div className='box'>
            <lable className='para'>Do you have any relevant work experience? *
              <br />Write None if no work experience. Provide the following details if yes:
              <br />&nbsp;&nbsp;&nbsp;&nbsp;1. Job Title
              <br />&nbsp;&nbsp;&nbsp;&nbsp;2. Company Name
              <br />&nbsp;&nbsp;&nbsp;&nbsp;3. Job duties
              <br />Sample Answer: I worked as a Sales Manager at Effizient Immigration Inc from Jan 2022 till Feb 2023. In this role, I managed sales operations, reaching out to leads, lead the outreach program, ensured meeting monthly targets.
            </lable>
            <input type="text" placeholder='Your Answer' onChange={(e) => setExperience(e.target.value)} onBlur={(e) => { handleBlur(e) }} />
            <p className='danger'>&nbsp;</p>
          </div>
        </div>

        <div className='two-box'>
          <div className='box'>
            <label>What institute did you get admitted to in Canada? *</label>
            <input type="text" placeholder='Your Answer' onChange={(e) => setInstituteCanada(e.target.value)} onBlur={(e) => { handleBlur(e) }} />
            <p className='danger'>&nbsp;</p>
          </div>
          <div className='box'>
            <label>What is your program of study in Canada? *</label>
            <input type="text" placeholder='Your Answer' onChange={(e) => setProgramCanada(e.target.value)} onBlur={(e) => { handleBlur(e) }} />
            <p className='danger'>&nbsp;</p>
          </div>
        </div>

        <div className='two-box'>
          <div className='box'>
            <label>Which country are you applying from? *</label>
            <input type="text" placeholder='Your Answer' onChange={(e) => setCountry(e.target.value)} onBlur={(e) => { handleBlur(e) }} />
            <p className='danger'>&nbsp;</p>
          </div>
          <div className='box'>
            <label>What are your future goals? *</label>
            <input type="text" placeholder='Your Answer' onChange={(e) => setFuture(e.target.value)} onBlur={(e) => { handleBlur(e) }} />
            <p className='danger'>&nbsp;</p>
          </div>
        </div>

        <div className='two-box'>
          <div className='box'>
            <label>English Scores - Listening *</label>
            <input type="text" placeholder='Your Answer' onChange={(e) => setListening(e.target.value)} onBlur={(e) => { handleBlur(e) }} />
            <p className='danger'>&nbsp;</p>
          </div>
          <div className='box'>
            <label>English Scores - Reading *</label>
            <input type="text" placeholder='Your Answer' onChange={(e) => setReading(e.target.value)} onBlur={(e) => { handleBlur(e) }} />
            <p className='danger'>&nbsp;</p>
          </div>
        </div>

        <div className='two-box'>
          <div className='box'>
            <label>English Scores - Speaking *</label>
            <input type="text" placeholder='Your Answer' onChange={(e) => setSpeaking(e.target.value)} onBlur={(e) => { handleBlur(e) }} />
            <p className='danger'>&nbsp;</p>
          </div>
          <div className='box'>
            <label>English Scores - Writing *</label>
            <input type="text" placeholder='Your Answer' onChange={(e) => setWriting(e.target.value)} onBlur={(e) => { handleBlur(e) }} />
            <p className='danger'>&nbsp;</p>
          </div>
        </div>

        <div className='two-box'>
          <div className='box'>
            <label>Did you pay your first year tuition? *</label>
            <div>
              <input id='tution-yes' type="radio" value="yes" name='tution' onClick={(e) => setPayToogle(e.target.value)} />
              <label htmlFor='tution-yes' >&nbsp;&nbsp;Yes</label>
            </div>
            <div>
              <input id='tution-no' type="radio" value="no" name='tution' onClick={(e) => setPayToogle(e.target.value)} />
              <label htmlFor='tution-no'>&nbsp;&nbsp;No</label>
            </div>
            <p className='danger'>&nbsp;</p>
          </div>
          <div className='box'>
            <label>How much tuition fee did you pay? *</label>
            <input type="text" placeholder='Your Answer' onChange={(e) => setPay(e.target.value)} onBlur={(e) => { handleBlur(e) }} onClick={(e) => setPay(e.target.value)} />
            <p className='danger'>&nbsp;</p>
          </div>
        </div>

        <div className='two-box'>
          <div className='box'>
            <label>Did you do a GIC? *</label>
            <div>
              <input id='gic-yes' type="radio" value="yes" name='gic' onClick={(e) => setGicToogle(e.target.value)} />
              <label htmlFor='gic-yes'>&nbsp;&nbsp;Yes</label>
            </div>
            <div>
              <input id='gic-no' type="radio" value="no" name='gic' onClick={(e) => setGicToogle(e.target.value)} />
              <label htmlFor='gic-no'>&nbsp;&nbsp;No</label>
            </div>
            <p className='danger'>&nbsp;</p>
          </div>
          <div className='box'>
            <label>How much did you pay towards GIC? *</label>
            <input type="text" placeholder='Your Answer' onChange={(e) => setGic(e.target.value)} onBlur={(e) => { handleBlur(e) }} onClick={(e) => setGic(e.target.value)} />
            <p className='danger'>&nbsp;</p>
          </div>
        </div>
        <div className='fotter'>
          <input type='submit' className='submit' onClick={handleSubmit} />
          <input type='submit' className='clear' value='Clear Form' onClick={() => { window.location.reload(false) }} />
        </div>
      </div>

      {
        loading ?
          <div className='loading'>
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            <p className='load-text'>submitting...</p>
          </div>
          :
          <></>
      }
    </>
  )
}

export default App