import { createStandaloneToast} from '@chakra-ui/react';

const { toast } = createStandaloneToast();

export const showToast = (toastOption) => {
    if (toastOption.id && toast.isActive(toastOption.id)) {
       return;
    }

    // Corrected 'position' and added a default value for 'isClosable'
    return toast({ position: "top-right", isClosable: true, ...toastOption });
};