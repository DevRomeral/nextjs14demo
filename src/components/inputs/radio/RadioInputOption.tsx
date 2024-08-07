'use client';

import React from 'react';

import LoadingPlaceholder, { ILoadingProps, LoadingPlaceholderConfig } from '../../display/LoadingPlaceholder';

export interface IRadioOption {
  id: string;
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioInputOptionProps extends ILoadingProps, IRadioOption {
  name: string;
  currentValue: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioInputOption: React.FC<RadioInputOptionProps> = ({
  id,
  name,
  value,
  disabled = false,
  isLoading = false,
  currentValue = null,
  label,
  onChange,
}) => {
  const isSelected = currentValue === value;
  console.log('Is selected: ' + isSelected);
  return (
    <div className="flex items-center gap-2 px-2 py-1">
      {isLoading && <div className={`h-5 w-5 animate-pulse rounded-full ${LoadingPlaceholderConfig.color}`}></div>}
      <LoadingPlaceholder isLoading={isLoading} width="w-40" height="h-3">
        <input
          type="radio"
          name={name}
          id={id}
          value={value}
          disabled={disabled}
          onChange={onChange}
          checked={isSelected}
          className="input-radio-hidden"
        />
        <label htmlFor={id} className="custom-radio" />
        <label htmlFor={id}>{label}</label>
      </LoadingPlaceholder>
    </div>
  );
};

export default RadioInputOption;
