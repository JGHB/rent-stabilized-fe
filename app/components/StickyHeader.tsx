'use client';

export default function StickyHeader() {
  return (
    <div className="w-full bg-black h-14 flex flex-row items-center justify-center text-white font-inter text-xl font-extrabold ">
        <div className="font-inter text-xl font-extrabold ">
            RENT STABILIZED
        </div>
        <button className="absolute right-5 hover:underline" onClick={() => console.log("EH")}>
            WHY?
        </button>
    </div>
  )
}
