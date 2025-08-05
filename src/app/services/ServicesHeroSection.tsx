"use client"
import React from "react";
import { SubsequentHero } from "../components/Hero";
import { Title } from "../components/Title";
import { motion } from "framer-motion";

export default function ServicesHeroSection() {
    return (
        <SubsequentHero  className="bg-[url('/images/gradient.png')] bg-cover bg-center">
            {/* Navigation Highlight */}
            <div className="relative z-10 flex justify-center">
                <Title label="Services" />
            </div>
            <div className="relative z-10 flex justify-center">
                <div className="w-full lg:w-[60%] flex flex-col gap-2 items-center text-center">
                    <motion.h1
                        className="text-2xl md:text-[3rem] font-bold text-white leading-tight"
                        initial={{ opacity: 1 }}
                        
                    >
                        {"Our Services".split(" ").map((word, wordIdx, arr) => (
                            <span key={wordIdx} style={{ display: "inline-block", whiteSpace: "pre" }}>
                                {word.split("").map((char, charIdx) => (
                                    <motion.span
                                        key={charIdx}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.04 * (arr.slice(0, wordIdx).join(" ").length + wordIdx + charIdx) }}
                                        style={{ display: "inline-block" }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                {wordIdx < arr.length - 1 && (
                                    <motion.span
                                        key={`space-${wordIdx}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.04 * (arr.slice(0, wordIdx + 1).join(" ").length + wordIdx) }}
                                        style={{ display: "inline-block" }}
                                    >
                                        {"\u00A0"}
                                    </motion.span>
                                )}
                            </span>
                        ))}
                    </motion.h1>
                    <motion.p
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:0.3, ease:"easeIn"}}
                        className="text-lg text-white"
                    >
                        The Imo State Ministry of Petroleum & Natural Gas Development offers a range of services focused on promoting responsible resource development, safeguarding communities, and advancing energy security and sustainability in the state. Our services are guided by the Petroleum Industry Act (PIA) and other national frameworks.
                    </motion.p>
                </div>
            </div>
        </SubsequentHero>
    );
} 

