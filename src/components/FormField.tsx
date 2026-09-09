interface FormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export function FormField({
  id,
  label,
  type = "text",
  required,
  placeholder,
  value,
  onChange,
}: FormFieldProps) {
  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
        {required ? " *" : ""}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
    </div>
  );
}
