import React from 'react'

export const NewsletterSmallSection = () => {
  return (
    <section class="bg-yellow-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="relative bg-yellow-100 pt-10 px-8 md:pt-20 md:px-12 aos-init">
            <div class="relative flex flex-col lg:flex-row justify-between items-center">
                <div class="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
                    <h3 class="h3 mb-2">Stay in the loop</h3>
                    <p class="text-lg">Join our newsletter to get top news before anyone else.</p>
                </div>
                <form class="w-full lg:w-1/2">
                    <div class="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                        <input type="email" class="w-full appearance-none bg-gray-100 border border-red-600 focus:border-red-500 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-gray-600 placeholder-gray-600" placeholder="Enter Your Email Address"/>
                        <button class="flex justify-center items-center font-semibold p-2 text-white bg-red-600 hover:bg-red-500 shadow">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
  )
}
