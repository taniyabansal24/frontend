// src/components/shared/forms/FormField.tsx

import { FormFieldProps } from "./form-types";

export default function FormField({
  name,
  label,
  placeholder,
  required,
  type = "text",
  options = [],
  form,
}: FormFieldProps) {
  const error = form.formState.errors?.[name]?.message;

  const baseInputClasses = `
    w-full
    px-3
    rounded-md
    border
    border-[#EAECF0]
    body-text
    outline-none
    bg-white
    focus:border-[#6FA073]
    transition-all
  `;

  const renderField = () => {
    switch (type) {
      case "select":
        return (
          <select
            {...form.register(name)}
            className={`h-10.5 ${baseInputClasses}`}
          >
            <option value="">Select</option>

            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case "multiselect":
        return (
          <div>
            <select
              multiple
              {...form.register(name)}
              className={`h-10.5 py-2 ${baseInputClasses}`}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <p className="caption mt-1">Hold Ctrl to select multiple</p>
          </div>
        );

      default:
        return (
          <input
            type={type}
            placeholder={placeholder}
            {...form.register(name)}
            className={`h-10.5 ${baseInputClasses}`}
          />
        );
    }
  };

  return (
    <div className="space-y-1">
      <label className="card-title">
        {label}

        {required && <span className="text-red-500"> *</span>}
      </label>

      {renderField()}

      {error && <p className="caption text-red-500 mt-1">{String(error)}</p>}
    </div>
  );
}
