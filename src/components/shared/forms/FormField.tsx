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
  h-12
  px-4
  rounded-md
  border
  border-[#D0D5DD]
  bg-white
  body-text
  outline-none
  transition-all
  focus:border-[#6FA073]
  focus:ring-2
  focus:ring-[#6FA073]/20
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
            className={`${baseInputClasses} ${
              type === "date" ? "date-input" : ""
            }`}
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
