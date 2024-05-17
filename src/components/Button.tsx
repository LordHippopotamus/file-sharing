const Button = ({
  children,
  disabled = false,
  ...props
}: {
  children: React.ReactNode;
  disabled?: boolean;
} & React.ComponentPropsWithoutRef<"button">) => (
  <button
    className={`px-4 py-2 rounded transition ${
      disabled
        ? "bg-indigo-100 text-indigo-400"
        : "text-white bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700"
    }`}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

export default Button;
