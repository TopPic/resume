import React from 'react'
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="bg-main" >
        <div className="container mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2">

            <div className="grid grid-cols-1 gap-4 mt-20 lg:mt-96 px-5">
              <div className="mt-5 tracking-wider">
                <h1 className="uppercase text-3xl sm:text-4xl lg:text-5xl">Thanyaporn</h1>
                <h2 className="font-extrabold uppercase text-xl sm:text-2xl lg:text-5xl">Wanitcharoennan</h2>
                <div className="flex space-x-5 items-center mt-5">
                  <a href="#">
                    <Image
                      aria-hidden
                      src="/images/facebook.png"
                      alt="facebook icon"
                      width={32}
                      height={32}
                    />
                  </a>
                  <a href="#">
                    <Image
                      aria-hidden
                      src="/images/line.png"
                      alt="line icon"
                      width={32}
                      height={32}
                    />
                  </a>
                  <a href="#">
                    <Image
                      aria-hidden
                      src="/images/instagram.png"
                      alt="instagram icon"
                      width={32}
                      height={32}
                    />
                  </a>
                  <a href="#">
                    <Image
                      aria-hidden
                      src="/images/linkedin.png"
                      alt="linkedin icon"
                      width={32}
                      height={32}
                    />
                  </a>
                  <a href="#">
                    <Image
                      aria-hidden
                      src="/images/github-sign.png"
                      alt="github icon"
                      width={32}
                      height={32}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex">
              <img src="images/profile.png" alt="" />
            </div>


          </div>
        </div>
        {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
      </div>

    </>
  );
}
