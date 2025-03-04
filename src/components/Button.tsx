interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => (
  <button
    className="rounded-md bg-stone-700 px-4 py-2 text-xs text-stone-400 hover:bg-stone-600 hover:text-stone-100 md:text-base"
    {...props}
  >
    {children}
  </button>
);

export default Button;
