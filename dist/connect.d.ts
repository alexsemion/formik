/// <reference types="react" />
import * as React from 'react';
import { FormikContext } from './types';
export declare const FormikProvider: React.ComponentClass<{
    value: FormikContext<any>;
    children: React.ReactNode;
  }>,
  FormikConsumer: React.ComponentClass<{
    children:
      | ((value: FormikContext<any>) => React.ReactNode)
      | [(value: FormikContext<any>) => React.ReactNode];
    observedBits?: number | undefined;
  }>;
export declare function connect<OuterProps, Values = {}>(
  Comp: React.ComponentType<
    OuterProps & {
      formik: FormikContext<Values>;
    }
  >
): React.ComponentClass<OuterProps> & {
  WrappedComponent: React.ComponentClass<
    OuterProps & {
      formik: FormikContext<Values>;
    }
  >;
};
