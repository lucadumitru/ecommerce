import type { IFormProps } from "..";

export const EmailTemplate = ({ name, email, phone, message }: IFormProps) => (
  <div>
    <h1>Welcome, {name}!</h1>
    <div>
      email: <span>{email}</span>
    </div>
    {phone && (
      <div>
        phone: <span>{phone}</span>
      </div>
    )}
    <div>
      message: <span>{message}</span>
    </div>
  </div>
);
