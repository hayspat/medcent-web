export type InputTypes = {
  title: string;
  placeholder?: string;
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  for: string;
  required?: boolean;
  mask?: boolean;
  masked?: (RegExp | string)[];
};

export type FormikData = {
  touched: boolean | undefined;
  errors: string | undefined;
  values: any;
};
