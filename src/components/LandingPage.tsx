const LandingPage = () => {
    return ( 
        <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight  text-gray-900 dark:text-white">Listing user profiles with <span className="font-extrabold">https://randomuser.me/</span> API</h2>
                <p className="mb-4 font-medium">I have implemented Dark Mode as a bonus task using context api, along with displaying maps and flags with user profile.</p>
                <p className="mb-4 font-medium">I have implemented search by filtering profiles which contain alphabets of the search text, and then display those.</p>
                <p className="mb-4 font-medium">I have used react-toast for displaying error if the api fails by following the documentation.</p>
                <p className="mb-4 font-medium">I have implemented pagination and filtering with gender</p>

                <a href="/profiles" className="inline-flex items-center font-bold text-black hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                    View Profiles
                    <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
        </section>
    )
}

export default LandingPage;