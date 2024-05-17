const Input = ({
  disabled = false,
  ...props
}: {
  disabled?: boolean;
} & React.ComponentPropsWithoutRef<"input">) => (
  <input
    className="border border-slate-300 p-2 rounded focus:outline outline-indigo-500"
    {...props}
  />
);

export default Input;
