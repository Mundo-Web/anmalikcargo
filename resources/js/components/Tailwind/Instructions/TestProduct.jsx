import React from "react";

const TestProduct = () => {
    return (
        <section className="py-10 px-[5%] md:max-w-5xl 2xl:max-w-7xl mx-auto font-font-general bg-white my-4">
            <div className="mx-auto flex flex-col lg:flex-row justify-center items-center my-4 gap-4 md:gap-8">
                <h2 className="lg:hidden text-[26.3px] leading-[37.31px]  md:text-[46.3px]  md:leading-[47.31px] font-bold text-[#212529]  text-center flex gap-2 items-center justify-center">
                    ¿Te gustaría primero probar el disco?
                </h2>
                <p className="lg:hidden md:text-[28.01px]  text-center md:leading-[24.77px] text-[#333333]  ">
                    Disco Menstrual Descartable
                </p>

                {/* Image Section */}
                <div className="md:w-[562px] md:h-[562px] lg:w-[500.81px] lg:h-[500.81px]  2xl:w-[620.81px] 2xl:h-[620.81px] overflow-hidden md:order-none lg:order-1">
                    <img
                        src="https://i.ibb.co/fYP8Ttk7/image.png"
                        alt="wePack Product"
                        className="md:w-[562px] md:h-[562px] lg:w-[500.81px] lg:h-[500.81px]  2xl:w-[620.81px] 2xl:h-[620.81px] object-cover rounded-lg"
                        loading="lazy"
                    />
                </div>

                {/* Product Details */}
                <div className="md:w-[562px] lg:h-[562px] lg:w-[350px] 2xl:w-[475px] text-[#333333] lg:flex lg:flex-col lg:justify-center">
                    <h3 className="hidden lg:block md:text-[44.38px] md:leading-[45.78px] 2xl:text-[54.38px] 2xl:leading-[58.78px] font-bold">
                        ¿Te gustaría primero probar el disco?
                    </h3>
                    <p className="hidden lg:block md:text-[20px] 2xl:text-[29px] md:leading-[30px] 2xl:leading-[36px] mt-2 2xl:mt-4 ">
                        Disco Menstrual Descartable
                    </p>
                    <p className="sm:text-[15.49px] xl:text-[11px] 2xl:text-[14.05px] lg:my-3 leading-relaxed ">
                        <img
                            src="/assets/img/emojis/blossom.png"
                            className="h-[15.05px] inline-flex"
                        />{" "}
                        Recipiente menstrual con el doble de capacidad que una
                        copa, ideal para probar si se acomoda a ti antes de
                        comprar un Disco menstrual ¡Dura 1 solo ciclo!
                        <img
                            src="/assets/img/emojis/crescent-moon.png"
                            className="h-[15.05px] inline-flex"
                        />
                        <img
                            src="/assets/img/emojis/sparkling-heart.png"
                            className="h-[15.05px] inline-flex"
                        />
                    </p>

                    {/* Promo Banner */}
                    <div className="hidden lg:flex md:w-[158.43px] 2xl:w-[155px] md:h-[20px] 2xl:h-[25px] bg-[#212529] text-white rounded-[5.44px] my-4  items-center justify-center">
                        <p className="w-[158.43px]   md:h-[25.55px]  bg-[#212529]  text-white rounded-[5.44px] my-4 flex items-center justify-center md:text-[10.88px]  leading-[21.75px]">
                            <img
                                src="/assets/img/emojis/fire.png"
                                className="h-[11.88px] inline-flex mr-2"
                            />{" "}
                            <span className="font-bold md:text-[10.88px]">
                                AHORRA
                            </span>{" "}
                            S/ 50.00{" "}
                            <img
                                src="/assets/img/emojis/fire.png"
                                className="h-[11.88px] inline-flex ml-2"
                            />
                        </p>
                    </div>

                    <p className="hidden  lg:block md:text-[39.33px] 2xl:text-[49.33px] md:leading-[52.31px] 2xl:leading-[62.31px] tracking-[-0.01em] font-bold text-[#FC58BE]">
                        S/ 49.90
                    </p>
                    <p className="hidden lg:block md:text-[20.84px] 2xl:text-[24.84px] leading-[31.37px] text-[#B4B4B4]">
                        <del>Antes S/ 99.90</del>
                    </p>

                    {/* Add to Cart Button */}
                    <button className="hidden lg:flex mt-4 relative w-full md:h-[35.88px] 2xl:h-[39.88px] md:text-[10.59px]  2xl:text-[13.59px] leading-[13.59px] bg-[#FC58BE] text-white  rounded-[2.72px] border-[1.81px] border-[#FC58BE]   items-center justify-center">
                        <span className="">Añadir al carrito</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            className="fill-white h-3 absolute  top-1/2 -translate-y-1/2  right-16 "
                        >
                            <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                        </svg>
                    </button>

                    <div className="lg:hidden  md:w-[562px]  text-[#333333]">
                        <p className="text-[40.42px] gap-2 md:text-[54.38px] mt-2   md:leading-[68.69px] tracking-[-0.01em] font-bold text-[#FC58BE]">
                            S/ 49.90
                            <span className="ml-2 text-[20.39px] md:text-[27.38px]  leading-[34.58px] text-[#B4B4B4] font-normal">
                                <del>Antes S/ 99.90</del>
                            </span>
                        </p>

                        <div className="flex items-center justify-center gap-4 mt-6">
                            <button className="relative w-full md:w-[332px] h-[59px] md:text-[17.02px]  2xl:text-[13.59px] leading-[13.59px] bg-[#FC58BE] text-white  rounded-[6px] border-[1.81px] border-[#FC58BE]  flex items-center gap-4 justify-center">
                                <span className="">Añadir al carrito</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                    className="fill-white h-4  "
                                >
                                    <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestProduct;
