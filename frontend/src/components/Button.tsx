
export const Button = ({ onClick, children }: { onClick: () => void, children: React.ReactNode }) => {
    return <button onClick={onClick} className="px-8 py-4 text-2xl bg-emerald-500 hover:bg-emerald-700 text-white font-bold rounded">
        {children}
    </button>
}