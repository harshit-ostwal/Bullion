export const Input = ({ labelValue, type, placeholder, value, className, onChange, disabled, required, ...props }) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={labelValue} className="text-sm font-medium text-primary-color">{labelValue}</label>
            <input
                id={labelValue}
                type={type}
                placeholder={placeholder}
                value={value}
                className={`text-color outline outline-1 outline-neutral-400 p-2 md:p-3 rounded-md min-w-[320px] sm:w-[450px] ${className}`}
                onChange={onChange}
                required={required}
                disabled={disabled}
            />
        </div>
    )
}