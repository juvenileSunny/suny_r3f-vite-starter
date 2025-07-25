// import React from 'react';
// import { useThree, useFrame, useGraph } from '@react-three/fiber';
// import { Environment, OrbitControls, Sky, ContactShadows } from "@react-three/drei";
// import { useControls } from "leva";
// import { Avatar } from "./avatar";
// import { Office, Chair } from "./Office";

// export const Experience = () => {
//   const { animations } = useControls({
//     animations: {
//       value: 'typing',
//       options: ['typing', 'standing', 'falling'],
//     },
//   });

//   return (
//     <>
//       <OrbitControls />
//       <Sky />
//       <Environment preset="sunset" />

//       <group position={[-0.356, 0.121, -1.441]}>
//         <Office scale={0.8} position={[0, 0, 0]} />

//         <ContactShadows 
//           opacity={0.45} 
//           scale={10} 
//           blur={1} 
//           far={10} 
//           resolution={256} 
//           color="#000000" 
//         />

//         <Avatar
//           animations={animations}
//           scale={1.5} // same as chair's parent
//           position={[-0.15, 0.15, -0.9]} // same as chair's parent
//           rotation={[-Math.PI, 0.575, -Math.PI]} // same as chair's parent
//         />


//         {animations === 'typing' && (
//           <mesh scale={[0.8, 0.5, 0.8]} position={[0, 0, 0]}>
//             <boxGeometry />
//             <meshStandardMaterial color="white" />
//           </mesh>
//         )}

//         <mesh receiveShadow scale={5} position-y={-0.001} rotation-x={-Math.PI / 2}>
//           <planeGeometry />
//           <meshStandardMaterial color="white" />
//         </mesh>
//       </group>
//     </>
//   );
// };
import React from 'react';
import { Environment, OrbitControls, Sky, ContactShadows } from "@react-three/drei";
import { useControls } from "leva";
import { Avatar } from "./avatar";
import { Office } from "./Office";

export const Experience = () => {
  const { animations } = useControls({
    animations: {
      value: 'typing',
      options: ['typing', 'standing', 'falling'],
    },
  });

  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset" />

      <group position={[-0.356, 0.121, -1.441]}>
        {/* Pass animation prop to control chair visibility */}
        <Office animation={animations} scale={0.8} position={[0, 0, 0]} />

        <ContactShadows 
          opacity={0.45} 
          scale={10} 
          blur={1} 
          far={10} 
          resolution={256} 
          color="#000000" 
        />

        <Avatar
          animations={animations}
          scale={1.5}
          position={[-0.15, 0.15, -0.9]}
          rotation={[-Math.PI, 0.575, -Math.PI]}
        />

        <mesh receiveShadow scale={5} position-y={-0.001} rotation-x={-Math.PI / 2}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </>
  );
};
