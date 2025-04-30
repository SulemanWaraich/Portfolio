// import { ReactNode, useRef } from "react";


interface HomeProps {
  onScrollToHome: () => void; 
  onScrollToAbout: () => void;
  onScrollToSkill: () => void;
  onScrollToProjects: () => void;
  onScrollToContact: () => void;
}

const Home: React.FC<HomeProps> = (
  {
  onScrollToHome,
  onScrollToAbout,
  onScrollToSkill,
  onScrollToProjects,
  onScrollToContact}) => {

  return (
    <div className="">
      <section className="flex flex-col relative justify-center items-center bg-[url('/assets/kk.jpg')] h-screen  bg-cover bg-center w-screen overflow-x-hidden min-h-screen p-5">
        <main className="md:space-y-5 space-y-6 mb-20">
          <div className="headings md:space-y-2 space-y-4">
            <h1 className="md:text-6xl text-5xl font-bold text-white text-center">
              Muhammad Suleman
            </h1>
            <p className="md:text-3xl lg:txt-3xl sm:text-2xl text-2xl font-bold text-white text-center">
              I am a Full Stack Developer
            </p>
          </div>
          <div className="btn flex justify-center">
            <a href="/Resume_2.pdf" download>
            <button className="border-2 border-white px-4 py-2 md:text-xl text-xl text-white font-bold hover:bg-black rounded-lg">
              Download Resume
            </button>
            </a>
          </div>
        </main>

        <aside className="flex justify-between">
          <div className="hidden md:flex fixed left-5 top-1/3 flex-col space-y-4 z-10">
            <a onClick={onScrollToHome} className="group flex items-center cursor-pointer">
              <div className="bg-white p-2 rounded-3xl group-hover:bg-sky-400 group-hover:text-white">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 576 512"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                </svg>
              </div>
              <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-sky-400 p-2 rounded-md">
                Home
              </span>
            </a>
            <a onClick={onScrollToAbout} className="group flex items-center cursor-pointer">
              <div className="bg-white p-2 rounded-3xl group-hover:bg-sky-400 group-hover:text-white">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                </svg>
              </div>
              <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-sky-400 p-2 rounded-md">
                About
              </span>
            </a>
            <a onClick={onScrollToSkill} className="group flex items-center cursor-pointer">
              <div className="bg-white p-2 rounded-3xl group-hover:bg-sky-400 group-hover:text-white">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
                </svg>
              </div>
              <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-sky-400 p-2 rounded-md">
                Skills
              </span>
            </a>
            <a onClick={onScrollToProjects} className="group flex items-center cursor-pointer">
              <div className="bg-white p-2 rounded-3xl group-hover:bg-sky-400 group-hover:text-white">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"></path>
                </svg>
              </div>
              <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-sky-400 p-2 rounded-md">
                Projects
              </span>
            </a>
            <a onClick={onScrollToContact} className="group flex items-center cursor-pointer">
              <div className="bg-white p-2 rounded-3xl group-hover:bg-sky-400 group-hover:text-white">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg>
              </div>
              <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-sky-400 p-2 rounded-md">
                Contact
              </span>
            </a>
          </div>

          <div className="hidden md:flex fixed right-5 top-1/3 flex-col space-y-4 z-10">
            <a href="https://www.linkedin.com/in/muhammad-suleman-9aa056292/" target="blank" className="relative group flex items-center cursor-pointer">
          
              <div className="bg-white p-2 rounded-3xl group-hover:bg-sky-400 group-hover:text-white">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                </svg>
              </div>
              <span className="absolute right-14 bg-sky-400 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      LinkedIn
    </span>
            </a>

            
           

            <a href="https://github.com/SulemanWaraich" target="blank" className="relative group flex items-center cursor-pointer">
          
              <div className="bg-white p-2 rounded-3xl group-hover:bg-sky-400 group-hover:text-white">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 496 512"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>{" "}
              </div>
              <span className="absolute right-14 bg-sky-400 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Github
    </span>
            </a>

            <a href="https://x.com/Suleman_devx" target="blank" className="relative group flex items-center cursor-pointer">
         
         <div className="bg-white p-2 rounded-3xl group-hover:bg-sky-400 group-hover:text-white">
           <svg
  stroke="currentColor"
  fill="currentColor"
  stroke-width="0"
  viewBox="0 0 512 512"
  height="1.5em"
  width="1.5em"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M459.4 151.7c.3 4.5.3 9 .3 13.6 0 138.7-105.6 298.7-298.7 298.7-59.5 0-114.7-17.2-161.1-47 8.4 1 16.8 1.3 25.5 1.3 49.1 0 94.2-16.6 130.1-44.8-46-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 20 1.6 9.4 0 18.7-1.3 27.5-3.6-48.1-9.7-84.3-52.1-84.3-103v-1.3c14.3 7.9 30.9 12.7 48.5 13.3-28.7-19.2-47.5-51.9-47.5-89.1 0-19.6 5.2-37.9 14.3-53.6 52.3 64.3 130.4 106.5 218.5 111-1.6-7.9-2.6-16.1-2.6-24.4 0-59.4 48.1-107.5 107.5-107.5 30.9 0 58.7 13 78.3 33.8 24.4-4.5 47.5-13.6 68.1-25.7-8.1 25.4-25.4 46.7-47.8 60.3 21.6-2.3 42.2-8.4 61.3-17-14.3 21.3-32.2 40.2-52.6 55.2z"></path>
</svg>

         </div>
         <span className="absolute right-14 bg-sky-400 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
 Twitter
</span>
            </a>

            <a href="https://hashnode.com/@suleman240" target="blank" className="relative group flex items-center cursor-pointer">
           
           <div className="bg-white p-2 rounded-3xl group-hover:bg-sky-400 group-hover:text-white">
           <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 337 337"
  height="1.5em"
  width="1.5em"
  fill="currentColor"
>
  <path d="M168.3 0c18.5 0 36.3 7.3 49.5 20.5l98.7 98.7c27.3 27.3 27.3 71.7 0 99l-98.7 98.7c-27.3 27.3-71.7 27.3-99 0l-98.7-98.7c-27.3-27.3-27.3-71.7 0-99L118.7 20.5C131.9 7.3 149.8 0 168.3 0zm0 87.5c-44.6 0-80.8 36.2-80.8 80.8s36.2 80.8 80.8 80.8 80.8-36.2 80.8-80.8-36.2-80.8-80.8-80.8z"/>
</svg>
{" "}
           </div>
           <span className="absolute right-14 bg-sky-400 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
   Hashnode
 </span>
         </a>

            <a href="mailto:tech4you330@gmail.com" target="blank" className="relative group flex items-center cursor-pointer">
         
              <div className="bg-white p-2 rounded-3xl group-hover:bg-sky-400 group-hover:text-white">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg>{" "}
              </div>
              <span className="absolute right-14 bg-sky-400 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Email
    </span>
            </a>

         
          </div>
        </aside>
      </section>

    </div>
  );
}

export default Home;
