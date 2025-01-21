import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="bg-main h-screen flex justify-center items-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="tracking-wider">
              <h1 className="uppercase text-center sm:text-left text-3xl sm:text-4xl lg:text-5xl">
                What is Lorem Ipsum
              </h1>
              <h2 className="font-extrabold uppercase text-center sm:text-left text-xl sm:text-2xl lg:text-5xl">
                Lorem Ipsum
              </h2>
              <div className="flex space-x-5 items-center mt-5 justify-center sm:justify-start">
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

            <div className="bg-red-400">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                voluptatibus nesciunt esse excepturi alias cumque labore debitis
                adipisci? Minima quis voluptatum at dignissimos ducimus minus
                quasi modi dolor quos consequatur?
              </p>
              {/* <img src="images/profile.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
      {/* About */}
      <div className="container mx-auto">
        <div className="grid gird-cols-1 sm:grid-cols-2 mt-10 px-5 sm:px-0 gap-4">
          <div className="flex flex-col">
            <p className="font-semibold text-3xl flex justify-center items-center uppercase">
              <span className=" border-b-4 border-b-blue-500">Title </span>
            </p>
            <p className="text-center text-gray-400 font-light">
              t.wanitcharoennan@gamil.com
            </p>
            <p className="flex flex-col pt-20">
              I am passionate about website development and have over 7 years of
              experience in this field. Currently, I work as a Senior Web
              Master, where I am responsible for overseeing and managing
              websites to ensure their efficiency. This includes aspects of
              design, development, and maintenance. In addition to website
              development, I have a strong interest in Software Testing, which
              plays a crucial role in enhancing the quality of systems and
              applications. With my experience and determination to continuously
              improve, I am committed to delivering high-quality work that adds
              value to organizations. I am also eager to exchange ideas and
              embrace new learning opportunities.
            </p>
          </div>
          <div className="bg-red-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            sint ea quo illum maiores quos dolores, culpa officiis quae quasi
            porro, dicta odit provident repellat, iste ipsum cum amet adipisci.
          </div>
        </div>
        {/* Skill */}
        <div className="grid grid-cols-1 sm:grid-cols-3 mt-10 px-5 sm:px-0 gap-4">
          <div className="flex flex-col">
            <p className="font-semibold text-3xl flex justify-center items-center uppercase">
              <span className=" border-b-4 border-b-blue-500">Title</span>
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold text-3xl flex justify-center items-center uppercase">
              <span className=" border-b-4 border-b-blue-500">Title</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              eveniet vel quidem expedita maiores maxime consequuntur facilis
              animi consectetur eaque in harum officia blanditiis tempore unde,
              sed voluptatum possimus dolorum?
            </p>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold text-3xl flex justify-center items-center uppercase">
              <span className=" border-b-4 border-b-blue-500">Title</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              eveniet vel quidem expedita maiores maxime consequuntur facilis
              animi consectetur eaque in harum officia blanditiis tempore unde,
              sed voluptatum possimus dolorum?
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-neutral-900 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-1 mt-5 p-5">
          <div className="flex space-x-3 justify-center">
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
            <p className="text-center pt-3">© 2025 topic 2025</p>
        </div>
      </footer>
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
    </>
  );
}
