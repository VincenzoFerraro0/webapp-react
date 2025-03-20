

export default function Search() {
    return (
        <div className=" ">
            <form className="sm:flex sm:gap-3">
                <input
                    type="text"

                    placeholder="Cerca..."
                    className="hidden rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 sm:block"
                />
                <button type="submit" className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block">
                    Cerca
                </button>
            </form>
        </div>
    );
}