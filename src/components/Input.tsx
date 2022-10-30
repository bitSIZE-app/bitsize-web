import { ChangeEvent, ReactElement, useState } from 'react';

import { styled } from '@styles/bitTheme';
import { classNames } from '@utils/strings';

const StyledInput = styled('div', {
    position: 'relative',

    'svg': {
        color: '$mauve8',
        left: '$1',
        marginTop: -8,
        position: 'absolute',
        top: '50%'
    },

    '&.input-focused': {
        'svg': {
            color: '$mauve11'
        }
    },

    '.character-limit': {
        bottom: -18,
        color: '$plum8',
        fontSize: '$xs',
        position: 'absolute',
        right: 4
    }
});

const StyledInputField = styled('input', {
    backgroundColor: '$mauve2',
    border: '1px solid $mauve5',
    borderRadius: '$4',
    color: '$mauve11',
    padding: '$1',
    width: '100%',

    '&.has-icon': {
        paddingLeft: 'calc($4 + 4px)',
    },

    '&::placeholder': {
        color: '$mauve8'
    },

    '&:focus': {
        borderColor: '$mauve9',
        outline: 'none'
    }
});

type TProps = {
    characterLimit?: number;
    className?: string;
    icon?: ReactElement;
    onChange?: (value: string) => void;
    placeholder?: string;
    type?: string;
    value?: string;
}

export function Input({
      characterLimit,
      className = '',
      icon,
      onChange,
      placeholder,
      type,
      value = ''
  }: TProps) {
    const [focused, setFocused] = useState(false)
    const [val, setVal] = useState('');
console.log(value)
    const onInputChange = (evt: ChangeEvent) => {
        setVal(evt.target.value);
        onChange && onChange(evt.target.value);
    }
    return (
        <StyledInput className={classNames([
            focused ? 'input-focused' : '',
            className
        ])}>
            {icon && icon}
            <StyledInputField
                className={icon ? 'has-icon' : ''}
                maxLength={characterLimit || 524288}
                onBlur={() => setFocused(false)}
                onChange={onInputChange}
                onFocus={() => setFocused(true)}
                placeholder={placeholder}
                type={type || 'text'}
                value={value} />
            {characterLimit && <div className="character-limit">{val.length}/{characterLimit}</div>}
        </StyledInput>
    );
}