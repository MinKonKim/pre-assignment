const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>연락처: 010-2596-6958</p>
        <p>이메일: alsrhs98@gmail.com</p>
        <p>
          깃헙:{" "}
          <a
            href="https://github.com/MinKonKim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            https://github.com/MinKonKim
          </a>
        </p>
        <p>&copy; 2025 MinkonKim. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
