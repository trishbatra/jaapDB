import Image from "next/image";
import FileUploader from "./components/FileUploader";

export default function Home() {
  return (
    <>
      <div className="flex justify-center relative">
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
        <p className="text-center mt-8  capitalize text-xl font-thin">
           Store all you jaap related data </p>
        <div className="flex mt-4 justify-center">
        <FileUploader/>
        </div>
      </div>
    </>
  );
}
