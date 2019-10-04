import React from 'react';

// export default function Store({children}:{children:<HTMLElement>} ) {

type Tperson ={
  name: string;
}
const initialPerson :Tperson= {
  name:'abc Initial person after use'
}

export const StoreContext = React.createContext(initialPerson);

export default function Store({children }: {children:JSX.Element}) {
  return (
    <StoreContext.Provider value={initialPerson}>
      {children}      
    </StoreContext.Provider>
  );
}
