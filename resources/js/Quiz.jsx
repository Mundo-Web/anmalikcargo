import React, { useState } from "react";

import { createRoot } from "react-dom/client";
import Base from "./Components/Tailwind/Base";
import CreateReactScript from "./Utils/CreateReactScript";
import Header from "./components/Tailwind/Header";
import Footer from "./components/Tailwind/Footer";
// Componente principal del cuestionario
const Quiz = ({ showSlogan = true }) => {
    const [currentStep, setCurrentStep] = useState(7);

    return (
        <>
            <Header showSlogan={true} backgroundHeight="h-0" />
            <div className="relative z-10">
                {currentStep === 1 && (
                    <InitQuiz setCurrentStep={setCurrentStep} />
                )}
                {currentStep === 2 && (
                    <FirstQuiz setCurrentStep={setCurrentStep} />
                )}
                {currentStep === 3 && (
                    <SecondQuiz setCurrentStep={setCurrentStep} />
                )}
                {currentStep === 4 && (
                    <ThreeQuiz setCurrentStep={setCurrentStep} />
                )}
                {currentStep === 5 && (
                    <FourQuiz setCurrentStep={setCurrentStep} />
                )}
                {currentStep === 6 && (
                    <Result1Quiz setCurrentStep={setCurrentStep} />
                )}
                {currentStep === 7 && (
                    <Result2Quiz setCurrentStep={setCurrentStep} />
                )}
                {/* Agrega los demás pasos siguiendo el mismo patrón */}
            </div>
            <Footer />
        </>
    );
};

// Componente
const InitQuiz = ({ setCurrentStep }) => {
    return (
        <div className="flex flex-col lg:flex-row w-full justify-between lg:gap-16 2xl:gap-20 bg-[#EFE5FF]  items-center">
            <div className="flex py-10 lg:py-0 order-1  lg:order-none  flex-col w-full lg:w-1/2 justify-center items-center lg:items-end text-[#212529]">
                <div className="px-[5%] max-w-[44rem] lg:px-0  lg:pl-[5%]   lg:max-w-lg 2xl:max-w-2xl text-center ">
                    <h1 className="text-[50.64px] md:text-[65.64px] lg:text-[48.92px] 2xl:text-[68.92px] leading-[103.38px] font-bold  text-[#212529] tracking-[0.01em]">
                        weFem Quiz!
                    </h1>
                    <h2 className="text-[18.29px] md:text-[29.29px] lg:text-[25.92px]  2xl:text-[30.75px] leading-[46.12px] tracking-[1%] font-semibold ">
                        ¿Qué producto es perfecto para ti?
                    </h2>
                    <p className="text-[15.05px] md:text-[21.05px]  2xl:text-[22.1px] leading-[140%] tracking-[1%] mb-6 md:my-8 ">
                        Cada cuerpo es único. Tu flujo y estilo de vida pueden
                        afectar el ajuste y la sensación de tu copa o disco.
                        Responde nuestro cuestionario de 2 minutos para
                        descubrir qué producto weFem se adapta mejor a ti.
                    </p>
                    <div className="w-full flex justify-center">
                        <button
                            onClick={() => setCurrentStep(2)}
                            className="bg-[#FF9900] w-[250.23px] h-[60.09px] md:w-[308.23px] md:h-[70.09px] 2xl:w-[348.23px] lg:h-[65.09px] 2xl:h-[75.09px] hover:opacity-90 text-white font-semibold   rounded-xl  text-[18.03px] md:text-[22.03px] lg:text-[18.13px]  2xl:text-[23.13px] leading-[34.69px] tracking-[0.01em] transition-colors  duration-300 ease-in-out"
                        >
                            Continuar
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-end  w-full lg:w-1/2 ">
                <img
                    src="https://i.ibb.co/3mPwq5gH/7597f2cb62a9b3b354850510320d3167.png"
                    alt="weFem productos"
                    className="   w-full h-[256px]   md:h-[356px] lg:h-[600px]  2xl:min-w-[873px] 2xl:h-[789px]  object-cover object-center flex-shrink-0"
                />
            </div>
        </div>
    );
};

