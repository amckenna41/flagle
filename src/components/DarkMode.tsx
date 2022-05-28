import React from "react";
import "../styles/toggle.css";
  
// const ToggleSwitch = ({ label }: {label: string}) => {
//     // https://bobbyhadz.com/blog/typescript-binding-element-implicitly-has-an-any-type#:~:text=The%20error%20%22Binding%20element%20implicitly,object%20parameter%20of%20the%20function.
//   return (
//     <div className="container">
//       {label}{" "}
//       <div className="toggle-switch">
//         <input type="checkbox" className="checkbox" 
//                name={label} id={label} />
//         <label className="label" htmlFor={label}>
//           <span className="inner" />
//           <span className="switch" />
//         </label>
//       </div>
//     </div>
//   );
// };
  
// const ToggleSwitch = ({ label }: {label: string}) => {
//   return (
//     <div className="container">
//       {label}{" "}
//       <div className="toggle-switch">
//       <input type="checkbox" id="toggle" className="toggle--checkbox" name={label} />
//       <label htmlFor="toggle" className="toggle--label">
//         <span className="toggle--label-background"></span>
//         </label>
//         <div className="background"></div>
//     </div>
//     </div>
//   );
// };

const ToggleSwitch = ({ label }: {label: string}) => {
    return (
      <div>
        <input type="checkbox" id="toggle"/>
        <label htmlFor="toggle"></label>
      </div>
    );
  };

export default ToggleSwitch;


{/* <input type="checkbox" id="toggle" class="toggle--checkbox">
<label for="toggle" class="toggle--label">
  <span class="toggle--label-background"></span>
</label>
<div class="background"></div> */}