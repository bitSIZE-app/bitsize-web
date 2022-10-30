import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { Loader } from '@components/Loader';
import { styled } from '@styles/bitTheme';

const StyledLoader = styled(Loader, {
    color: '$plum6'
})

type TProps = {
    children: ReactElement
}

export function WithAuth({children}:TProps) {
    const router = useRouter();
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated: () => router.push('/', '/', {})
    });

    if (status === 'loading') {
        return (
            <>
                <StyledLoader />
            </>
        );
    }

    if (status === 'authenticated' && !!session?.user) {
        return children;
    }
}