const FirstQuiz = ({ setCurrentStep }) => {
    return (
        <div className="flex flex-col lg:flex-row w-full justify-between lg:gap-16 2xl:gap-20 bg-[#EFE5FF]  items-center">
            <div className="flex py-10 lg:py-0 order-1  lg:order-none  flex-col w-full lg:w-1/2 justify-center items-center lg:items-end text-[#212529]">
                <div className="px-[5%] w-full lg:px-0  lg:pl-[5%]   lg:max-w-lg 2xl:max-w-[46rem] text-center ">
                    <h1 className="text-[50.64px] md:text-[65.64px] lg:text-[48.92px] 2xl:text-[68.92px] leading-[103.38px] font-bold  text-[#212529] tracking-[0.01em]">
                        weFem Quiz!
                    </h1>
                    <p className="text-[20.05px] md:text-[28.5px] lg:text-[19.1px] xl:text-[20.1px] 2xl:text-[29.81px] md:leading-[36.12px] 2xl:leading-[46.12px] tracking-[0.01em] font-semibold mb-4 gap-2">
                        ¿Esta es la primera vez que utilizarías un método
                        alternativo a toallas y tampones?
                        <img
                            src="/assets/img/emojis/thinking-face.png"
                            className="h-[20.05px] md:h-[30.05px] inline-flex ml-2"
                        />{" "}
                    </p>

                    <div className="gap-4 w-full flex flex-col md:flex-row items-center justify-center mt-12">
                        <button
                            onClick={() => setCurrentStep(3)}
                            className="w-full md:w-5/12 lg:w-1/2 text-[20.02px] bg-white hover:bg-[#FF9900]  text-[#FF9900] hover:text-white font-semibold py-3 2xl:py-4 px-6 rounded-[20px] lg:text-[16.94px] 2xl:text-[20.94px] tracking-[0.01em] transition-colors  border-2 border-[#FF9900] duration-300"
                        >
                            ¡Sí! Quiero probar <br /> algo nuevo
                        </button>
                        <button
                            onClick={() => setCurrentStep(4)}
                            className="w-full md:w-5/12 lg:w-1/2 text-[20.02px] bg-white text-[#FF9900] hover:bg-[#FF9900]  hover:text-white font-semibold  py-3 2xl:py-4 px-6 rounded-[20px] lg:text-[16.94px] 2xl:text-[20.94px] tracking-[0.01em] transition-colors  border-2 border-[#FF9900] duration-300"
                        >
                            No, ya he usado uno
                            <br /> antes
                        </button>
                    </div>
                    <div className="flex flex-row justify-between mt-12 mx-auto max-w-xl lg:w-full">
                        <button
                            onClick={() => setCurrentStep(1)}
                            className=" hover:opacity-90 font-semibold flex items-center gap-2 text-[#5F48B7] text-[22.12px] lg:text-[18.13px]  2xl:text-[23.13px] leading-[34.69px] tracking-[0.01em]"
                        >
                            <span className="rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="14"
                                    viewBox="0 0 18 14"
                                    fill="none"
                                >
                                    <path
                                        d="M16.9112 7.6395C17.2644 7.28632 17.2644 6.71368 16.9112 6.3605L11.1556 0.604968C10.8025 0.25178 10.2298 0.25178 9.87664 0.604968C9.52345 0.958156 9.52345 1.53079 9.87664 1.88397L14.9927 7L9.87664 12.116C9.52345 12.4692 9.52345 13.0418 9.87664 13.395C10.2298 13.7482 10.8025 13.7482 11.1556 13.395L16.9112 7.6395ZM0.896973 7.90439H16.2717V6.09561H0.896973V7.90439Z"
                                        fill="#5F48B7"
                                    />
                                </svg>
                            </span>
                            Volver
                        </button>
                        <button
                            onClick={() => setCurrentStep(3)}
                            className="text-[#5F48B7] hover:opacity-90 font-semibold flex items-center gap-2  text-[22.12px]  lg:text-[18.13px]  2xl:text-[23.13px] leading-[34.69px] tracking-[0.01em]"
                        >
                            Siguiente
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="14"
                                viewBox="0 0 18 14"
                                fill="none"
                            >
                                <path
                                    d="M16.9112 7.6395C17.2644 7.28632 17.2644 6.71368 16.9112 6.3605L11.1556 0.604968C10.8025 0.25178 10.2298 0.25178 9.87664 0.604968C9.52345 0.958156 9.52345 1.53079 9.87664 1.88397L14.9927 7L9.87664 12.116C9.52345 12.4692 9.52345 13.0418 9.87664 13.395C10.2298 13.7482 10.8025 13.7482 11.1556 13.395L16.9112 7.6395ZM0.896973 7.90439H16.2717V6.09561H0.896973V7.90439Z"
                                    fill="#5F48B7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-end  w-full lg:w-1/2">
                <img
                    src="https://i.ibb.co/Nd0JBkBk/image.png"
                    alt="weFem productos"
                    className="w-full h-[256px]   md:h-[356px] lg:h-[600px]  2xl:min-w-[873px] 2xl:h-[789px]  object-cover object-center flex-shrink-0"
                />
            </div>
        </div>
    );
};

