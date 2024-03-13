import {buttonProps} from './interface'

function Button({ children, onClick }: buttonProps) {
  return (
    <button type="button" className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
