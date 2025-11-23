import type { ChangeEvent } from 'react';

type FormTextareaProps = {
  label: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  error?: string;
};

export default function FormTextarea({ label, id, value, onChange, placeholder, error }: FormTextareaProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-200 rounded-lg h-32 resize-none 
                  focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent 
                  transition-all shadow-sm hover:shadow-md font-medium"
        required
      ></textarea>
      {error && <p className="text-red-500 text-sm mt-1 font-medium">{error}</p>}
    </div>
  );
}