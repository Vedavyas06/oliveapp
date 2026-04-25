import React from 'react';

import heroScreenshot from './assets/phone.png';
import barcodeImg from './assets/barcode-image.webp';
import product1 from './assets/product-1.webp';
import scorePreview from './assets/image.png';

const AppleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z" />
    <path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z" />
  </svg>
);

const ChevronDownIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 9l6 6l6 -6" />
  </svg>
);

const ArrowRightIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12l14 0" />
    <path d="M13 18l6 -6" />
    <path d="M13 6l6 6" />
  </svg>
);

const MenuIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 6l16 0" />
    <path d="M4 12l16 0" />
    <path d="M4 18l16 0" />
  </svg>
);

const CheckCircleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
  </svg>
);

const CrossCircleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" />
  </svg>
);

export default function OliveLandingPage() {
  return (
    <div className="font-sans antialiased text-neutral-800 bg-[#fafdfb]">
      
      {/* 1. HEADER & HERO SECTION */}
      <div className="mt-4 md:mt-8 mb-10 md:mb-24 2xl:max-w-7xl px-4 md:px-8 mx-auto">
        <div className="border relative border-neutral-200 rounded-2xl bg-[linear-gradient(180deg,_#F5FAF6_0%,_#F5FAF6_100%)] overflow-hidden">
          <div className="relative w-full z-10 pb-12 p-2">
            
            {/* Navbar (Desktop) */}
            <div className="z-[60] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full lg:flex font-pall sticky inset-x-0 top-4 px-6 py-4">
              <div className="flex flex-1 flex-row items-center justify-between">
                <a aria-label="Return to homepage" className="relative z-20 flex items-center px-2 py-1 text-sm font-normal text-black" href="/">
                  <h1 className="text-xl font-bold">Olive</h1>
                </a>
                <div className="absolute inset-x-0 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 pointer-events-none">
                  <nav className="relative flex justify-center gap-2 rounded-full font-pall px-4 py-3 pointer-events-auto">
                    <div className="relative">
                      <p className="cursor-pointer flex items-center gap-1 text-neutral-700 hover:opacity-[0.9] px-4 py-2 hover:bg-black/[0.03] rounded-lg">
                        <span className="font-inter">Solutions</span>
                        <ChevronDownIcon className="h-4 w-4 transition-all" />
                      </p>
                    </div>
                    <a className="relative text-neutral-600 px-4 py-2 font-inter rounded-lg hover:bg-black/[0.03]" href="#features">
                      <span className="block">Features</span>
                    </a>
                    <a className="relative text-neutral-600 px-4 py-2 font-inter rounded-lg hover:bg-black/[0.03]" href="#pricing">
                      <span className="block">Pricing</span>
                    </a>
                    <div className="relative">
                      <p className="cursor-pointer flex items-center gap-1 text-neutral-700 hover:opacity-[0.9] px-4 py-2 hover:bg-black/[0.03] rounded-lg">
                        <span className="font-inter">Blog</span>
                        <ChevronDownIcon className="h-4 w-4 transition-all" />
                      </p>
                    </div>
                    <a className="relative text-neutral-600 px-4 py-2 font-inter rounded-lg hover:bg-black/[0.03]" href="/restaurants">
                      <span className="block">Restaurants</span>
                    </a>
                    <div className="relative">
                      <p className="cursor-pointer flex items-center gap-1 text-neutral-700 hover:opacity-[0.9] px-4 py-2 hover:bg-black/[0.03] rounded-lg">
                        <span className="font-inter">Food</span>
                        <ChevronDownIcon className="h-4 w-4 transition-all" />
                      </p>
                    </div>
                  </nav>
                </div>
                <div className="flex items-center">
                  <a className="text-[#1F3824] mr-6 cursor-pointer relative z-40 font-medium" href="/sign-in">Sign in</a>
                  <a className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all text-white shadow-md hover:bg-[#2D5234] px-6 py-3 bg-[#1F3824] relative z-50 text-sm" target="_blank" rel="noreferrer" href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789">
                    Get Olive <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Navbar (Mobile) */}
            <div className="relative mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-4 py-4 lg:hidden rounded-2xl">
              <div className="flex w-full flex-row items-center justify-between">
                <a aria-label="Return to homepage" className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black" href="/">
                    <h1 className="text-xl font-bold">Olive</h1>
                </a>
                <div className="ml-4 cursor-pointer">
                  <MenuIcon className="text-black w-6 h-6 shrink-0" />
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex flex-col items-center mt-6 md:mt-12 relative z-50">
              {/* Trust Badge */}
              <div className="mb-6 flex gap-2 flex-col sm:items-center md:justify-center sm:flex-row">
                <div className="flex flex-row items-center justify-center md:justify-start">
                  {['1599566150163-29194dcaad36', '1535713875002-d1d0cf377fde', '1580489944761-15a19d654956', '1438761681033-6461ffad8d80'].map((id, index) => (
                    <div key={index} className="group relative -mr-3">
                      <div className="relative overflow-hidden rounded-full border-2 border-neutral-200 bg-white">
                        <img alt="Avatar" className="h-8 w-8 object-cover object-top" src={`https://images.unsplash.com/photo-${id}?w=128&q=75&fit=crop`} />
                      </div>
                    </div>
                  ))}
                  <div className="z-10 h-8 w-8 flex items-center justify-center rounded-full border-2 border-neutral-200 bg-white">
                    <span className="text-xs font-medium text-black/40">3k+</span>
                  </div>
                </div>
                <span className="font-dm-sans text-sm text-neutral-500 font-medium sm:ml-2">Trusted by thousands of healthy families</span>
              </div>

              <h1 className="py-2 md:pt-4 pb-4 mx-auto max-w-3xl text-[#1F3824] text-balance text-center font-[600] tracking-tight text-5xl md:text-7xl">
                The Safest Way to<br className="hidden md:block" /> Shop for Groceries
              </h1>
              <p className="mx-auto mt-2 md:text-lg text-base max-w-xl px-4 text-center text-[#1F1F1F]/60">
                Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family&apos;s Diet and Get Expert-Backed Food Insights
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
                <a target="_blank" rel="noreferrer" className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-full font-medium bg-[#1F3824] text-white shadow-md hover:bg-[#2D5234] px-8 py-3.5 text-base" href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789">
                  <AppleIcon className="w-5 h-5" /> Download for iOS
                </a>
                <a href="/community" className="text-[#1F3824] font-semibold flex items-center gap-1 hover:opacity-70 transition-opacity">
                  Join the Olive Community <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Layered Phone Mockup */}
            <div className="relative z-40 min-h-[500px] max-w-6xl mx-auto overflow-hidden mt-16 flex justify-center items-center">
              <img src={heroScreenshot} alt="App Screenshot" className="" />
            </div>

          </div>
        </div>
      </div>

      {/* 2. HOW IT WORKS SECTION */}
      <section className="md:my-24 my-8 max-w-7xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-[#1F3824] text-3xl md:text-5xl font-bold text-center mb-12">How the Olive Food Scanner App Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            
            {/* Card 1 */}
            <div className="p-8 rounded-xl bg-[#F5FAF6] border border-black/5 shadow-sm">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Scan & Detect</h3>
              <div className="h-[200px] bg-white rounded-xl flex items-center justify-center mb-4 border border-gray-100 relative">
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#1F3824] opacity-30 rounded-tl-lg"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#1F3824] opacity-30 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#1F3824] opacity-30 rounded-bl-lg"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#1F3824] opacity-30 rounded-br-lg"></div>
                <img src={barcodeImg} alt="Barcode scan" className="h-24 object-contain" />
              </div>
              <p className="text-sm text-neutral-600">When you open Olive simply scan the barcode to instantly detect product ingredients. Olive’s intuitive design means busy parents can quickly see which items contain harmful substances.</p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-xl bg-[#F5FAF6] border border-black/5 shadow-sm">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Data Analysis & Validation</h3>
              <div className="h-[200px] bg-white rounded-xl flex items-center justify-center mb-4 overflow-hidden relative border border-gray-100">
                 <div className="flex flex-col gap-3 w-full px-8">
                    <div className="w-full bg-[#D4E8D8] text-[#1F3824] p-3 rounded-lg text-center text-sm font-medium shadow-sm">Safe to consume</div>
                    <div className="w-full bg-gray-100 p-3 rounded-lg text-center text-sm text-gray-500 shadow-sm">Processing Level: Low</div>
                 </div>
              </div>
              <p className="text-sm text-neutral-600">After scanning, our food scanner app compares product data with an extensive, up-to-date food database using expert nutritional guidelines.</p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-xl bg-[#F5FAF6] border border-black/5 shadow-sm">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Actionable Insights</h3>
              <div className="h-[200px] bg-white rounded-xl flex items-center justify-center mb-4 overflow-hidden relative border border-gray-100">
                 <div className="flex gap-4 items-end">
                    <img src={product1} className="w-20 h-28 object-cover rounded-xl shadow-lg -rotate-6 transform" alt="Alternative 1" />
                    <img src={barcodeImg} className="w-20 h-28 object-cover rounded-xl shadow-lg rotate-6 transform" alt="Alternative 2" />
                 </div>
              </div>
              <p className="text-sm text-neutral-600">Once analyzed, Olive provides tailored insights and healthier product suggestions, empowering you to make better choices for your family's health.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BENEFITS LAYOUT */}
      <section className="relative bg-[#F5FAF6] pb-24">
        <div className="pb-32 md:py-48 bg-[#386641] px-4 pt-16">
          <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto gap-10">
            <h2 className="text-white text-3xl md:text-5xl font-bold max-w-lg">Health Benefits of Using Olive</h2>
            <div className="flex flex-col gap-6">
              <p className="text-white/90 md:text-xl max-w-sm">Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices.</p>
              <a href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full bg-white text-[#386641] px-6 py-3 text-sm font-medium hover:bg-gray-100">
                <AppleIcon className="w-5 h-5" /> Download for iOS
              </a>
            </div>
          </div>
        </div>

        <div className="-mt-24 flex flex-col px-4 md:px-8 gap-8 relative z-10">
          
          <div className="bg-white max-w-5xl mx-auto rounded-2xl grid grid-cols-1 lg:grid-cols-2 shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8 md:p-12 flex flex-col justify-center gap-6">
              <h3 className="text-[#1F3824] text-2xl md:text-3xl font-bold">Achieve Nutritional Clarity</h3>
              <ul className="space-y-4">
                {[
                  'Olive breaks down every ingredient into clear, actionable information.', 
                  'Olive scores products out of 100 based on additives, seedoils, processing level, and detected toxins.', 
                  'Our ranking system is designed by registered holistic health experts.'
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircleIcon className="w-6 h-6 text-[#AEB93E] shrink-0 mt-1" />
                    <span className="text-neutral-600 text-lg">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-b from-[#EFF6F0] to-[#9DC8A3] p-8 flex items-center justify-center min-h-[300px]">
              <img src={scorePreview} alt="Score preview" className="rounded-xl shadow-xl w-[70%] object-fit" />
            </div>
          </div>

          <div className="bg-white max-w-5xl mx-auto rounded-2xl grid grid-cols-1 lg:grid-cols-2 shadow-xl overflow-hidden border border-gray-100">
             <div className="p-8 md:p-12 flex flex-col justify-center gap-6">
              <h3 className="text-[#1F3824] text-2xl md:text-3xl font-bold">Proactive Ingredient Filtering</h3>
              <ul className="space-y-4">
                {[
                  'Olive flags harmful additives and controversial ingredients before they become mainstream concerns.', 
                  'Keeps you ahead of potential food safety concerns.', 
                  'Gives busy parents the confidence to make safer food choices every time.'
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircleIcon className="w-6 h-6 text-[#AEB93E] shrink-0 mt-1" />
                    <span className="text-neutral-600 text-lg">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-b from-[#FFF0F0] to-[#FFC2D0] p-8 flex items-center justify-center min-h-[300px]">
               <div className="flex flex-col gap-4">
                 <div className="bg-white rounded-full px-5 py-3 flex items-center gap-3 shadow-lg font-medium text-gray-800"><CrossCircleIcon className="text-red-500 w-6 h-6"/> Artificial Colors</div>
                 <div className="bg-white rounded-full px-5 py-3 flex items-center gap-3 shadow-lg font-medium text-gray-800"><CrossCircleIcon className="text-red-500 w-6 h-6"/> Sodium Nitrite</div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION */}
      <section className="py-24 bg-white px-4 text-center">
        <h2 className="text-[#1F3824] text-4xl md:text-5xl font-bold mb-4">Real Mothers<br />Real Results</h2>
        <p className="text-neutral-500 mb-16 text-lg">Join thousands of satisfied parents who trust Olive to help them make healthier choices.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 flex flex-col justify-between">
            <p className="text-neutral-700 mb-8 leading-relaxed">"Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry."</p>
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" alt="Megan L" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h6 className="font-bold text-[#1F3824]">Megan L.</h6>
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 flex flex-col justify-between">
            <p className="text-neutral-700 mb-8 leading-relaxed">"Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy."</p>
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Tina B" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h6 className="font-bold text-[#1F3824]">Tina B.</h6>
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 flex flex-col justify-between">
            <p className="text-neutral-700 mb-8 leading-relaxed">"After just a week of using Olive, I feel more in control of my family's nutrition than ever before. It's empowering to make informed choices so quickly."</p>
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" alt="Lila M" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h6 className="font-bold text-[#1F3824]">Lila M.</h6>
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
              </div>
            </div>
          </div>
        </div>

        <a href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789" target="_blank" rel="noreferrer" className="text-[#386641] font-semibold flex items-center gap-2 justify-center mt-12 hover:opacity-70 transition-opacity">
          Read all 3,147+ reviews <ArrowRightIcon className="w-5 h-5" />
        </a>
      </section>

      {/* 5. PRICING SECTION */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-[#1F3824] text-4xl md:text-5xl font-bold text-center mb-16">Healthy Choices<br />Honest Pricing</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Monthly Plan */}
            <div className="bg-[#F0F7F2] p-10 rounded-3xl flex flex-col justify-between border border-transparent shadow-sm hover:shadow-md transition-shadow">
              <div>
                <p className="text-lg font-semibold text-[#1F3824] uppercase tracking-wider mb-2">Monthly</p>
                <div className="flex items-end gap-1 mb-8">
                  <span className="text-5xl font-bold text-[#1F3824]">$14.99</span>
                  <span className="text-neutral-500 font-medium">/mo</span>
                </div>
                <ul className="space-y-4 mb-10">
                  <li className="flex gap-3 items-start"><CheckCircleIcon className="w-6 h-6 text-[#386641] shrink-0" /> <span className="font-medium text-[#1F3824]">Unlimited Scans</span></li>
                  <li className="flex gap-3 items-start"><CheckCircleIcon className="w-6 h-6 text-[#386641] shrink-0" /> <span className="font-medium text-[#1F3824]">Unlimited Database Searches</span></li>
                  <li className="flex gap-3 items-start"><CheckCircleIcon className="w-6 h-6 text-[#386641] shrink-0" /> <span className="font-medium text-[#1F3824]">Comprehensive Lab-Testing Data</span></li>
                </ul>
              </div>
              <a href="https://signup.oliveapp.com/" className="block text-center bg-[#1F3824] text-white py-4 rounded-full font-bold text-lg hover:bg-[#2D5234] transition-colors">Subscribe</a>
            </div>

            {/* Yearly Plan */}
            <div className="bg-[#386641] p-10 rounded-3xl flex flex-col justify-between text-white shadow-xl relative transform md:-translate-y-4">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#AEB93E] text-[#1F3824] px-6 py-1.5 rounded-full text-sm font-extrabold shadow-md tracking-wide">BEST VALUE</div>
              <div>
                <p className="text-lg font-semibold text-white/90 uppercase tracking-wider mb-2">Yearly</p>
                <div className="flex items-end gap-2 mb-8">
                  <span className="text-5xl font-bold">$69.99</span>
                  <span className="text-2xl line-through text-white/50">$179.88</span>
                  <span className="text-white/80 font-medium pb-1">/yr</span>
                </div>
                <ul className="space-y-4 mb-10">
                  <li className="flex gap-3 items-start"><CheckCircleIcon className="w-6 h-6 text-[#AEB93E] shrink-0" /> <span className="font-medium">Everything in monthly plan</span></li>
                  <li className="flex gap-3 items-start"><CheckCircleIcon className="w-6 h-6 text-[#AEB93E] shrink-0" /> <span className="font-medium">Get 7 months free</span></li>
                  <li className="flex gap-3 items-start"><CheckCircleIcon className="w-6 h-6 text-[#AEB93E] shrink-0" /> <span className="font-medium">60% Savings</span></li>
                </ul>
              </div>
              <a href="https://signup.oliveapp.com/" className="block text-center bg-white text-[#1F3824] py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-inner">Subscribe</a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INDEPENDENCE BANNER */}
      <section className="md:py-32 py-16 text-center max-w-5xl mx-auto px-4 border-t border-gray-100">
        <h2 className="text-[#FF9DB4] font-extrabold text-5xl md:text-[6rem] leading-none mb-6">100% Independent.</h2>
        <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-6 md:gap-10">
          <span className="text-[#FF9DB4] font-extrabold text-5xl md:text-[6rem] leading-none">Always.</span>
          <p className="text-xl md:text-2xl font-bold text-[#1F3824] text-left max-w-lg leading-snug">
            We <span className="text-[#AEB93E]">never monetize</span> through brand deals, affiliate links, or ads — so <span className="text-[#AEB93E]">you can trust</span> our recommendations are always aligned with our users.
          </p>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="max-w-7xl mx-auto px-4 md:px-8 mb-8 mt-12">
        <div className="bg-[#1F3824] text-white rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
            <div className="md:col-span-3">
              <h3 className="font-bold text-xl mb-6">Explore More Olive Tools</h3>
              <ul className="space-y-4">
                <li><a href="/foods" className="text-white/70 hover:text-white transition-colors">Explore Foods</a></li>
                <li><a href="/allergy-scanner-app" className="text-white/70 hover:text-white transition-colors">Allergy Scanner App</a></li>
                <li><a href="/gluten-free-scanner" className="text-white/70 hover:text-white transition-colors">Gluten Free Scanner</a></li>
                <li><a href="/dairy-free-app" className="text-white/70 hover:text-white transition-colors">Dairy Free App</a></li>
                <li><a href="/food-ingredient-checker" className="text-white/70 hover:text-white transition-colors">Food Ingredient Checker</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-3">
              <h3 className="font-bold text-xl mb-6">About</h3>
              <ul className="space-y-4">
                <li><a href="/blogs" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
                <li><a href="mailto:contact@oliveapp.com" className="text-white/70 hover:text-white transition-colors">Email us</a></li>
                <li><a href="/support" className="text-white/70 hover:text-white transition-colors">Contact us</a></li>
              </ul>
            </div>

            <div className="md:col-span-6 flex flex-col md:items-end text-left md:text-right">
              <h2 className="font-bold text-3xl md:text-4xl mb-8 max-w-sm">Keep your family safe with Olive</h2>
              <p className="text-white/80 mb-6 max-w-sm">Get the latest lab testing data sent directly to your inbox.</p>
              <form className="flex flex-col sm:flex-row gap-3 w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  required 
                  placeholder="Enter Email address" 
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" 
                />
                <button type="submit" className="bg-[#AEB93E] text-[#1F3824] px-8 py-4 rounded-full font-bold hover:bg-[#c2cc52] transition-colors shadow-lg">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mt-20 pt-8 border-t border-white/10 text-sm text-white/60 relative z-10">
            <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0 font-medium">
              <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</a>
              <a href="/sign-in" className="hover:text-white transition-colors">Sign in</a>
            </div>
            <p>© 2026 Olive Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}