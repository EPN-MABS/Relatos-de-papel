import { useState } from 'react'

export const useModal = () => {
    const [open, setOpen] = useState(false);
    const [checkout, setCheckout] = useState(false);

    return { open, checkout, setOpen, setCheckout };
}