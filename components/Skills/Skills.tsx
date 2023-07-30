'use client';
import { useEffect } from 'react';
// TODO: Comment and astuce about framer-motion
import { useInView} from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import styles from './skills.module.css';
import svg from '../../public/assets/SVG/postgresql.svg';

const Skills: React.FC = () => {

    const controls = useAnimation();
    const { ref, inView} = useInView();

    const skillsVariant = {
        hidden: {
            x: '-100%',
            opacity : 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: 'easeOut',
            },
        },
    };

    useEffect(() => {
        if(inView) {
            controls.start('visible');
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={skillsVariant}
        >

            <h2 className={`text-6xl text-center text-white`}>Compétences Techniques</h2>

            <div className="flex justify-around text-white w-4/6 m-auto mt-16">
                <div className='max-w-1/3 w-full'>
                    <h3 className="text-2xl font-bold">Front-End</h3>
                    <ul className="mt-4">
                        <li className={`${styles.gradientText} flex text-xl font-semibold p-2`}><img className='mr-2' src='/assets/SVG/icons8-typescript.svg'/>Typescript</li>
                        <li className={`${styles.gradientText} flex text-xl font-semibold p-2`}><img className='mr-2' src='/assets/SVG/icons8-react.svg'/>React</li>
                        <li className='flex text-xl p-2'><img className='mr-2' src='/assets/SVG/icons8-tailwind-css.svg'/>Tailwind</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold">Back-end</h3>
                    <ul className="mt-4">
                        <li className={`${styles.gradientText} flex text-xl font-semibold`}><img className='mr-2' src='/assets/SVG/icons8-nodejs.svg'/>Node.js</li>
                        <li className='flex text-xl p-2'><img className='mr-2' src='/assets/SVG/icons8-express-js.svg'/>Express</li>
                        <li className='flex text-xl p-2'><img className='mr-2' src='/assets/SVG/icons8-postgresql.svg'/>Posgresql</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold">Outils</h3>
                    <ul className="mt-4">
                        <li className='flex text-xl p-2'><img className='mr-2' src='/assets/SVG/icons8-docker.svg'/>Docker</li>
                        <li className='flex text-xl p-2'><img className='mr-2' src='/assets/SVG/icons8-git.svg'/>Git/GitHub/GitLab</li>
                        <li className='flex text-xl p-2'><img className='mr-2' src='/assets/SVG/icons8-notion.svg'/>Notion</li>
                        <li className='flex text-xl p-2'><img className='mr-2' src='/assets/SVG/icons8-slack.svg'/>Slack</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills;