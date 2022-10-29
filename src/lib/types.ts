import { AppProps } from 'next/app';
import { Component } from 'react';

export type AuthenticatedPage = {
    role?: string;
    redirectTo?: string;
}

export type ExtendedPageProps = {
    requiresAuth?: boolean;
    auth?: AuthenticatedPage;
    layout?: Component;
}

export type ExtendedAppProps = AppProps & {
    Component: ExtendedPageProps;
}