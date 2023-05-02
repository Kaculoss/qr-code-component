import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen w-screen">
      <div className="bg-slate-50 rounded-3xl flex items-center shadow-2xl flex-col justify-center gap-6 p-6 w-[370px] md:w-[410px] h-fit">
        <Image
          alt="QR code to frontendmentor.io"
          src="/images/image-qr-code.png"
          height={500}
          width={500}
          className="rounded-xl mb-2"
        />
        <h2 className="text-slate-900 font-bold text-2xl md:text-3xl text-center">
          Improve your front-end skills by building projects
        </h2>
        <p className="text-slate-400 font-medium text-lg md:text-xl text-center mb-6">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
        <div>
          <span className="text-xs md:text-sm text-slate-300 font-normal text-center">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 underline"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href="#"
              className="bg-slate-600 text-slate-50 rounded-md p-[2px]"
            >
              Keezy🚀✨💫
            </a>
            .
          </span>
        </div>
      </div>
    </div>
  );
}
