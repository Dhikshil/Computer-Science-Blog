import { useState } from "react";
import ARTICLES from '../../ARTICLES.js'

export default function SearchPage() {
    return (
        <>
            <form class="flex items-center max-w-7xl mx-auto mt-16">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search article name..." required />
                </div>
                <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg viewBox="-0.5 -0.5 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Search--Streamline-Iconoir" height="16" width="16">
                        <path d="m11.26925 11.26925 3.015375 3.015375" stroke="#fbfbfb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                        <path d="M0.7153750000000001 6.746124999999999c0 3.33075 2.7000625 6.0308125 6.03075 6.0308125 1.6683124999999999 0 3.1783125 -0.6773750000000001 4.270125 -1.7720625 1.0879999999999999 -1.0909375000000001 1.7606875 -2.59625 1.7606875 -4.25875 0 -3.3306875000000002 -2.7000625 -6.03075 -6.0308125 -6.03075 -3.3306875000000002 0 -6.03075 2.7000625 -6.03075 6.03075Z" stroke="#fbfbfb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
            </form>
            <ul className="flex flex-col max-w-4xl mx-auto mt-8">
                {ARTICLES.map((article) => {
                    return (
                        <li key={article.id} className="flex mb-8 text-left border-b-1 rounded p-4">
                            <div className="flex flex-col">
                                <h2>{article.name}</h2>
                                <p className="text-[0.9rem]">{article.desc}</p>
                                <div className='mt-auto'>
                                    <p className='text-[0.7rem]'>{article.author} | {article.date}</p>
                                </div>
                            </div>
                            <img src={article.imgShort} className="w-1/8 object-cover h-24" />
                        </li>
                    )
                })}
            </ul>
        </>
    );
};