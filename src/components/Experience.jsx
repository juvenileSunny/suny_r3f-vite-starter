import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./avatar";
import { useControls } from "leva";

export const Experience = () => {

 const {animations} = useControls({
  animations: {
    value: 'typing',
    options: ['typing', 'standing', 'falling'],
  },
 });
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
        <Avatar animations={animations} />
      </group>
      <ambientLight intensity={2.5} />
    </>
  );
};
