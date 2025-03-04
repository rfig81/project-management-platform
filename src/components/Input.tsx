interface BaseProps {
  ref?: React.ForwardedRef<HTMLInputElement | HTMLTextAreaElement>;
  label: string;
  textarea?: boolean;
}

type InputProps = BaseProps & React.InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = BaseProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Input = ({
  ref,
  label,
  textarea,
  ...props
}: InputProps | TextareaProps) => {
  const inputClasses =
    "w-full rounded-sm border-b-2 border-stone-300 bg-stone-200 p-1 text-stone-600 focus:border-stone-600 focus:outline-none";
  return (
    <p className="my-4 flex flex-col gap-1">
      <label className="text-sm font-bold text-stone-500 uppercase">
        {label}
      </label>
      {textarea ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          className={inputClasses}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          className={inputClasses}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </p>
  );
};

export default Input;
