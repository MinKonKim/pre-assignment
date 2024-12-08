interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const BaseButton = ({
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

export default BaseButton;
