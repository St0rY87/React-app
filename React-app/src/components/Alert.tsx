import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onToggleAlert: () => void;
}

const Alert = ({ children, onToggleAlert }: Props) => {
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        {children}
        <button
          onClick={onToggleAlert}
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      ;
    </>
  );
};

export default Alert;
