import connectDB from "../../config/db";
import { jaapModel } from "../../models/jaapCollection";
import  {prompt}  from "../../prompt"
import  { v2 as cloudinary} from "cloudinary" 
import Groq from "groq-sdk"
import { NextResponse } from "next/server";


const groq = new Groq(
  {
    apiKey : process.env.GROQ_API_KEY
  }
);

const cloudinaryConfig = cloudinary.config({
  cloud_name  : process.env.cloud_name,
  api_key  : process.env.api_key,
  api_secret   : process.env.api_secret
})

export async function POST (req, res){
    connectDB()
    const form = await req.formData()

    const file = form.get("jaap")

      if (!file) {
      return new Response("No file uploaded", { status: 400 });
    }


    const bytes = await file.arrayBuffer()
    const buffer  = Buffer.from(bytes)

    const response = new Promise((ress, rej)=>{
      cloudinary.uploader.upload_stream(
        {folder : "jaapDB_upload"},
        (err,result)=>{
          if (err) rej(err)
          else ress(result)
        }
      ).end(buffer)
    })

    const resultt = await response
    console.log("resultt", resultt) 
    

    const makeReq =  await groq.chat.completions.create({
      "messages" : [
        {
          "role" : "user",
          "content" : [
            {
              "type" : "text", 
              "text" : prompt(resultt.secure_url)
            },
            {
              "type" : "image_url",
              "image_url" : {
                "url" : resultt.secure_url
              }
            }
          ]
        }
      ],
      "model" : "meta-llama/llama-4-scout-17b-16e-instruct"
    })

    console.log("makeReq", makeReq)
    console.log(
      "makeReq.choices[0]?.message?.content ", 
      typeof(makeReq.choices[0]?.message?.content ),
      makeReq.choices[0]?.message?.content 
   )

   const parsedResponse = await JSON.parse(
      makeReq.choices[0]?.message?.content.replace('```') )

   console.log("parsedResponse", parsedResponse)

   const savedDoc = new jaapModel({
    mala : parsedResponse.mala,
    dateAndTimeString : parsedResponse.date_and_time
   })

   const saved = await savedDoc.save()
   

   return NextResponse.json(saved)

}   