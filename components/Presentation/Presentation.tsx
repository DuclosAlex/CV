import Image from "next/image";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCode  } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNode } from '@fortawesome/free-brands-svg-icons'

const Presentation: React.FC = () => {
    return (
        <div className="flex w-[70vw] h-[80vh] mt-8 mb-20 m-auto justify-between items-center">
            <div className="text-white w-[50%]">
                <h2 className="text-5xl font-bold">Bienvenue, je m'appelle Alex Duclos !</h2>
                <h3 className="text-3xl mt-4 text-gray-300">Je suis Développeur Fullstack Node.js à la recherche d'une opportunité</h3>
                <div className="flex mt-2 font-bold">
                    <p className="bg-[#51237e] mr-2 rounded-xl p-2">
                    <FontAwesomeIcon className="mr-2" icon={faCode} size="xl" style={{color: "#eee",}}/>
                      Développeur
                    </p>
                    <p className="bg-[#51237e] mr-2 rounded-xl p-2">
                    <FontAwesomeIcon className="mr-2" icon={faReact} size="xl" style={{color : "white", }}/>
                    Front-end
                    </p>
                    <p className="bg-[#51237e] rounded-xl p-2">
                    <FontAwesomeIcon className="mr-2" icon={faNode} size="xl" style={{color : "white", }}/>
                    Back-end
                    </p>
                </div>
            </div>

            <Image
                src="/assets/CV_picture.jpg"
                alt="Photo de profil"
                width={500}
                height={400}
                className="rounded-3xl"
            />

        </div>
    )
}

export default Presentation;