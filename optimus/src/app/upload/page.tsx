'use client'

import React, { useState } from 'react'


type Props = {}

const page = (props: Props) => {
  const [file, setFile] = useState<File | null>(null)

  const handleFile =  (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const uploadFile = async () => {
    //pass
  }


  return (
    <div className='text-white'>
        <form className="flex flex-col items-center space-y-2">
          <label htmlFor="file">upload your resume</label><br></br>
          <input id="file" type="file"  className="bg-white text-black w-[400px]" onChange={handleFile}/><br></br>
          <button className='bg-white text-black py-1 px-4'>Submit</button>
        </form>

    </div>
  )
}


export default page