//  src/components/shared/forms/FormSection.tsx

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function FormSection({ title, children }: FormSectionProps) {
  return (
    <div className="mb-7">
      <h2 className="sub-heading mb-4">{title}</h2>
      <div className="border-b border-[#EAECF0] mb-5" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4">
        {children}
      </div>
    </div>
  );
}
