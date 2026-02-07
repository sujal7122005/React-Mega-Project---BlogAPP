import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className="relative overflow-hidden py-12 bg-slate-900 mt-auto">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center text-3xl font-bold text-white">
                                Pupple
                            </div>
                            <div>
                                <p className="text-sm text-slate-400">
                                    &copy; 2024 SupaBlog. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-wide mb-6 text-xs font-semibold uppercase text-indigo-400">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-3">
                                    <Link
                                        className="text-sm text-slate-300 hover:text-white transition-colors"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        className="text-sm text-slate-300 hover:text-white transition-colors"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        className="text-sm text-slate-300 hover:text-white transition-colors"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-sm text-slate-300 hover:text-white transition-colors"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-wide mb-6 text-xs font-semibold uppercase text-indigo-400">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-3">
                                    <Link
                                        className="text-sm text-slate-300 hover:text-white transition-colors"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        className="text-sm text-slate-300 hover:text-white transition-colors"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        className="text-sm text-slate-300 hover:text-white transition-colors"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-sm text-slate-300 hover:text-white transition-colors"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-wide mb-6 text-xs font-semibold uppercase text-indigo-400">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-3">
                                    <Link
                                        className="text-sm text-slate-300 hover:text-white transition-colors"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        className="text-sm text-slate-300 hover:text-white transition-colors"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-sm text-slate-300 hover:text-white transition-colors"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer