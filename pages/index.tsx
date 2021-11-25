import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import profilePic from "../public/me.jpg";

export default function Home() {
  return (
    <>
      <div className="md:px-14 md:py-14 p-7 bg-default">
        <Head>
          <title>ETHERFOLIO</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Navigation Bar */}
        <nav className="flex flex-wrap items-center justify-between w-full px-2">
          <div>
            <h1 className="text-3xl italic font-bold tracking-wide text-black md:text-5xl font-title ">
              <Link href="#home">etherfolio</Link>
            </h1>
          </div>

          <div className="cursor-pointer md:hidden">
            <button onClick={() => console.log("I have been smootch")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 p-2 bg-white rounded"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
          </div>

          <div className="hidden uppercase list-none md:inline-block ">
            <ul className="flex justify-between gap-2">
              <li className="self-center px-2 py-3 font-bold text-green-700 border-l-2 border-r-2 border-green-700 cursor-pointer rounded-r-xl rounded-l-xl border-l-3 hover:text-black">
                <Link href="#services">Services</Link>
              </li>
              <li className="self-center px-2 py-3 font-bold text-green-700 border-l-2 border-r-2 border-green-700 cursor-pointer rounded-r-xl rounded-l-xl border-l-3 hover:text-black">
                <Link href="#stack">Stack</Link>
              </li>
              <li className="self-center px-2 py-3 font-bold text-green-700 border-l-2 border-r-2 border-green-700 cursor-pointer rounded-r-xl rounded-l-xl border-l-3 hover:text-black">
                <Link href="#work">WORKS</Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:inline-block md:items-center">
            <h2 className="font-bold">
              +234 806 8010 559
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block w-8 h-8 py-2 ml-2 bg-white rounded-full"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a href="/SamuelAndrew_cv.pdf" download="SamuelAndrew_cv.pdf">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block w-8 h-8 py-2 ml-2 bg-white rounded-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
            </h2>
          </div>
        </nav>

        {/* Information section */}
        <div className="flex flex-col items-center mt-16 md:justify-between md:flex md:flex-row md:mt-36">
          <div className="text-center md:text-center md:w-1/3">
            <h1 className="mb-6 text-3xl leading-10 md:leading-loose md:text-5xl text-hi font-hi">
              Hey There,
              <span className="block">I'm Samuel</span>
            </h1>

            <h2 className="flex items-center justify-center mb-2 text-center">
              <span className="font-bold text-center text-7xl">3</span>
              <div className="ml-2 text-left uppercase">
                <span>years</span>
                <span className="block">experience</span>
              </div>
            </h2>
          </div>
          <div className="relative w-60 h-60 md:w-110 md:h-110 md:object-fill">
            <Image
              src={profilePic}
              alt="baby boy"
              layout="fill"
              objectFit="cover"
              className="absolute object-center rounded-full left-8 md:rounded-full"
              placeholder="blur" // Optional blur-up while loading
            />
          </div>
          <div className="text-center mt-14 md:w-1/3">
            <h2 className="text-xl font-thin text-black md:ml-7">
              Software Engineer from Nigeria.
              <span className="block">I SOLVE PROBLEMS</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Services */}

      <div
        id="services"
        className="flex flex-col-reverse bg-white items-center-center md:flex md:flex-row md:px-16 gap-x-20 mt-28 p-7"
      >
        <div className="w-full md:justify-end self-center-center md:w-1/2 sm:w-full">
          {/* Cards */}
          <div className="flex items-center self-center w-full py-10 mb-5 rounded-md shadow sm:w-full md:px-16 md:py-12 px-7 md:w-full gap-x-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 p-2 bg-green-900 rounded-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#FFFFFF"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <div className="font-bold tracking-wide text-hi">
                Mobile Application Development
              </div>
              <div className="font-medium text-hi">6 Projects</div>
            </div>
          </div>

          {/* Cards */}
          <div className="flex items-center self-center w-full py-10 mb-5 rounded-md shadow sm:w-full md:px-16 md:py-12 px-7 md:w-full gap-x-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 p-2 bg-green-900 rounded-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#FFFFFF"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
            </div>
            <div>
              <div className="font-bold tracking-wide text-hi">
                Backend Development
              </div>
              <div className="font-medium text-hi">10 Projects</div>
            </div>
          </div>

          {/* Cards */}
          <div className="flex items-center self-center w-full py-10 mb-5 rounded-md shadow sm:w-full md:px-16 md:py-12 px-7 md:w-full gap-x-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 p-2 bg-green-900 rounded-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#FFFFFF"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <div className="font-bold tracking-wide text-hi">
                Website Development
              </div>
              <div className="font-medium text-hi">10 Projects</div>
            </div>
          </div>
        </div>

        <div className="justify-start mb-6 md:w-1/2">
          <div>
            <h1 className="mb-10 text-4xl font-bold text-center font-hi text-hi">
              What do i do?
            </h1>
          </div>
          <div className="text-justify md:text-left">
            <p className="leading-loose tracking-widest">
              I am an enthusiastic software developer who likes to solve
              problems, I have been developing applications for the past three
              years.
            </p>
            <p className="leading-loose tracking-widest">
              I have been able to bring ideas from people and companies to life
              by writing code that is not just scalable but efficient enough to
              perform the various specified tasks.
            </p>
          </div>
        </div>
      </div>

      <div id="stack" className="bg-default md:px-14 md:py-14 p-7">
        <h1 className="mb-6 text-4xl text-center font-hi">My Tech Stack</h1>

        <div className="flex flex-col items-center text-3xl md:flex-row md:gap-x-4">
          <div className="container content-center w-full p-4 mb-5 bg-white rounded-lg shadow-md font-title">
            <h3 className="mb-4 text-2xl font-bold text-center font-hi">
              App Dev
            </h3>
            <ul>
              <li className="flex items-center mb-4 ml-5 gap-x-2">
                <div className="w-3 h-3 bg-red-700 rounded-full"></div>
                React Native
              </li>
              <li className="flex items-center mb-4 ml-5 gap-x-2">
                <div className="w-3 h-3 bg-red-700 rounded-full"></div>
                Redux
              </li>
              <li className="flex items-center mb-4 ml-5 gap-x-2">
                <div className="w-3 h-3 bg-red-700 rounded-full"></div>
                Typescript / Javascript
              </li>
            </ul>
          </div>

          <div className="container content-center w-full p-4 mb-5 bg-white rounded-lg shadow-lg font-title">
            <h3 className="mb-4 text-2xl font-bold text-center font-hi">
              Back End Dev
            </h3>
            <ul>
              <li className="flex items-center mb-4 ml-5 gap-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                Node
              </li>
              <li className="flex items-center mb-4 ml-5 gap-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                Typescript / Javascript
              </li>
              <li className="flex items-center mb-4 ml-5 gap-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                Postgres / MongoDB
              </li>
              <li className="flex items-center mb-4 ml-5 gap-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                TypeOrm / Sequelize
              </li>
              <li className="flex items-center mb-4 ml-5 gap-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                Nestjs(Express) / Normal Express
              </li>
              <li className="flex items-center mb-4 ml-5 gap-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                Firebase
              </li>

              <li className="flex items-center mb-4 ml-5 gap-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                Heroku / Vercel / CircleCi / Jest
              </li>
            </ul>
          </div>

          <div className="container content-center w-full p-4 bg-white rounded-lg shadow-md font-title">
            <h3 className="mb-4 text-2xl font-bold text-center font-hi">
              Web Dev
            </h3>
            <ul>
              <li className="flex items-center mb-4 ml-5 gap-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                React
              </li>
              <li className="flex items-center mb-4 ml-5 gap-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                Redux
              </li>
              <li className="flex items-center mb-4 ml-5 gap-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                Typescript / Javascript
              </li>
              <li className="flex items-center mb-4 ml-5 gap-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                Nextjs
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white md:px-14 md:py-14 p-7">
        <h1 className="text-4xl text-center font-hi">Projects & Tools</h1>

        <div className="flex flex-wrap justify-center my-5 gap-x-3 gap-y-1">
          <h1 className="px-3 py-2 font-bold text-white bg-green-600 rounded-md">
            Typescript
          </h1>
          <h1 className="px-3 py-2 font-bold text-white bg-green-600 rounded-md">
            Javascript
          </h1>
          <h1 className="px-3 py-2 font-bold text-white bg-green-600 rounded-md">
            Python
          </h1>
          <h1 className="px-3 py-2 font-bold text-white bg-green-600 rounded-md">
            Golang
          </h1>

          <h1 className="px-3 py-2 font-bold text-white bg-green-600 rounded-md">
            Git and GitHub
          </h1>
        </div>

        <div className="container mt-5"></div>
      </div>
    </>
  );
}
