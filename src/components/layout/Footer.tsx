const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-6">
          <p className="text-sm md:text-base mb-2">
            연락처: <span className="font-semibold">010-xxxx-xxxx</span>
          </p>

          <p className="text-sm md:text-base">
            깃허브:{" "}
            <a
              href="https://github.com/MinKonKim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              https://github.com/MinKonKim
            </a>
          </p>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          © 2024 MinKon Kim. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
