type InputProps = {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  label,
  type,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
      />
    </div>
  );
}
