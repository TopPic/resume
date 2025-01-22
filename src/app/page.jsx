'use client';
import React, { useState } from "react";
import Image from "next/image";
import {pp, job, Sailian} from "./component/sweetalert"


export default function Home() {

  return (
    <>
      <div className="bg-main h-screen flex justify-center items-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="tracking-wider">
              <h1 className="uppercase text-center sm:text-left text-3xl sm:text-4xl lg:text-5xl text-yellow-400">
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
              <span className=" border-b-4 border-b-blue-500 text-yellow-400">Aubot</span>
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
              <span className=" border-b-4 border-b-blue-500 text-yellow-400">Skill</span>
            </p>
            <h4 className="text-2xl uppercase mt-10 text-orange-500 font-extrabold">Coding Skill </h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">HTML</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Css</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Bootstrap Framework</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">JavaScript</p>
              <p className="text-right sm:text-left">Basic & Learning</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Tailwind CSS</p>
              <p className="text-right sm:text-left">Learning</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Next.js</p>
              <p className="text-right sm:text-left">Learning</p>
            </div>
            <h4 className="text-2xl uppercase pt-3 text-orange-500 font-extrabold">Design Skill</h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Figma</p>
              <p className="text-right sm:text-left">working level & Learning</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Photoshop</p>
              <p className="text-right sm:text-left">working level</p>
            </div>
            <h4 className="text-2xl uppercase pt-3 text-orange-500 font-extrabold">CMS Skill</h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight" >
              <p className="indent-0 sm:indent-5">Wordpress</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <h4 className="text-2xl uppercase pt-3 text-orange-500 font-extrabold">Other Skill</h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Search Engine Optimize</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Google analytic</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Google Tagmanager</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <h4 className="text-2xl uppercase pt-3 text-orange-500 font-extrabold">Personal Skill</h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Team Work</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Communication</p>
              <p>Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Interpersonal</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Problem-Solving</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Time Management</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Adaptability</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Creativity</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Self-Discipline</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold text-3xl flex justify-center items-center uppercase">
              <span className=" border-b-4 border-b-blue-500 text-yellow-400">Experience</span>
            </p>
            <div className="h-40 border-2 border-yellow-400 relative p-2 mt-10 hover:scale-95 duration-300 cursor-pointer" onClick={pp}>
              <div className="absolute top-0 right-0 p-2">03 </div>
              <div className="pb-8 text-2xl text-orange-500 font-extrabold">Jun 2018 - Present</div>
              <p>Senior Webmaster</p>
              <p className="font-extralight italic">Playpark Company Limited</p>
            </div>
            <div className="h-40 border-2 border-yellow-400 relative p-2 mt-10 hover:scale-95 duration-300 cursor-pointer" onClick={job}>
              <div className="absolute top-0 right-0 p-2">02 </div>
              <div className="pb-8 text-2xl text-orange-500 font-extrabold">Nov 2018 - May 2019</div>
              <p>web creative</p>
              <p className="font-extralight italic">JOBBKK.COM</p>
            </div>
            <div className="h-40 border-2 border-yellow-400 relative p-2 mt-10 hover:scale-95 duration-300 cursor-pointer" onClick={Sailian}>
              <div className="absolute top-0 right-0 p-2">01 </div>
              <div className="pb-8 text-2xl text-orange-500 font-extrabold">Jul 2018 - Nov 2018</div>
              <p>Graphic Web Designer</p>
              <p className="font-extralight italic">Sailian Media</p>
            </div>

          </div>

          <div className="flex flex-col">
            <p className="font-semibold text-3xl flex justify-center items-center uppercase">
              <span className=" border-b-4 border-b-blue-500 text-yellow-400">Title</span>
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

    </>
  );
}
