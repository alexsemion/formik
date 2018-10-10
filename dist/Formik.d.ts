/// <reference types="react" />
import * as React from 'react';
import {
  FormikActions,
  FormikConfig,
  FormikErrors,
  FormikState,
  FormikTouched,
  FormikValues,
  FormikContext,
} from './types';
export declare class Formik<
  ExtraProps = {},
  Values = object
> extends React.Component<FormikConfig<Values> & ExtraProps, FormikState<any>> {
  static defaultProps: {
    validateOnChange: boolean;
    validateOnBlur: boolean;
    isInitialValid: boolean;
    enableReinitialize: boolean;
  };
  initialValues: Values;
  hcCache: {
    [key: string]: (e: string | React.ChangeEvent<any>) => void;
  };
  hbCache: {
    [key: string]: (e: any) => void;
  };
  fields: {
    [field: string]: (nextValues?: any) => void;
  };
  constructor(props: FormikConfig<Values> & ExtraProps);
  registerField: (name: string, resetFn: (nextValues?: any) => void) => void;
  unregisterField: (name: string) => void;
  componentDidUpdate(
    prevProps: Readonly<FormikConfig<Values> & ExtraProps>
  ): void;
  setErrors: (errors: FormikErrors<Values>) => void;
  setTouched: (touched: FormikTouched<Values>) => void;
  setValues: (values: FormikValues) => void;
  setStatus: (status?: any) => void;
  setError: (error: any) => void;
  setSubmitting: (isSubmitting: boolean) => void;
  runValidationSchema: (
    values: FormikValues,
    onSuccess?: Function | undefined
  ) => void;
  runValidations: (values?: FormikValues) => void;
  handleChange: (value: any, fieldName?: string | undefined) => void;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement> | undefined) => void;
  submitForm: () => void;
  executeSubmit: () => void;
  executeChange: () => void;
  handleBlur: (eventOrString: any) => void | ((e: any) => void);
  setFieldTouched: (
    field: string,
    touched?: boolean,
    shouldValidate?: boolean
  ) => void;
  setFieldError: (field: string, message: string) => void;
  resetForm: (nextValues?: Values | undefined) => void;
  handleReset: () => void;
  setFormikState: (s: any, callback?: (() => void) | undefined) => void;
  getFormikActions: () => FormikActions<Values>;
  getFormikComputedProps: () => {
    dirty: boolean;
    isValid: boolean;
    initialValues: Values;
  };
  getFormikBag: () => {
    registerField: (name: string, resetFn: (nextValues?: any) => void) => void;
    unregisterField: (name: string) => void;
    handleBlur: (eventOrString: any) => void | ((e: any) => void);
    handleChange: (value: any, fieldName?: string | undefined) => void;
    handleReset: () => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement> | undefined) => void;
    validateOnChange: (FormikConfig<Values> & ExtraProps)['validateOnChange'];
    validateOnBlur: (FormikConfig<Values> & ExtraProps)['validateOnBlur'];
    dirty: boolean;
    isValid: boolean;
    initialValues: Values;
    setStatus(status?: any): void;
    setError(e: any): void;
    setErrors(errors: FormikErrors<Values>): void;
    setSubmitting(isSubmitting: boolean): void;
    setTouched(touched: FormikTouched<Values>): void;
    setValues(values: Values): void;
    setFieldValue(
      field: keyof Values,
      value: any,
      shouldValidate?: boolean | undefined
    ): void;
    setFieldValue(
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ): void;
    setFieldValue(field: string, value: any): void;
    setFieldError(field: keyof Values, message: string): void;
    setFieldError(field: string, message: string): void;
    setFieldError(field: string, message: string): void;
    setFieldTouched(
      field: keyof Values,
      isTouched?: boolean | undefined,
      shouldValidate?: boolean | undefined
    ): void;
    setFieldTouched(
      field: string,
      isTouched?: boolean | undefined,
      shouldValidate?: boolean | undefined
    ): void;
    setFieldTouched(field: string, isTouched?: boolean | undefined): void;
    validateForm(values?: any): void;
    resetForm(nextValues?: any): void;
    submitForm(): void;
    setFormikState<
      K extends
        | 'error'
        | 'values'
        | 'errors'
        | 'touched'
        | 'isSubmitting'
        | 'status'
        | 'submitCount'
    >(
      f: (
        prevState: Readonly<FormikState<Values>>,
        props: any
      ) => Pick<FormikState<Values>, K>,
      callback?: (() => any) | undefined
    ): void;
    setFormikState<
      K extends
        | 'error'
        | 'values'
        | 'errors'
        | 'touched'
        | 'isSubmitting'
        | 'status'
        | 'submitCount'
    >(
      state: Pick<FormikState<Values>, K>,
      callback?: (() => any) | undefined
    ): void;
    values: any;
    error?: any;
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
    isSubmitting: boolean;
    status?: any;
    submitCount: number;
  };
  getFormikContext: () => FormikContext<any>;
  render(): JSX.Element;
}
export declare function yupToFormErrors<Values>(
  yupError: any
): FormikErrors<Values>;
export declare function validateYupSchema<T extends FormikValues>(
  values: T,
  schema: any,
  sync?: boolean,
  context?: any
): Promise<Partial<T>>;
