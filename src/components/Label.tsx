export function Label({placeholder, type, title}:any ) {
  return (
    <label className="space-y-1">
      <p>{title}</p>
      <input
        className="bg-cinza-1 p-4 w-full shadow-lg"
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
}
