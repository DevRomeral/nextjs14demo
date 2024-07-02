'use client';

import { useEffect, useState } from 'react';

import LoadingPlaceholder from '../display/LoadingPlaceholder';
import Label from './Label';

export type TextFieldType = 'text' | 'email' | 'password';

export interface ITextInputProps<T> {
  id: string;
  name?: string;
  value?: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  isLoading?: boolean;
  onBlurHandler?: (event: React.FocusEvent<T>) => void | Promise<void>;
  onChangeHandler?: (event: React.ChangeEvent<T>) => void | Promise<void>;
}

export interface TextFieldProps extends ITextInputProps<HTMLInputElement> {
  type?: TextFieldType;
}

const TextField: React.FC<TextFieldProps> = ({
  type = 'text',
  label,
  placeholder = '',
  id,
  name = id,
  value = '',
  required = false,
  isLoading = false,
  onBlurHandler,
  onChangeHandler,
}) => {
  const [_value, _setValue] = useState(value);

  useEffect(() => {
    _setValue(value);
  }, [value]);

  const _onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const newValue = event.target.value;
    console.log('New Value: ' + newValue);
    _setValue(newValue);

    if (onChangeHandler) onChangeHandler(event);
  };

  const _onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    // _setValue(event.target.value);

    if (onBlurHandler) onBlurHandler(event);
  };

  // TODO: en el futuro ponerlo como un hook con "_value", pero no sé por qué en los tests está fallando
  // no se está lanzando el evento onchange de algunos inputs

  return (
    <div className="w-full">
      <Label htmlFor={id}>{label}</Label>
      <LoadingPlaceholder isLoading={isLoading} height="h-8">
        <input
          type={type}
          id={id}
          data-testid={id}
          name={name}
          placeholder={placeholder}
          value={_value}
          required={required}
          onBlur={_onBlurHandler}
          onChange={_onChangeHandler}
        />
      </LoadingPlaceholder>
    </div>
  );
};

export default TextField;
