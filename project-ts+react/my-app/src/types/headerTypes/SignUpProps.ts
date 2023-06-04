export interface SignUpProps {
    Click?: () => void;
    Sub?: (event: React.FormEvent<HTMLFormElement>) => void;
    onRegistration: (name: string) => void;
};
