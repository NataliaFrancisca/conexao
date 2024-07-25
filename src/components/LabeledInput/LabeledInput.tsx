import { ChangeEvent } from 'react';

interface ILabeledInput {
  label: string;
  input: {
    type: string;
    id: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
}

const LabeledInput = (props: ILabeledInput) => {
  const { label, input } = props;
  const { id, type, placeholder, onChange } = input;

  return (
    <div className="div__label-input">
      <label htmlFor={id}>{label}</label>
      <input
        required
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default LabeledInput;
