export default function Button({ children, className = '', ...props }) {
  return (
    <button
      className={"inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-teal-500 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70 " + className}
      {...props}
    >
      {children}
    </button>
  )
}
