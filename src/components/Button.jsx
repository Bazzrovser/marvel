

export default function Button ({children, isActive, ...props}) {
return (
<button 
{...props}
className= { isActive ? "btn-quotes btn-quotes-active " : "btn-quotes"}> {children} </button>
)
}