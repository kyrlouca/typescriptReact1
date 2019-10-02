import React, { FunctionComponent } from 'react';

// export default function Store({children}:{children:<HTMLElement>} ) {
type FType = { 
  children: JSX.Element;
  titel:string
};
export default function Store({children }: FType) {
  return (
    <div>
      {children}      
    </div>
  );
}
