import "./Button.css";

export default function Button(props) {

  return (
    <button className="Btn"> {props.text}</button>
   )
}



// export default function ButtonTask({children, className="", variant="secondary", loading= false , size, ...props} ){
 
 
//     return(
//       <button className={`primary__btn ${className} btn-${variant} btn-${size}`}  {...props}>
//         {loading ? 'please wait' : children}
 
//      </button>
//     )
// }