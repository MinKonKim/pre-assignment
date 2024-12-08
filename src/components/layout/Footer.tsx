const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        {/* 번호 */}
        <p className="text-sm md:text-base mb-2">
          연락처: <span className="font-semibold">010-1234-5678</span>
        </p>

        {/* 깃허브 주소 */}
        <p className="text-sm md:text-base">
          깃허브:{" "}
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            https://github.com/your-github-username
          </a>
        </p>

        {/* Copyright */}
        <p className="text-xs text-gray-400 mt-4">
          © 2024 Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
