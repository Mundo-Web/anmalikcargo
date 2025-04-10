import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import bgHeader from "./images/header.png";
import Swal from "sweetalert2";
import SubscriptionsRest from "../../Actions/SubscriptionsRest";
import Global from "../../Utils/Global";
import HtmlContent from "../../Utils/HtmlContent";
import TextWithHighlight from "../../Utils/TextWithHighlight";

const subscriptionsRest = new SubscriptionsRest();

const BlogHeader = ({ categories, postRecent, landing }) => {
    const emailRef = useRef();
    const [saving, setSaving] = useState(false);

    const onEmailSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);

        const request = {
            email: emailRef.current.value,
        };
        const result = await subscriptionsRest.save(request);
        setSaving(false);

        if (!result) return;

        Swal.fire({
            title: "¡Éxito!",
            text: `Te has suscrito correctamente al blog de ${Global.APP_NAME}.`,
            icon: "success",
            confirmButtonText: "Ok",
        });

        emailRef.current.value = null;
    };

    const landingHero = landing.find(
        (item) => item.correlative === "page_blog_hero"
    );

    // Animaciones
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const imageHoverVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    const cardHoverVariants = {
        hover: {
            y: -5,
            transition: {
                type: "spring",
                stiffness: 400,
            },
        },
    };

    return (
        <motion.div
            className="lg:max-w-[82rem] 2xl:max-w-[92rem] mx-auto px-[5%] py-8 md:py-12  text-negro"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Header Section */}
            <motion.div className="mb-10" variants={itemVariants}>
                <motion.h2
                    className="w-full text-[32px] mt-8 lg:mt-0 text-center  lg:text-start leading-[34px] lg:text-5xl lg:leading-[102%]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.8,
                            ease: "backOut",
                        },
                    }}
                >
                    <TextWithHighlight
                        text={landingHero?.title}
                        split_dos_puntos={true}
                    />
                </motion.h2>
            </motion.div>

            {/* Featured Posts Section */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16"
                variants={containerVariants}
            >
                {/* Main Featured Post */}
                <motion.div
                    className="md:col-span-6"
                    variants={itemVariants}
                    whileHover="hover"
                >
                    <motion.a
                        href={`/blog/${postRecent[0].slug}`}
                        className="overflow-hidden rounded-3xl"
                        variants={cardHoverVariants}
                    >
                        <motion.div
                            className="relative h-64 md:h-80 rounded-3xl overflow-hidden"
                            whileHover="hover"
                        >
                            <motion.img
                                src={`/api/posts/media/${postRecent[0].image}`}
                                alt={postRecent[0].name}
                                className="w-full h-full object-cover"
                                variants={imageHoverVariants}
                                onError={(e) =>
                                    (e.target.src = "/api/cover/thumbnail/null")
                                }
                            />
                        </motion.div>
                        <motion.div
                            className="p-4 bg-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.div
                                className="text-sm text-azul font-bold mb-1"
                                whileHover={{ x: 3 }}
                            >
                                {postRecent[0].category.name}
                            </motion.div>
                            <motion.h2
                                className="text-xl font-bold mb-2"
                                whileHover={{ color: "#224483" }}
                            >
                                <TextWithHighlight text={postRecent[0].name} />
                            </motion.h2>
                            <motion.p
                                className="text-negro mb-3 line-clamp-2"
                                whileHover={{ color: "#4b5563" }}
                            >
                                <HtmlContent html={postRecent[0].description} />
                            </motion.p>
                            <div className="flex items-center text-sm text-[#224483]">
                                <span>
                                    {moment(postRecent[0].post_date).format(
                                        "ll"
                                    )}
                                </span>
                            </div>
                        </motion.div>
                    </motion.a>
                </motion.div>

                {/* Secondary Featured Posts */}
                <motion.div
                    className="md:col-span-6 space-y-6"
                    variants={containerVariants}
                >
                    {/* Secondary Post 1 */}
                    <motion.div
                        className="rounded-lg overflow-hidden"
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        <motion.a
                            href={`/blog/${postRecent[1].slug}`}
                            className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden"
                            variants={cardHoverVariants}
                        >
                            <motion.div
                                className="md:w-2/5 h-48 md:h-64 rounded-3xl overflow-hidden"
                                whileHover="hover"
                            >
                                <motion.img
                                    src={`/api/posts/media/${postRecent[1].image}`}
                                    alt={postRecent[1].name}
                                    className="w-full h-full object-cover"
                                    variants={imageHoverVariants}
                                    onError={(e) =>
                                        (e.target.src =
                                            "/api/cover/thumbnail/null")
                                    }
                                />
                            </motion.div>
                            <motion.div
                                className="md:w-3/5 p-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <motion.div
                                    className="text-sm text-azul font-bold mb-1"
                                    whileHover={{ x: 3 }}
                                >
                                    {postRecent[1].category.name}
                                </motion.div>
                                <motion.h2
                                    className="text-lg font-bold mb-2"
                                    whileHover={{ color: "#224483" }}
                                >
                                    <TextWithHighlight
                                        text={postRecent[1].name}
                                    />
                                </motion.h2>
                                <motion.p
                                    className="text-[#242424] mb-3 text-sm line-clamp-2"
                                    whileHover={{ color: "#4b5563" }}
                                >
                                    <HtmlContent
                                        html={postRecent[1].description}
                                    />
                                </motion.p>
                                <div className="flex items-center text-sm text-[#224483]">
                                    <span>
                                        {moment(postRecent[1].post_date).format(
                                            "ll"
                                        )}
                                    </span>
                                </div>
                            </motion.div>
                        </motion.a>
                    </motion.div>

                    {/* Secondary Post 2 */}
                    <motion.div
                        className="rounded-lg overflow-hidden"
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        <motion.a
                            href={`/blog/${postRecent[2].slug}`}
                            className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden"
                            variants={cardHoverVariants}
                        >
                            <motion.div
                                className="md:w-2/5 h-48 md:h-64 rounded-3xl overflow-hidden"
                                whileHover="hover"
                            >
                                <motion.img
                                    src={`/api/posts/media/${postRecent[2].image}`}
                                    alt={postRecent[2].name}
                                    className="w-full h-full object-cover"
                                    variants={imageHoverVariants}
                                    onError={(e) =>
                                        (e.target.src =
                                            "/api/cover/thumbnail/null")
                                    }
                                />
                            </motion.div>
                            <motion.div
                                className="md:w-3/5 p-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <motion.div
                                    className="text-sm text-azul font-bold mb-1"
                                    whileHover={{ x: 3 }}
                                >
                                    {postRecent[2].category.name}
                                </motion.div>
                                <motion.h2
                                    className="text-lg font-bold mb-2"
                                    whileHover={{ color: "#224483" }}
                                >
                                    <TextWithHighlight
                                        text={postRecent[2].name}
                                    />
                                </motion.h2>
                                <motion.p
                                    className="text-[#242424] mb-3 text-sm line-clamp-2"
                                    whileHover={{ color: "#4b5563" }}
                                >
                                    <HtmlContent
                                        html={postRecent[2].description}
                                    />
                                </motion.p>
                                <div className="flex items-center text-sm text-[#224483]">
                                    <span>
                                        {moment(postRecent[2].post_date).format(
                                            "ll"
                                        )}
                                    </span>
                                </div>
                            </motion.div>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default BlogHeader;
