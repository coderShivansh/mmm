import Image from 'next/image';

// Import SVGs
import FigmaIcon from '@/public/icons/figma.svg';
import NextjsIcon from '@/public/icons/nextdotjs.svg';
import ReactIcon from '@/public/icons/react.svg';
// import ReactNativeIcon from '../public/icons/react-native.svg';
import FlutterIcon from '@/public/icons/flutter.svg';
import SwiftIcon from '@/public/icons/swift.svg';
import NodejsIcon from '@/public/icons/nodedotjs.svg';
import MongodbIcon from '@/public/icons/mongodb.svg';
import AwsIcon from '@/public/icons/aws.svg';
// import AzureIcon from '../public/icons/';
import TsIcon from '@/public/icons/typescript.svg'
import GithubIcon from '@/public/icons/github.svg'

const techList = [
  { name: 'Figma', icon: FigmaIcon },
  { name: 'Next.js', icon: NextjsIcon },
  { name: 'React', icon: ReactIcon },
  { name: 'Flutter', icon: FlutterIcon },
  { name: 'Swift', icon: SwiftIcon },
  { name: 'Node.js', icon: NodejsIcon },
  { name: 'MongoDB', icon: MongodbIcon },
  { name: 'AWS', icon: AwsIcon },
  { name: 'TypeScript', icon: TsIcon },
  { name: 'Github', icon: GithubIcon },
];

const TechWeUse = () => (
  <section className="py">
    <div className="container mx-auto">
      {/* <h2 className="text-3xl font-bold text-center mb-8">Tech We Use</h2> */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-12 justify-items-center">
        {techList.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <Image src={tech.icon} alt={`${tech.name} icon`} width={80} height={80} />
            <span className="mt-2 text-lg font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechWeUse;