const SecondQuiz = ({ setCurrentStep }) => {
    return (
        <div className="flex flex-col lg:flex-row w-full justify-between lg:gap-16 2xl:gap-20 bg-[#EFE5FF]  items-center">
            <div className="flex py-10 lg:py-0 order-1  lg:order-none  flex-col w-full lg:w-1/2 justify-center items-center lg:items-end text-[#212529]">
                <div className="px-[5%] max-w-[44rem] lg:px-0  lg:pl-[5%]   lg:max-w-xl 2xl:max-w-2xl text-center ">
                    <h1 className="text-[50.64px] md:text-[65.64px] lg:text-[48.92px] 2xl:text-[68.92px] leading-[103.38px] font-bold  text-[#212529] tracking-[0.01em]">
                        weFem Quiz!
                    </h1>
                    <h2 className="text-[29.81px]  2xl:text-[30.75px] md:leading-[36.12px] 2xl:leading-[46.12px]  tracking-[0.01em] font-semibold mb-4 gap-2">
                        ¿Cual es tu tipo de flujo?{" "}
                        <img
                            src="/assets/img/emojis/drop-of-blood.png"
                            className="h-[30.05px] inline-flex ml-2"
                            loading="lazy"
                        />
                    </h2>

                    <div className="gap-4 w-full flex flex-col md:flex-row items-center justify-center mt-12">
                        <button
                            onClick={() => setCurrentStep(4)}
                            className="bg-white hover:bg-[#FF9900]  text-[#FF9900] hover:text-white font-semibold  px-6 rounded-[20px] text-[20.94px] tracking-[0.01em] transition-colors w-full  md:w-[203px] h-[74px]  2xl:h-[94px] border-2 border-[#FF9900] duration-300"
                        >
                            Leve
                        </button>
                        <button
                            onClick={() => setCurrentStep(5)}
                            className="bg-white hover:bg-[#FF9900]  text-[#FF9900] hover:text-white font-semibold px-6 rounded-[20px] text-[20.94px] tracking-[0.01em] transition-colors w-full  md:w-[203px] h-[74px]  2xl:h-[94px] border-2 border-[#FF9900] duration-300"
                        >
                            Moderado
                        </button>
                        <button
                            onClick={() => setCurrentStep(5)}
                            className="bg-white hover:bg-[#FF9900]  text-[#FF9900] hover:text-white font-semibold  px-6 rounded-[20px] text-[20.94px] tracking-[0.01em] transition-colors w-full md:w-[203px] h-[74px]  2xl:h-[94px] border-2 border-[#FF9900] duration-300"
                        >
                            Abundante
                        </button>
                    </div>
                    <div className="flex flex-row justify-between mt-12 mx-auto max-w-xl lg:w-full">
                        <button
                            onClick={() => setCurrentStep(2)}
                            className=" hover:opacity-90 font-semibold flex items-center gap-2 text-[#5F48B7] text-[22.12px] lg:text-[18.13px]  2xl:text-[23.13px] leading-[34.69px] tracking-[0.01em]"
                        >
                            <span className="rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="14"
                                    viewBox="0 0 18 14"
                                    fill="none"
                                >
                                    <path
                                        d="M16.9112 7.6395C17.2644 7.28632 17.2644 6.71368 16.9112 6.3605L11.1556 0.604968C10.8025 0.25178 10.2298 0.25178 9.87664 0.604968C9.52345 0.958156 9.52345 1.53079 9.87664 1.88397L14.9927 7L9.87664 12.116C9.52345 12.4692 9.52345 13.0418 9.87664 13.395C10.2298 13.7482 10.8025 13.7482 11.1556 13.395L16.9112 7.6395ZM0.896973 7.90439H16.2717V6.09561H0.896973V7.90439Z"
                                        fill="#5F48B7"
                                    />
                                </svg>
                            </span>{" "}
                            Volver
                        </button>
                        <button
                            onClick={() => setCurrentStep(4)}
                            className="text-[#5F48B7] hover:opacity-90 font-semibold flex gap-2 items-center md:text-[18.13px]  2xl:text-[23.13px]  leading-[34.69px] tracking-[0.01em]"
                        >
                            Siguiente{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="14"
                                viewBox="0 0 18 14"
                                fill="none"
                            >
                                <path
                                    d="M16.9112 7.6395C17.2644 7.28632 17.2644 6.71368 16.9112 6.3605L11.1556 0.604968C10.8025 0.25178 10.2298 0.25178 9.87664 0.604968C9.52345 0.958156 9.52345 1.53079 9.87664 1.88397L14.9927 7L9.87664 12.116C9.52345 12.4692 9.52345 13.0418 9.87664 13.395C10.2298 13.7482 10.8025 13.7482 11.1556 13.395L16.9112 7.6395ZM0.896973 7.90439H16.2717V6.09561H0.896973V7.90439Z"
                                    fill="#5F48B7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-end  w-full lg:w-1/2">
                <img
                    src="https://i.ibb.co/twC7bmTR/image.png"
                    alt="weFem productos"
                    className="w-full h-[256px]   md:h-[356px] lg:h-[600px]  2xl:min-w-[873px] 2xl:h-[789px]  object-cover object-center flex-shrink-0"
                />
            </div>
        </div>
    );
};

const ThreeQuiz = ({ setCurrentStep }) => {
    return (
        <div className="flex flex-col lg:flex-row w-full justify-between lg:gap-16 2xl:gap-20 bg-[#EFE5FF]  items-center">
            <div className="flex py-10 lg:py-0 order-1  lg:order-none  flex-col w-full lg:w-1/2 justify-center items-center lg:items-end text-[#212529]">
                <div className="px-[5%] w-full max-w-[40rem] lg:px-0  lg:pl-[5%] lg:w-[46rem]   lg:max-w-xl 2xl:max-w-2xl text-center ">
                    <h1 className="text-[50.64px] md:text-[65.64px] lg:text-[48.92px] 2xl:text-[68.92px] leading-[103.38px] font-bold  text-[#212529] tracking-[0.01em]">
                        weFem Quiz!
                    </h1>
                    <h2 className="text-[18.81px]   md:text-[29.81px]   lg:text-[20.1px] 2xl:text-[30.75px] md:leading-[36.12px] 2xl:leading-[46.12px] tracking-[0.01em] font-semibold mb-4 gap-2">
                        ¿Te interesaría tener relaciones con <br /> la regla sin
                        que manche?{" "}
                        <img
                            src="/assets/img/emojis/smiling-face-with-horns.png"
                            className="h-[30.05px] inline-flex ml-2"
                            loading="lazy"
                        />
                    </h2>

                    <div className="gap-4 w-full flex flex-col md:flex-row md:mt-8 2xl:mt-12">
                        <button
                            onClick={() => setCurrentStep(5)}
                            className="bg-white w-full md:w-1/2 hover:bg-[#FF9900]  text-[#FF9900] hover:text-white font-semibold py-4 px-6 rounded-[20px] text-[20.94px] lg:text-[18.94px] 2xl:text-[20.94px] tracking-[0.01em] transition-colors h-[94px]  lg:h-[74px]  2xl:h-[94px] border-2 border-[#FF9900] duration-300"
                        >
                            ¡Sí! Sería lo max{" "}
                            <img
                                src="/assets/img/emojis/fire.png"
                                className="h-[30.05px] inline-flex ml-2"
                                loading="lazy"
                            />
                        </button>
                        <button
                            onClick={() => setCurrentStep(7)}
                            className="bg-white w-full md:w-1/2 hover:bg-[#FF9900]  text-[#FF9900] hover:text-white font-semibold py-4 px-6 rounded-[20px] text-[20.94px] lg:text-[18.94px] 2xl:text-[20.94px] tracking-[0.01em] transition-colors  h-[94px] lg:h-[74px]  2xl:h-[94px] border-2 border-[#FF9900] duration-300"
                        >
                            No, me da igual{" "}
                            <img
                                src="/assets/img/emojis/woman-shrugging.png"
                                className="h-[30.05px] inline-flex ml-2"
                                loading="lazy"
                            />
                        </button>
                    </div>
                    <div className="flex flex-row justify-between mt-12 mx-auto max-w-xl lg:w-full">
                        <button
                            onClick={() => setCurrentStep(4)}
                            className=" hover:opacity-90 font-semibold flex items-center gap-2 text-[#5F48B7] text-[22.12px] lg:text-[18.13px]  2xl:text-[23.13px] leading-[34.69px] tracking-[0.01em]"
                        >
                            <span className="rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="14"
                                    viewBox="0 0 18 14"
                                    fill="none"
                                >
                                    <path
                                        d="M16.9112 7.6395C17.2644 7.28632 17.2644 6.71368 16.9112 6.3605L11.1556 0.604968C10.8025 0.25178 10.2298 0.25178 9.87664 0.604968C9.52345 0.958156 9.52345 1.53079 9.87664 1.88397L14.9927 7L9.87664 12.116C9.52345 12.4692 9.52345 13.0418 9.87664 13.395C10.2298 13.7482 10.8025 13.7482 11.1556 13.395L16.9112 7.6395ZM0.896973 7.90439H16.2717V6.09561H0.896973V7.90439Z"
                                        fill="#5F48B7"
                                    />
                                </svg>
                            </span>{" "}
                            Volver
                        </button>
                        <button
                            onClick={() => setCurrentStep(5)}
                            className="text-[#5F48B7] hover:opacity-90 font-semibold flex gap-2 items-center text-[22.12px] lg:text-[18.13px]   2xl:text-[23.13px]  leading-[34.69px] tracking-[0.01em]"
                        >
                            Siguiente{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="14"
                                viewBox="0 0 18 14"
                                fill="none"
                            >
                                <path
                                    d="M16.9112 7.6395C17.2644 7.28632 17.2644 6.71368 16.9112 6.3605L11.1556 0.604968C10.8025 0.25178 10.2298 0.25178 9.87664 0.604968C9.52345 0.958156 9.52345 1.53079 9.87664 1.88397L14.9927 7L9.87664 12.116C9.52345 12.4692 9.52345 13.0418 9.87664 13.395C10.2298 13.7482 10.8025 13.7482 11.1556 13.395L16.9112 7.6395ZM0.896973 7.90439H16.2717V6.09561H0.896973V7.90439Z"
                                    fill="#5F48B7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-end  w-full lg:w-1/2">
                <img
                    src="https://i.ibb.co/7xKxbRz0/image.png"
                    alt="weFem productos"
                    className="w-full h-[256px]   md:h-[356px] lg:h-[600px]  2xl:min-w-[873px] 2xl:h-[789px]  object-cover object-center flex-shrink-0"
                />
            </div>
        </div>
    );
};
const FourQuiz = ({ setCurrentStep }) => {
    return (
        <div className="flex flex-col lg:flex-row w-full justify-between lg:gap-16 2xl:gap-20 bg-[#EFE5FF]  items-center">
            <div className="flex py-10 lg:py-0 order-1  lg:order-none  flex-col w-full lg:w-1/2 justify-center items-center lg:items-end text-[#212529]">
                <div className="px-[5%] w-full  lg:px-0  lg:pl-[5%] lg:w-[46rem]   lg:max-w-xl 2xl:max-w-[44rem] text-center ">
                    <h2 className="text-[20.27px] md:text-[31.27px] lg:text-[25px] 2xl:text-[32.21px] leading-[46.12px] tracking-[0.01em] font-semibold mb-4 gap-2">
                        ¡Genial! Hemos encontrado el producto menstrual perfecto
                        para ti{" "}
                        <img
                            src="/assets/img/emojis/growing-heart.png"
                            className="h-[30.05px] inline-flex ml-2"
                            loading="lazy"
                        />
                    </h2>
                    <p className="mb-8 text-[18.07px] md:text-[23.07px] lg:text-[17.77px] 2xl:text-[23px] leading-[31.81px] tracking-[0.01em]">
                        Ingresa tu email para obtener tus resultados y recibir
                        un email con un {" "}
                        <strong>cupón exclusivo de 10% OFF</strong> ¡ solo para
                        ti!
                    </p>
                    <div className=" w-full flex items-center justify-center ">
                        <input
                            placeholder="Déjanos tu email aquí"
                            className="bg-white w-full md:w-9/12 2xl:w-10/12 hover:bg-gray-100 text-[#FF9900] font-semibold  px-6 rounded-[20px] text-lg transition-colors border-2 border-[#FF9900] focus:ring-0 h-[80px] 2xl:h-[94px]  focus:outline-none text-[20.94px] placeholder:text-[20.94px] placeholder:text-[#FF9900] placeholder:text-center"
                        ></input>
                    </div>
                    <p className="mb-8 text-[15.78px] lg:text-[14px] 2xl:text-[16.26px]  leading-[22.84px] tracking-[0.01em] mt-6 text-[#000000]">
                        Dejándonos tu e-mail aceptas recibir novedades y
                        promociones de wefem
                    </p>
                    <div className="space-x-4 w-full flex justify-center">
                        <button
                            onClick={() => setCurrentStep(6)}
                            className="bg-white hover:bg-[#FF9900]  text-[#FF9900] hover:text-white font-semibold py-4 px-6 rounded-[20px] text-[20.13px]  2xl:text-[23.13px] tracking-[0.01em] transition-colors w-[393px] h-[80px] 2xl:h-[94px] border-2 border-[#FF9900] duration-300"
                        >
                            ¡Obtener mis resultados!
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-end  w-full lg:w-1/2">
                <img
                    src="https://i.ibb.co/3yHQRrpx/image.png"
                    alt="weFem productos"
                    className="w-full h-[256px]   md:h-[356px] lg:h-[600px]  2xl:min-w-[873px] 2xl:h-[789px]  object-cover object-center flex-shrink-0"
                />
            </div>
        </div>
    );
};
const Result1Quiz = ({ setCurrentStep }) => {
    return (
        <div className="flex flex-col lg:flex-row w-full justify-between lg:gap-16 2xl:gap-20 bg-[#EFE5FF]  items-center">
            <div className="flex py-10 lg:py-0 order-1  lg:order-none  flex-col w-full lg:w-1/2 justify-center items-center lg:items-end text-[#212529]">
                <div className="px-[5%] w-full  lg:px-0  lg:pl-[5%] lg:w-[46rem] 2xl:w-[50rem]  lg:max-w-[35rem] 2xl:max-w-[47rem] text-center ">
                    <h2 className=" md:text-[25.55px] lg:text-[25px] 2xl:text-[30.75px] 2xl:leading-[20.12px] tracking-[0.01em] font-semibold 2xl:mb-4 gap-2">
                        Tu mejor aliada sería
                    </h2>
                    <h1 className="text-[50.82px] md:text-[82.82px] lg:text-[58.92px] leading-[36.26px]  2xl:text-[86.26px] 2xl:leading-[86.26px] font-bold mb-4 text-[#212529] tracking-[0.01em]">
                        <img
                            src="/assets/img/emojis/fire.png"
                            className="h-[50.05px] md:h-[80.05px] lg:h-[50.05px]  2xl:2xl:h-[80.05px] inline-flex ml-2 mb-4"
                            loading="lazy"
                        />{" "}
                        weDisk{" "}
                        <img
                            src="/assets/img/emojis/fire.png"
                            className="h-[50.05px] md:h-[80.05px] lg:h-[50.05px]  2xl:h-[80.05px] inline-flex ml-2 mb-4"
                            loading="lazy"
                        />{" "}
                    </h1>
                    <p className="text-[16.47px] mb-8 md:text-[21.47px] lg:text-[16px] 2xl:text-[22.37px] leading-[29.93px] tracking-[0.01em]">
                        Un disco menstrual de silicona que recoge tu flujo de
                        forma segura. Se coloca en la base del cuello uterino,
                        permitiéndote así tener sexo con la regla, sin manchas
                        ni fugas.
                    </p>
                    <p className="text-[16.47px] mb-8 md:text-[21.47px] lg:text-[17.77px] 2xl:text-[22.37px] leading-[29.93px] tracking-[0.01em] font-bold mt-6 text-[#212529]">
                        ¡Revisa tu e-mail para obtener tu descuento exclusivo!
                    </p>
                    <div className="space-x-4 w-full flex justify-center mt-6">
                        <a
                            href="/product"
                            className="inline-flex items-center justify-center bg-white hover:bg-[#FF9900]  text-[#FF9900] hover:text-white font-semibold  px-6 rounded-[20px] text-[20.94px] tracking-[0.01em] transition-colors w-[377.32px] h-[90.25px] lg:w-[300px] 2xl:w-[393px] lg:h-[86px] 2xl:h-[94px] border-2 border-[#FF9900] duration-300"
                        >
                            ¡Comprar ahora!
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex justify-end  w-full lg:w-1/2">
                <img
                    src="https://i.ibb.co/hxwjRPKc/image.png"
                    alt="weFem productos"
                    className="w-full h-[256px]   md:h-[356px] lg:h-[600px]  2xl:min-w-[873px] 2xl:h-[789px]  object-cover object-center flex-shrink-0"
                />
            </div>
        </div>
    );
};
const Result2Quiz = ({ setCurrentStep }) => {
    return (
        <div className="bg-[#EFE5FF] flex flex-col lg:flex-row w-full justify-between lg:gap-16 2xl:gap-20   items-center">
            <div className="flex py-10 lg:py-0 order-1  lg:order-none  flex-col w-full lg:w-1/2 justify-center items-center lg:items-end text-[#212529]">
                <div className="px-[5%] w-full  lg:px-0  lg:pl-[5%] lg:w-[46rem] 2xl:w-[50rem]  lg:max-w-[35rem] 2xl:max-w-[47rem] text-center ">
                    <h2 className=" md:text-[25.55px] lg:text-[25px] 2xl:text-[30.75px] 2xl:leading-[20.12px] tracking-[0.01em] font-semibold 2xl:mb-4 gap-2">
                        Tu mejor aliada sería
                    </h2>
                    <h1 className="text-[50.82px] md:text-[82.82px] lg:text-[58.92px] leading-[36.26px]  2xl:text-[86.26px] 2xl:leading-[86.26px] font-bold mb-4 text-[#212529] tracking-[0.01em]">
                        <img
                            src="/assets/img/emojis/wine-glass.png"
                            className="h-[50.05px] md:h-[80.05px] lg:h-[50.05px]  2xl:h-[80.05px] inline-flex ml-2 mb-4"
                            loading="lazy"
                        />{" "}
                        weCup
                        <img
                            src="/assets/img/emojis/wine-glass.png"
                            className="h-[50.05px] md:h-[80.05px] lg:h-[50.05px]  2xl:h-[80.05px] inline-flex ml-2 mb-4"
                            loading="lazy"
                        />{" "}
                    </h1>
                    <p className="text-[16.47px] mb-8 md:text-[21.47px] lg:text-[16px] 2xl:text-[22.37px] leading-[29.93px] tracking-[0.01em]">
                        Una copa menstrual de silicona que recoge tu flujo de
                        forma segura. Se coloca en el canal vaginal y te
                        permitirá moverte cómodamente, sin irritaciones ni
                        fugas.
                    </p>
                    <p className="text-[16.47px] mb-8 md:text-[21.47px] lg:text-[17.77px] 2xl:text-[22.37px] leading-[29.93px] tracking-[0.01em] font-bold mt-6 text-[#212529]">
                        ¡Revisa tu e-mail para obtener tu descuento exclusivo!
                    </p>
                    <div className="space-x-4 w-full flex justify-center mt-6">
                        <a
                            href="/product"
                            className="inline-flex items-center justify-center bg-white hover:bg-[#FF9900]  text-[#FF9900] hover:text-white font-semibold  px-6 rounded-[20px] text-[20.94px] tracking-[0.01em] transition-colors w-[377.32px] h-[90.25px] lg:w-[300px] 2xl:w-[393px] lg:h-[86px] 2xl:h-[94px] border-2 border-[#FF9900] duration-300"
                        >
                            ¡Comprar ahora!
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex justify-end  w-full lg:w-1/2">
                <img
                    src="https://i.ibb.co/XrvRRyK3/image.png"
                    alt="weFem productos"
                    className="w-full h-[256px]   md:h-[356px] lg:h-[600px]  2xl:min-w-[873px] 2xl:h-[789px]  object-cover object-center flex-shrink-0"
                />
            </div>
        </div>
    );
};

CreateReactScript((el, properties) => {
    createRoot(el).render(
        <Base {...properties}>
            <Quiz {...properties} />
        </Base>
    );
});
