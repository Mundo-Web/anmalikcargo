import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "../../../../css/Swiper/instructionScrollbar.css";

// import required modules
import { Scrollbar } from "swiper/modules";

const features = [
    {
        icon: "/assets/img/instructions/suave.png",
        text: "Suave y flexible",
    },
    {
        icon: "/assets/img/instructions/made-in.png",
        text: "Hecho de 100% silicona alemana de grado médico",
    },
    {
        icon: "/assets/img/instructions/antifugas.png",
        text: "Con aros antifugas",
    },
    {
        icon: "/assets/img/instructions/disk.png",
        text: "Base y colita ergonómica para hacer más fácil el retiro",
    },
    {
        icon: "/assets/img/instructions/protection.png",
        text: "Hasta 12 horas de protección",
    },
];

const steps = [
    "ANTES DE EMPEZAR",
    "DOBLAR TU DISCO",
    "PONER Y RETIRAR",
    "CUIDADO Y LIMPIEZA",
];

const sizes = [
    {
        size: "A",
        height: "6.7",
        width: "6",
        capacidad: "30",
        igual: "4",
    },
    {
        size: "B",
        height: "7.6",
        width: "6.5",
        capacidad: "50",
        igual: "6",
    },
];

const WeDiskSection = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <>
            <div className="px-[5%]  max-w-lg lg:max-w-5xl 2xl:max-w-[75rem] md:px-0 mx-auto py-8  md:mt-20">
                <div className="flex justify-center items-center gap-8 flex-col  lg:flex-row">
                    <div className="w-full lg:w-1/2 relative flex items-center justify-center  h-[350px] sm:h-[450px]  md:h-[450px]  2xl:h-[520px]  overflow-hidden">
                        {/* <div className="text-[#EFEDF8] text-[100.92px]  md:text-[140.92px] lg:text-[100.92px] 2xl:text-[150.92px] md:leading-[100.24px] 2xl:leading-[122.24px] font-bold space-y-1">
                            <p>weDisk</p>
                            <p>weDisk</p>
                            <p>weDisk</p>
                        </div> */}
                        <img
                            className=" absolute object-contain inset-0 top-1/2 -translate-y-1/2 aspect-square h-full sm:h-[480.57px] lg:h-[470.57px] 2xl:h-[560.57px] w-auto"
                            src="/assets/img/instructions/copa2.png"
                            alt="weDisk"
                        />
                    </div>
                    <div className="bg-[#DDEC4C] flex flex-col items-center gap-4 w-full md:w-[520px] lg:w-[400px] 2xl:w-[500px] h-full  rounded-[50px]  md:rounded-[70px] lg:rounded-[40px] 2xl:rounded-[70px] font-poppins py-[10%] px-[5%] sm:py-[10%] sm:px-[10%] lg:p-10">
                        <h2 className="font-bold xl:mb-2 text-4xl md:text-5xl xl:text-6xl  2xl:text-7xl text-center">
                            weDisk
                        </h2>
                        <ul className="space-y-2 md:space-y-3 xl:space-y-4">
                            {features.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3 text-base 2xl:text-2xl leading-[20px] md:leading-snug"
                                >
                                    <img
                                        src={item.icon}
                                        className={`w-[20px] md:w-[25px] xl:w-[30px] 2xl:w-[40px] h-auto flex items-center justify-center brightness-100 grayscale`}
                                        alt={item.text}
                                        loading="lazy"
                                    />
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <nav className="mb-8 mt-16  font-bebas">
                    <ul className="grid grid-cols-2 gap-4 lg:gap-0 lg:flex font-bold justify-between border-b text-[20.48px] md:text-[34.48px]">
                        {steps.map((step, index) => (
                            <li
                                key={index}
                                className={`px-4 pb-2 cursor-pointer ${
                                    index === activeStep
                                        ? "text-[#5F48B7] border-b-4 border-[#5F48B7]"
                                        : "text-[#D5D0EA]"
                                }`}
                                onClick={() => setActiveStep(index)}
                            >
                                {step}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 lg:mb-12 px-8 lg:px-12 py-4 lg:py-8">
                    <div className="rounded-lg bg-text-pattern order-1 lg:order-none">
                        <video
                            autoPlay
                            loop
                            muted
                            className=" lg:pt-0  w-full h-auto lg:w-[405px]  lg:h-[405px] 2xl:w-[495px] 2xl:h-[495px] object-cover"
                        >
                            <source
                                src="/assets/img/backgrounds/como-usar-1.mp4"
                                type="video/mp4"
                            />
                            Tu navegador no soporta la reproducción de video.
                        </video>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-[48.75px] md:text-[52.75px] lg:text-[42.75px] 2xl:text-[52.75px] leading-[42.73px] font-bold mb-4">
                            Paso 1:
                        </h2>
                        <div className="inline-block bg-[#DDEC4C] px-6 py-2 rounded-full mb-6 w-max">
                            <span className="text-[22.57px] md:text-[27.57px] lg:text-[20.57px] 2xl:text-[27.57px] leading-[30.88px]">
                                Esteriliza tu disco
                            </span>
                        </div>
                        <p className="text-[20px] md:text-[24px] lg:text-[18px] 2xl:text-[24px] leading-[33px]">
                            Antes de usar tu weCup por primera vez, desinféctala
                            en una olla o en tu shakerCup con agua hirviendo
                            durante 2:30 minutos. <br />
                            Una vez que la uses, tendrás que repetir este paso
                            antes y al final de cada ciclo.
                        </p>
                    </div>
                </div>
                <div class="hidden lg:flex items-center justify-center gap-52 mt-24">
                    {sizes.map((zise, index) => (
                        <div
                            className="text-center hover:scale-105 transition-all duration-300"
                            key={index}
                        >
                            {/*8cm * 4cm */}
                            <div class=" flex items-center justify-center">
                                <div className="relative h-[290px]">
                                    <div className="h-[240px]  ">
                                        <img
                                            src="/assets/img/instructions/disk-item-size.png"
                                            alt={`Talla ${zise.zise}`}
                                            class="h-full w-auto rotate-[90deg]"
                                        />
                                    </div>

                                    {/* Línea y anotación de altura */}
                                    <div className="absolute left-[-70px] 2xl:left-[-80px]  top-0 h-full flex items-center">
                                        <span className="mr-2 2xl:w-[60px] font-bebas text-[23.61px] 2xl:text-[28.61px]">
                                            {zise.height} CM
                                        </span>
                                        {/* Triángulo superior */}
                                        <div className="absolute top-6 left-[55px] 2xl:left-[66px]  border-b-[5px] border-l-[5px] border-b-[#000000] border-l-transparent rotate-45"></div>
                                        <div className="h-[80%] border-l border-[#000000]"></div>
                                        {/* Triángulo inferior */}
                                        <div className="absolute bottom-6 left-[55px] 2xl:left-[66px]  border-t-[5px] border-l-[5px] border-t-[#000000] border-l-transparent -rotate-45"></div>
                                    </div>

                                    {/* Línea y anotación de ancho */}
                                    <div className="absolute top-[10px] left-0 w-full flex justify-center">
                                        <span className="absolute bottom-[2px] font-bebas text-[23.61px] 2xl:text-[28.61px]">
                                            {zise.width} CM
                                        </span>
                                        {/* Triángulo izquierdo */}
                                        <div className="absolute left-10 top-[-2px] border-r-[5px] border-b-[5px] border-r-[#000000] border-b-transparent rotate-45"></div>
                                        <div className="w-[70%] border-t border-[#000000]"></div>
                                        {/* Triángulo derecho */}
                                        <div className="absolute right-10 top-[-2px] border-l-[5px] border-b-[5px] border-l-[#000000] border-b-transparent -rotate-45"></div>
                                    </div>
                                </div>
                            </div>
                            <h3 class="md:text-[35px]  2xl:text-[45px] font-bold  mt-4">
                                Talla {zise.size}
                            </h3>
                            <p class="md:text-[18px] 2xl:text-[22px] leading-[20.98px] font-light">
                                Capacidad {zise.capacidad}ml
                                <br />
                                igual a {zise.igual} tampones
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-[5%] md:px-0 w-full md:pl-16 lg:hidden py-4  ">
                <Swiper
                    scrollbar={{
                        hide: true,
                    }}
                    modules={[Scrollbar]}
                    slidesPerView={1.5}
                    spaceBetween={0}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 0 },
                        640: { slidesPerView: 1.5, spaceBetween: 0 },
                    }}
                >
                    {sizes.map((zise, index) => (
                        <SwiperSlide key={index}>
                            <div className="text-center py-14 mb-4  h-[500px]  transition-all duration-300">
                                {/*8cm * 4cm */}
                                <div class=" flex items-center justify-center">
                                    <div className="relative h-[290px]">
                                        <div className="h-[200px] md:h-[240px]  ">
                                            <img
                                                src="/assets/img/instructions/disk-item-size.png"
                                                alt={`Talla ${zise.zise}`}
                                                class="h-full w-auto rotate-[90deg]"
                                            />
                                        </div>

                                        {/* Línea y anotación de altura */}
                                        <div className="absolute left-[-40px]  md:left-[-70px] 2xl:left-[-80px]  top-0 h-full flex items-center">
                                            <span className="mr-2 2xl:w-[60px] font-bebas text-[23.61px] 2xl:text-[28.61px]">
                                                {zise.height} CM
                                            </span>
                                            {/* Triángulo superior */}
                                            <div className="absolute top-6 left-[55px] 2xl:left-[66px]  border-b-[5px] border-l-[5px] border-b-[#000000] border-l-transparent rotate-45"></div>
                                            <div className="h-[80%] border-l border-[#000000]"></div>
                                            {/* Triángulo inferior */}
                                            <div className="absolute bottom-6 left-[55px] 2xl:left-[66px]  border-t-[5px] border-l-[5px] border-t-[#000000] border-l-transparent -rotate-45"></div>
                                        </div>

                                        {/* Línea y anotación de ancho */}
                                        <div className="absolute top-[10px] left-0 w-full flex justify-center">
                                            <span className="absolute bottom-[2px] font-bebas text-[23.61px] 2xl:text-[28.61px]">
                                                {zise.width} CM
                                            </span>
                                            {/* Triángulo izquierdo */}
                                            <div className="absolute left-10 top-[-2px] border-r-[5px] border-b-[5px] border-r-[#000000] border-b-transparent rotate-45"></div>
                                            <div className="w-[70%] border-t border-[#000000]"></div>
                                            {/* Triángulo derecho */}
                                            <div className="absolute right-10 top-[-2px] border-l-[5px] border-b-[5px] border-l-[#000000] border-b-transparent -rotate-45"></div>
                                        </div>
                                    </div>
                                </div>
                                <h3 class="text-[35px]  2xl:text-[45px] font-bold  mt-4">
                                    Talla {zise.size}
                                </h3>
                                <p class="text-[18px] 2xl:text-[22px] leading-[20.98px] font-light">
                                    Capacidad {zise.capacidad}ml
                                    <br />
                                    igual a {zise.igual} tampones
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default WeDiskSection;
