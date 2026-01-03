'use client'
import Image from "next/image";
import FileUploader from "./components/FileUploader";
import { useState } from "react";
import { ClockLoader } from "react-spinners";

export default function Home() {
  const[isloading, setislaoding] = useState(false)
  const[loadingText, setloadingText] = useState("")
  return (
    <>
    {
      isloading ? 
      <div className="flex justify-center items-center min-h-screen"> 
      <ClockLoader  color="#EEEEEE"/>
      <p> {loadingText} </p>
      </div>
      :
      <>
        <div className={` flex justify-center relative  ${ isloading  ? 'blur-lg ' : ''}`}>
          <Image
            src={"/illus-final.png"}
            className="absolute left-6 bottom-0 top-1"
            width={90}
            height={90}
            alt="alt"
          />
          <h1 className="text-6xl ml-5 capitalize mt-2">Jaap</h1>
        </div>
        <div>
          <p className={`text-center mt-8  capitalize text-xl font-thin ${isloading ? 'blur-lg ': ''}`}>
            Store all you jaap related data </p>
          <div className="flex mt-4 justify-center">
          <FileUploader 
            isloading={isloading} 
            setisloading={setislaoding}
            loadingText={loadingText}
            setloadingText={setloadingText}
          />
          </div>
        </div>
      </>
  }
  </>
  );
}
