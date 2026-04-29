export default function Button({ children, className = '', ...props }){
  return (
    <button
      className={"inline-flex items-center gap-2 bg-accent text-white font-semibold px-4 py-2 rounded shadow-sm hover:opacity-95 transition " + className}
      {...props}
    >
      {children}
    </button>
  )
}
