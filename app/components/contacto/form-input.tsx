
import type { ChangeEvent } from 'react';

type FormInputProps = {
  label: string;
  id: 'name' | 'email' | 'phone';
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
};

export default function FormInput ({ label, id, type = "text", value, onChange, placeholder, error }: FormInputProps) {
  const focusRingColors: Record<'name' | 'email' | 'phone', string> = {
    name: 'focus:ring-cyan-500',
    email: 'focus:ring-amber-400',
    phone: 'focus:ring-cyan-500'
  };

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none 
                  focus:ring-2 ${focusRingColors[id] || 'focus:ring-cyan-500'} focus:border-transparent transition-all 
                  shadow-sm hover:shadow-md font-medium`}
        required
      />
      {error && <p className="text-red-500 text-sm mt-1 font-medium">{error}</p>}
    </div>
  );
}