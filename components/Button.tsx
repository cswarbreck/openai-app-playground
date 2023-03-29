import React, { MouseEventHandler } from 'react';
import { FunctionDeclaration } from 'typescript';

type Props = {disabled?: boolean | undefined, onClick?: MouseEventHandler, label: string, type: "button" | "submit" | "reset" | undefined, className: string, icon?: SVGSVGElement};

const Button: React.FC<Props> = ( {disabled,onClick, label, type, className, icon}) => {
    
  return (
      <button
        onClick={onClick}
        type={type}
        className={className}
        disabled={disabled}
      >
        {label}
      </button>
  );
};

export default Button;