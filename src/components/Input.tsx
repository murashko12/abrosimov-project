import {FC, InputHTMLAttributes} from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    isError?: boolean | string
    isSuccess?: boolean;
}

const Input: FC<Props> = ({ label, required, isError, isSuccess, ...attr }) => {
    return (
        <label className="flex flex-col gap-[10px]">
            <div>
                {/* {required && <span className="text-extra-100">*</span>} */}
                <span className="text-cyan-400 font-medium">{label}</span>
            </div>
            <input type={attr.type} {...attr} className={`bg-white-500 px-6 py-[10px] rounded border ${(isError && 'border-extra-100')||(isSuccess && 'border-extra-300') ||'border-white-600'} outline-none hover:border-white-700 focus:border-white-700 text-base ${attr.value &&  'border-white-700'}`} />
        </label>
    )
}

export default Input
