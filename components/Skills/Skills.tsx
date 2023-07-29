'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import styles from './skills.module.css';

interface AnimatedSkillsProps {
    parentInView: boolean;
}

const Skills: React.FC<AnimatedSkillsProps> = ({ parentInView}) => {

    const controls = useAnimation();
    const skillsVariant = {
        hidden: {
            x: '-100%'
        },
        visible: {
            x: 0,
            transition: {
                duration: 1.2,
                ease: 'easeOut',
            },
        },
    };

    useEffect(() => {
        if(parentInView) {
            controls.start('visible');
        }
    }, [parentInView, controls]);

    return (
        <motion.div
            initial="hidden"
            animate={controls}
            variants={skillsVariant}
        >

            <h2 className={`text-6xl text-center text-white ${styles.gradientText}`}>Compétences Techniques</h2>

            <div className="flex justify-between border-2 border-grey p-6 rounded-xl shadow-around text-white w-1/2 m-auto mt-16">
                <div className="text-center">
                    <h3 className="text-xl font-bold">Les Langages</h3>
                    <ul className="mt-4">
                        <li>HTML et CSS</li>
                        <li>Javascript/Typescript</li>
                    </ul>
                </div>
                <div className="text-center">
                    <h3 className="text-xl font-bold">Les Frameworks</h3>
                    <ul className="mt-4">
                        <li>React/Next.js</li>
                        <li>Express</li>
                        <li>Vue.js</li>
                    </ul>
                </div>
                <div className="text-center">
                    <h3 className="text-xl font-bold">Les Langages</h3>
                    <ul className="mt-4">
                        <li>HTML et CSS</li>
                        <li>Javascript/Typescript</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills;