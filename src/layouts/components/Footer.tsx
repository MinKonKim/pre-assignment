const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
          <a
            href="https://github.com/MinKonKim/pre-assignment/blob/dev/README.md"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </a>
          <span className="hidden md:inline">|</span>
          <a
            href="mailto:alsrhs98@gmail.com"
            className="hover:underline hidden md:inline"
          >
            alsrhs98@gmail.com
          </a>
          <span className="hidden md:inline">|</span>
          <a
            href="tel:+01025966958"
            className="hover:underline hidden md:inline"
          >
            010-2596-6958
          </a>
        </div>

        <div className="mt-2 md:mt-0 text-sm hidden md:block">
          © 2025 Minkon Kim. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
