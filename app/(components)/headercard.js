import {BsGraphUp} from "react-icons/bs"
import {BsEmojiSmile} from "react-icons/bs"
import {BsEmojiFrown} from "react-icons/bs"
// import Barchart from "./Barchart/barchart"
export default function Headercard() {
  return (
    <>

    <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

    <div className="grid lg:grid-cols-3 gap-5 mb-16">
      <div className="rounded bg-white h-40 shadow-sm outline outline-offset-0 outline-red-400">
        <h1 className="text-4xl	text-center mt-5	text-red-500"> Students</h1>
        <h1 className="text-center mt-5 text-orange-500	 text-3xl">190.13k</h1>
        <BsGraphUp className="text-orange-500 text-3xl mt-2 ms-32"/>
      </div>
      <div className="rounded bg-white outline outline-offset-0 outline-blue-400 h-40 shadow-sm">
      <h1 className="text-4xl	text-center mt-5	text-blue-500"> All courses </h1>
        <h1 className="text-center mt-5 text-orange-500	 text-3xl">49.4%</h1>
        <BsEmojiFrown className="text-red-500 text-3xl mt-2 ms-32"/>
      </div>
      <div className="rounded bg-white h-40 outline outline-offset-0 outline-red-400 shadow-sm">
      <h1 className="text-4xl	text-center mt-5	text-blue-500"> Present</h1>
        <h1 className="text-center mt-5 text-orange-500	 text-3xl">78.9%</h1>
        <BsEmojiSmile className="text-red-500 text-3xl mt-2 ms-32"/>   
      </div>
    </div>
    <div className="grid col-1 bg-white h-96 shadow-sm">
    <picture>
          <img
            className=" w-49 h-full bg-white w-100 "
            src="/1.PNG"
            alt="company logo"
          />
        </picture>
    </div>
    <h1 className="bg-red-500 text-center mt-10 text-2xl text-white">
      All Reserved By Usman Shahid.
    </h1>
  </>
  )
}
