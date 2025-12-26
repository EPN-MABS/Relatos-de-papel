import { DialogTitle } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useNavigate } from "react-router-dom";

export const Ok = (message) => {
    const { setOpen, setCart, setCheckout, setIsLoading } = useContext(GlobalContext);
    const navigate = useNavigate();

    const handleClose = () => {
        setOpen(false);
        setIsLoading(true);
        setCheckout(true);
        const timer1 = setTimeout(() => {
            const timer = setTimeout(() => {
                navigate("/");
                setIsLoading(false);
            }, 3000);

            setCart([]);
        }, 4000);
    }

    return (
        <>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-gray-800">
                <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:size-10 dark:bg-green-500/10">
                        <CheckCircleIcon aria-hidden="true" className="size-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <DialogTitle as="h3" className="text-base font-semibold text-gray-900 dark:text-white">
                            {message.message.title}
                        </DialogTitle>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {message.message.text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 dark:bg-gray-700/25">
                <button
                    type="button"
                    onClick={handleClose}
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 sm:ml-3 sm:w-auto dark:bg-blue-500 dark:shadow-none dark:hover:bg-blue-400">
                    OK
                </button>
            </div>
        </>
    )
}