import React from "react";
import { Navbar } from "../components/layout";

/*
    If you want to use this HOCNavbar in any of the Component then Wrap it that component with HOCNavbar

    Ex :- 
        You want to add navbar in Home component then use following snippets while exporting Home component
        
        export default HOCNavbar(Home);

        Home component has access of all the props like someDefaultProp1, someDefaultProp2
*/

const HOCNavbar = (WrappedComp) => {
  return (props) => {
    let someDefaultProp1 = "default prop 1";
    let someDefaultProp2 = "default prop 2";

    return (
      <>
        <Navbar />
        <WrappedComp {...props} someDefaultProp1={someDefaultProp1} someDefaultProp2={someDefaultProp2}/>
      </>
    );
  };
};

export default HOCNavbar;
