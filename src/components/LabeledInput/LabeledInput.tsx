import { ILabeledInput } from '@/utils/ts/interface';

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
