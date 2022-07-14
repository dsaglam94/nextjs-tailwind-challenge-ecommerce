import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary py-10 px-6">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-5">
        <div className="flex items-center gap-2">
          <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-2xl hover:text-accent duration-150 ease-in cursor-pointer">
            <a
              href="https://github.com/dsaglam94"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-2xl hover:text-accent duration-150 ease-in cursor-pointer">
            <a
              href="https://twitter.com/dsaglam94"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-2xl hover:text-accent duration-150 ease-in cursor-pointer">
            <a
              href="https://www.linkedin.com/in/d-saglam"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <p className="text-sm font-bold">
          &copy;2022 imDawn. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
