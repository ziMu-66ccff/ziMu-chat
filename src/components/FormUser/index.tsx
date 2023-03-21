import type {
  ReactNode,
  FC,
  HTMLInputTypeAttribute,
  ChangeEvent,
  FormEvent,
} from 'react';
import { Link, To } from 'react-router-dom';
import { memo } from 'react';
import { FormUserWrapper } from './style';

type InputItem = {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  name?: string;
  required?: boolean;
};

type IProps = {
  children?: ReactNode;
  title?: string;
  inputItems?: InputItem[];
  submitPlaceholder?: string;
  bottomHint?: string;
  linkTo?: To;
  linkHint?: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => any;
  handleForm?: (event: FormEvent<HTMLFormElement>) => any;
};

const FormUser: FC<IProps> = ({
  title,
  inputItems,
  submitPlaceholder,
  bottomHint,
  linkHint,
  linkTo,
  handleChange,
  handleForm,
}) => {
  console.log('执行');

  return (
    <FormUserWrapper
      onSubmit={handleForm ? (event) => handleForm(event) : undefined}
    >
      <div className="brand">
        <h1>{title}</h1>
      </div>
      {inputItems?.map((input) => {
        return (
          <input
            type={input.type}
            key={input.name}
            placeholder={input.placeholder}
            name={input.name}
            required={input.required}
            onChange={handleChange ? (event) => handleChange(event) : undefined}
          />
        );
      })}
      <button type="submit">{submitPlaceholder}</button>
      <span>
        {bottomHint}
        {linkTo ? <Link to={linkTo}>{linkHint}</Link> : false}
      </span>
    </FormUserWrapper>
  );
};

export default memo(FormUser);
