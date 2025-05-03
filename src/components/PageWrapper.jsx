export function PageWrapper({ children }) {
    return (
        <div className="min-h-dvh bg-gradient-to-b from-rose-200 to-white to-[60vh]">
            {children}
        </div>
    );
}