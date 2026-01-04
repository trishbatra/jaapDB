"use client";
import { HardDriveUpload } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const FileUploader = (props) => {
  const [jaapFile, setjaapFile] = useState(null);
  const [jaapFileURL, setjaapFileURL] = useState(null);
  console.log("props.isloading", props.isloading)
  const handleFileChange = async (e) => {
    if (!e.target.files[0]) return;

    console.log(e.target.files[0]);
    setjaapFile(e.target.files[0]);
    setjaapFileURL(URL.createObjectURL(e.target.files[0]));
  };

  const handleUpload = async () => {
    props.setisloading(true)
    props.setloadingText("saving ur jaap data...")
    if (!jaapFile) return;
    const form = new FormData();
    form.append("jaap", jaapFile);
    let todaysDate = new Date() 
    form.append("todaysDate", todaysDate.getDate())
    const req = await fetch(`/api/savejaapdata`, {
      method: "POST",
      body: form
    });

    const res = await req.json()

    console.log("res", res)
    props.setisloading(false)
    props.setloadingText("")


  };
  return (
    <div className={`absolute ${props.isloading  ? 'blur-lg'  : ''} `}>
      <div className="flex items-center bg-[#526D82] rounded-md w-56 ml-5">
        <div className="ml-2">
          <HardDriveUpload />
        </div>
        <label
          htmlFor="jaapFile"
          className="ml-2 flex text-white rounded-md p-2 cursor-pointer hover:bg-[#3f5565] transition"
        >
          Upload Counter Image
        </label>

        <input
          id="jaapFile"
          about="dwdw"
          type="file"
          name="jaapFile"
          className="hidden"
          onChange={(e) => {
            handleFileChange(e);
          }}
        />
      </div>
      <div className="w-full justify-center flex mt-5">
        {jaapFileURL && (
          <Image src={jaapFileURL} width={150} height={150} alt="image" />
        )}
      </div>
      {jaapFile && (
        <div className="relative  top-2">
          <ul className="list-none my-2">
            <li className="my-2 font-thin">
              File Name :
              <span className="truncate">
                {" "}
                {jaapFile.name.substring(0, 25) + `...`}{" "}
              </span>
            </li>
            <li className="my-2 font-thin">
              File Size : {(jaapFile.size / 1024).toFixed(2)} KB
            </li>
            <li className="my-2 font-thin">
              File Type : {jaapFile.type.substring(6, jaapFile.type.length)}
            </li>
          </ul>

          <button
            onClick={() => { handleUpload() }}
            className="bg-[#526D82] p-2 capitalize
         rounded-md mt-3 cursor-pointer"
          >
            confirm upload
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
