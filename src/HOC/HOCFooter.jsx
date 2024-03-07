import React from "react";
import { Footer } from "../components/layout";

/*
    If you want to use this HOCFooter in any of the Component then Wrap it that component with HOCFooter

    Ex :- 
        You want to add Footer in Home component then use following snippets while exporting Home component
        
        export default HOCFooter(Home);

        Footer component has access of all the props like someDefaultProp1, someDefaultProp2
*/

const HOCFooter = (WrappedComp) => {
  return (props) => {
    let someDefaultProp1 = "default prop 1";
    let someDefaultProp2 = "default prop 2";

    return (
      <>
        <WrappedComp
          {...props}
          someDefaultProp1={someDefaultProp1}
          someDefaultProp2={someDefaultProp2}
        />
        
        <Footer />
      </>
    );
  };
};

export default HOCFooter;
