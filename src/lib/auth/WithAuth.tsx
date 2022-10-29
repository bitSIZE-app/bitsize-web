import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export function WithAuth({ children }) {
    const router = useRouter();

    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/', '/', {});
        }
    });

    const isUser = !!session?.user;

    useEffect(() => {
        if (status === 'loading') {
            return;
        }
    }, [isUser, status])

    if (isUser) {
        return children;
    }
}