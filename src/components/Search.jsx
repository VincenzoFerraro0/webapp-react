// Search.jsx
export default function Search({ mobile }) {
    return (
        <div className={mobile ? "w-full" : ""}>
            <form className={`${mobile ? "flex flex-col gap-3" : "sm:flex sm:gap-3"}`}>
                <input
                    type="text"
                    placeholder="Cerca..."
                    className={`rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white placeholder:text-teal-200 transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${mobile ? "w-full" : "hidden sm:block"
                        }`}
                />
                <button
                    type="submit"
                    className={`rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-700 transition hover:text-teal-800 hover:bg-gray-200 ${mobile ? "w-full" : "hidden sm:block"
                        }`}
                >
                    Cerca
                </button>
            </form>
        </div>
    );
}