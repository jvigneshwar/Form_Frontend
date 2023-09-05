import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [files, setFiles] = useState([]);
  const [update, setUpdate] = useState(false);
  const [display, setDisplay] = useState(false);
  return (
    <div className='all'>
      <input
        type='text'
        placeholder='name'
        value={name}
        onChange={(e) => { setName(e.target.value) }}
      />
      <input
        type='text'
        placeholder='year'
        value={year}
        onChange={(e) => { setYear(e.target.value) }}
      />
      {
        files && files.map((ele, ind) => {
          return (
            <div>
              <span>{ele.name}</span>
              <input
                type='submit'
                value='Delete'
                onClick={() => {
                  let temp = files;
                  temp.splice(ind, 1);
                  setFiles(temp);
                  setUpdate(!update);
                }}
              />
            </div>
          )

        })
      }
      <input
        type='file'
        onChange={(e) => {
          let temp = files;
          temp.push(e.target.files[0])
          setFiles(temp);
          setUpdate(!update)
          console.log(files);
        }}
      />
      <input
        type='submit'
        onClick={() => setDisplay(true)}
      />

      {display &&
        <div className='Display'>
          <p>{name}</p>
          <p>{year}</p>
          {files && files.map((ele, ind) => {
            return (
              <>
                <p>File Name: {ele.name}</p>
                <p>File Size: {ele.size} bytes</p>
                <a
                  href={URL.createObjectURL(ele)}
                  download={ele.name}
                >download</a>
              </>
            )
          })}
        </div>
      }
    </div>
  )
}

export default App