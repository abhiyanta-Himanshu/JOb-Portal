
function Footer() {
    return (
        <div>
            <footer className="border-t border-t-gray-200 py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h2 className="text-xl font-bold">Job Hunt</h2>
                            <p className="text-sm">Your Company . All rights reserved</p>
                        </div>

                        <div className=" flex space-x-4 mt-4 md:mt-0">
                            <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook">
                                <svg 
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
                                    <path fill="#3b5998" d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.35C0 23.4.6 24 1.325 24h21.35C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0zM12 24V12h-3v-4h3V6c0-3.1 1.9-4.8 4.6-4.8 1.3 0 2.4.1 2.7.1v3h-1.5c-1.2 0-1.5.6-1.5 1.5v2.2h4l-.5 4h-3.5V24h-4z" />
                                </svg>
                            </a>

                            <a href="https://twitter.com" className="hover:text-gray-400" aria-label="Twitter">
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="#1DA1F2" d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.048-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                                </svg>
                            </a>

                            <a href="https://linkedin.com" className="hover:text-gray-400" aria-label="LinkedIn">
                                <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                                    <path fill="#0077B5" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer