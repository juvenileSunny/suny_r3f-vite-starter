/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public\models\scene.gltf 
*/

import React from 'react'   
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { floor } from 'three/tsl'



export function Office(props) {
  const { nodes, materials } = useGLTF('./models/scene.gltf')
  const texture = useTexture('./textures/baked.jpg')
  const floor = useTexture('./textures/floor_texture.jpg')
  const rug = useTexture('./textures/rug_material.jpg')
  texture.flipY = false; 
  texture.encoding = THREE.sRGBEncoding; // Ensure the texture is in sRGB encoding

  const textureMaterials = new THREE.MeshStandardMaterial({
    map: texture,
  });

  const floorTextureMaterials = new THREE.MeshStandardMaterial({
    map: floor,
  });

  const rugTextureMaterials = new THREE.MeshStandardMaterial({
    map: rug,
  });

  return (
    <group {...props} dispose={null}>
      <group name="RootNode003" position={[1.368, 1.367, -2.396]} scale={2.143}>
        <mesh name="Mouse" geometry={nodes.Mouse.geometry} material={materials['Material.001']} scale={100} />
      </group>
      <group name="RootNode004" position={[-2.661, 0.835, 2.067]} rotation={[-0.663, 0.978, 0.524]} scale={0.559}>
        <group name="Backpack" position={[0, 0, 0.341]} rotation={[-Math.PI / 2, 0, 0]} scale={139.422}>
          <mesh name="Backpack_1" geometry={nodes.Backpack_1.geometry} material={materials.DarkBrown} />
          <mesh name="Backpack_2" geometry={nodes.Backpack_2.geometry} material={materials.Brown} />
          <mesh name="Backpack_3" geometry={nodes.Backpack_3.geometry} material={materials.Gold} />
        </group>
      </group>
        {props.animation === 'typing' && (
        <group name="RootNode005" position={[-0.356, 0.121, -1.441]} rotation={[-Math.PI, 0.575, -Math.PI]} scale={1.805}>
            <group name="OfficeChair" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh name="OfficeChair_1" geometry={nodes.OfficeChair_1.geometry} material={materials.Grey} />
            <mesh name="OfficeChair_2" geometry={nodes.OfficeChair_2.geometry} material={materials.Black} />
            <mesh name="OfficeChair_3" geometry={nodes.OfficeChair_3.geometry} material={materials.Chair} />
            </group>
        </group>
        )}

      {/* <group name="RootNode005" position={[-0.356, 0.121, -1.441]} rotation={[-Math.PI, 0.575, -Math.PI]} scale={1.805}>
        <group name="OfficeChair" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh name="OfficeChair_1" geometry={nodes.OfficeChair_1.geometry} material={materials.Grey} />
          <mesh name="OfficeChair_2" geometry={nodes.OfficeChair_2.geometry} material={materials.Black} />
          <mesh name="OfficeChair_3" geometry={nodes.OfficeChair_3.geometry} material={materials.Chair} />
        </group>
      </group> */}
      <mesh name="Node" geometry={nodes.Node.geometry} material={materials.Bean_Bag} position={[12.259, 0.186, 10.218]} rotation={[-Math.PI, 1.043, -Math.PI]} scale={0.043} />
      <group name="Table" position={[0.017, 0.107, -2.948]} rotation={[Math.PI, -1.565, Math.PI]} scale={[1.669, 1.34, 2.366]}>
        <mesh name="Cube007_Cube008_GrayPlastic" geometry={nodes.Cube007_Cube008_GrayPlastic.geometry} material={materials.GrayPlastic} />
        <mesh name="Cube007_Cube008_GrayPlastic_1" geometry={nodes.Cube007_Cube008_GrayPlastic_1.geometry} material={materials.BlackCoatSteel} />
        <mesh name="Cube007_Cube008_GrayPlastic_2" geometry={nodes.Cube007_Cube008_GrayPlastic_2.geometry} material={materials.WhiteSteelScrew} />
        <mesh name="Cube007_Cube008_GrayPlastic_3" geometry={nodes.Cube007_Cube008_GrayPlastic_3.geometry} material={materials.BlackPlastic} />
        <mesh name="Cube007_Cube008_GrayPlastic_4" geometry={nodes.Cube007_Cube008_GrayPlastic_4.geometry} material={materials.BlackWood} />
      </group>
      <group name="cpu" position={[-1.598, 1.903, -3.075]} rotation={[-Math.PI, 1.299, -Math.PI]} scale={0.529}>
        <mesh name="mesh549538436" geometry={nodes.mesh549538436.geometry} material={materials.mat23} />
        <mesh name="mesh549538436_1" geometry={nodes.mesh549538436_1.geometry} material={materials.mat8} />
        <mesh name="mesh549538436_2" geometry={nodes.mesh549538436_2.geometry} material={materials.mat24} />
        <mesh name="mesh549538436_3" geometry={nodes.mesh549538436_3.geometry} material={materials.mat17} />
        <mesh name="mesh549538436_4" geometry={nodes.mesh549538436_4.geometry} material={materials.mat16} />
        <mesh name="mesh549538436_5" geometry={nodes.mesh549538436_5.geometry} material={materials.mat21} />
        <mesh name="mesh549538436_6" geometry={nodes.mesh549538436_6.geometry} material={materials.mat3} />
        <mesh name="mesh549538436_7" geometry={nodes.mesh549538436_7.geometry} material={materials.mat10} />
        <mesh name="mesh549538436_8" geometry={nodes.mesh549538436_8.geometry} material={materials.mat9} />
        <mesh name="mesh549538436_9" geometry={nodes.mesh549538436_9.geometry} material={materials.mat15} />
        <mesh name="mesh549538436_10" geometry={nodes.mesh549538436_10.geometry} material={materials.mat22} />
        <mesh name="mesh549538436_11" geometry={nodes.mesh549538436_11.geometry} material={materials.mat11} />
        <mesh name="mesh549538436_12" geometry={nodes.mesh549538436_12.geometry} material={materials.mat12} />
        <mesh name="mesh549538436_13" geometry={nodes.mesh549538436_13.geometry} material={materials.mat5} />
        <mesh name="mesh549538436_14" geometry={nodes.mesh549538436_14.geometry} material={materials.mat13} />
        <mesh name="mesh549538436_15" geometry={nodes.mesh549538436_15.geometry} material={materials.mat2} />
      </group>
      <group name="monitors" position={[0.196, 1.8, -3.505]} rotation={[Math.PI, -0.007, Math.PI]} scale={0.75}>
        <mesh name="mesh150401702001" geometry={nodes.mesh150401702001.geometry} material={materials['mat22.002']} />
        <mesh name="mesh150401702001_1" geometry={nodes.mesh150401702001_1.geometry} material={materials['mat23.002']} />
        <mesh name="mesh150401702001_2" geometry={nodes.mesh150401702001_2.geometry} material={materials['mat21.002']} />
      </group>
      <mesh name="Keyboard1" geometry={nodes.Keyboard1.geometry} material={materials.lambert3SG} position={[0.215, 1.419, -2.59]} scale={0.003} />
      <group name="group1885116500" position={[-3.519, 0.383, -1.917]} scale={0.23}>
        <mesh name="mesh1885116500" geometry={nodes.mesh1885116500.geometry} material={materials['mat21.003']} />
        <mesh name="mesh1885116500_1" geometry={nodes.mesh1885116500_1.geometry} material={materials.mat20} />
        <mesh name="mesh1885116500_2" geometry={nodes.mesh1885116500_2.geometry} material={materials['mat9.001']} />
      </group>
      <group name="Node001" position={[0.072, 3.694, -3.72]}>
        <mesh name="Node-Mesh001" geometry={nodes['Node-Mesh001'].geometry} material={materials['mat8.001']} />
        <mesh name="Node-Mesh001_1" geometry={nodes['Node-Mesh001_1'].geometry} material={materials['mat21.006']} />
      </group>
      <group name="dodge" position={[0.463, 3.854, -3.691]} rotation={[0, 0.816, 0]} scale={0.044}>
        <mesh name="Plane_Plane002-Mesh" geometry={nodes['Plane_Plane002-Mesh'].geometry} material={materials.Roof_Black} />
        <mesh name="Plane_Plane002-Mesh_1" geometry={nodes['Plane_Plane002-Mesh_1'].geometry} material={materials.Red_Chasis} />
        <mesh name="Plane_Plane002-Mesh_2" geometry={nodes['Plane_Plane002-Mesh_2'].geometry} material={materials.really_Black} />
        <mesh name="Plane_Plane002-Mesh_3" geometry={nodes['Plane_Plane002-Mesh_3'].geometry} material={materials.Metalic} />
        <mesh name="Plane_Plane002-Mesh_4" geometry={nodes['Plane_Plane002-Mesh_4'].geometry} material={materials.red_light} />
        <mesh name="Plane_Plane002-Mesh_5" geometry={nodes['Plane_Plane002-Mesh_5'].geometry} material={materials.glass} />
        <mesh name="Plane_Plane002-Mesh_6" geometry={nodes['Plane_Plane002-Mesh_6'].geometry} material={materials.grey} />
        <mesh name="Plane_Plane002-Mesh_7" geometry={nodes['Plane_Plane002-Mesh_7'].geometry} material={materials.black} />
        <mesh name="Plane_Plane002-Mesh_8" geometry={nodes['Plane_Plane002-Mesh_8'].geometry} material={materials.tire} />
      </group>
      <group name="Lamborghini_Aventador_Wheel_RL" position={[-0.173, 3.756, -3.6]} rotation={[0, 0.691, 0]} scale={0.001}>
        <mesh name="Lamborghini_Aventador_Wheel_RL_1" geometry={nodes.Lamborghini_Aventador_Wheel_RL_1.geometry} material={materials._Lamborghini_AventadorLamborghini_Aventador_BodySG} />
        <mesh name="Lamborghini_Aventador_Wheel_RL_1_1" geometry={nodes.Lamborghini_Aventador_Wheel_RL_1_1.geometry} material={materials._Lamborghini_AventadorLamborghini_Aventador_GlassSG} />
      </group>
      <group name="Books" position={[0.408, 3.258, -3.606]} scale={[0.307, 0.585, 0.585]}>
        <mesh name="mesh1055978096" geometry={nodes.mesh1055978096.geometry} material={materials.mat19} />
        <mesh name="mesh1055978096_1" geometry={nodes.mesh1055978096_1.geometry} material={materials.mat14} />
        <mesh name="mesh1055978096_2" geometry={nodes.mesh1055978096_2.geometry} material={materials['mat5.001']} />
        <mesh name="mesh1055978096_3" geometry={nodes.mesh1055978096_3.geometry} material={materials.mat4} />
        <mesh name="mesh1055978096_4" geometry={nodes.mesh1055978096_4.geometry} material={materials['mat21.007']} />
        <mesh name="mesh1055978096_5" geometry={nodes.mesh1055978096_5.geometry} material={materials['mat17.001']} />
        <mesh name="mesh1055978096_6" geometry={nodes.mesh1055978096_6.geometry} material={materials['mat15.001']} />
        <mesh name="mesh1055978096_7" geometry={nodes.mesh1055978096_7.geometry} material={materials['mat9.004']} />
        <mesh name="mesh1055978096_8" geometry={nodes.mesh1055978096_8.geometry} material={materials['mat12.001']} />
        <mesh name="mesh1055978096_9" geometry={nodes.mesh1055978096_9.geometry} material={materials['mat3.001']} />
        <mesh name="mesh1055978096_10" geometry={nodes.mesh1055978096_10.geometry} material={materials['mat10.001']} />
        <mesh name="mesh1055978096_11" geometry={nodes.mesh1055978096_11.geometry} material={materials['mat23.003']} />
        <mesh name="mesh1055978096_12" geometry={nodes.mesh1055978096_12.geometry} material={materials['mat2.001']} />
        <mesh name="mesh1055978096_13" geometry={nodes.mesh1055978096_13.geometry} material={materials.mat1} />
        <mesh name="mesh1055978096_14" geometry={nodes.mesh1055978096_14.geometry} material={materials['mat8.002']} />
      </group>
      <group name="group481495382" position={[-0.288, 3.314, -3.606]} rotation={[Math.PI, -0.624, Math.PI]} scale={0.553}>
        <mesh name="mesh481495382" geometry={nodes.mesh481495382.geometry} material={materials['mat12.002']} />
        <mesh name="mesh481495382_1" geometry={nodes.mesh481495382_1.geometry} material={materials['mat23.004']} />
        <mesh name="mesh481495382_2" geometry={nodes.mesh481495382_2.geometry} material={materials.mat25} />
      </group>
      <mesh name="group1257628551" geometry={nodes.group1257628551.geometry} material={materials['mat23.005']} position={[-3.703, 2.964, -0.504]} rotation={[0, 1.571, 0]} scale={0.867} />
      <group name="group1454904968" position={[-3.703, 2.964, -0.504]} rotation={[0, 1.571, 0]} scale={0.867}>
        <mesh name="mesh1454904968" geometry={nodes.mesh1454904968.geometry} material={materials['mat23.005']} />
        <mesh name="mesh1454904968_1" geometry={nodes.mesh1454904968_1.geometry} material={materials['mat17.002']} />
        <mesh name="mesh1454904968_2" geometry={nodes.mesh1454904968_2.geometry} material={materials['mat16.001']} />
      </group>
      <mesh name="group1840578182" geometry={nodes.group1840578182.geometry} material={materials['mat23.005']} position={[-3.703, 2.964, -0.504]} rotation={[0, 1.571, 0]} scale={0.867} />
      <mesh name="group596176051" geometry={nodes.group596176051.geometry} material={materials['mat17.002']} position={[-3.703, 2.964, -0.504]} rotation={[0, 1.571, 0]} scale={0.867} />
      <mesh name="group397977436" geometry={nodes.group397977436.geometry} material={materials['mat23.005']} position={[-3.703, 2.964, -0.504]} rotation={[0, 1.571, 0]} scale={0.867} />
      <mesh name="group1562963861" geometry={nodes.group1562963861.geometry} material={materials['mat23.005']} position={[-3.703, 2.964, -0.504]} rotation={[0, 1.571, 0]} scale={0.867} />
      <mesh name="group1468930754" geometry={nodes.group1468930754.geometry} material={materials['mat23.005']} position={[-3.703, 2.964, -0.504]} rotation={[0, 1.571, 0]} scale={0.867} />
      <mesh name="group1923268096" geometry={nodes.group1923268096.geometry} material={materials['mat23.005']} position={[-3.703, 2.964, -0.504]} rotation={[0, 1.571, 0]} scale={0.867} />
      <mesh name="group207519990" geometry={nodes.group207519990.geometry} material={materials['mat22.003']} position={[-3.703, 2.964, -0.504]} rotation={[0, 1.571, 0]} scale={0.867} />
      <mesh name="group108534205" geometry={nodes.group108534205.geometry} material={materials['mat23.005']} position={[-3.703, 2.964, -0.504]} rotation={[0, 1.571, 0]} scale={0.867} />
      <mesh name="group83437352" geometry={nodes.group83437352.geometry} material={materials['mat15.002']} position={[-3.703, 2.964, -0.504]} rotation={[0, 1.571, 0]} scale={0.867} />
      <mesh name="group2052255221" geometry={nodes.group2052255221.geometry} material={materials['mat15.002']} position={[-3.703, 2.964, -0.504]} rotation={[0, 1.571, 0]} scale={0.867} />
      <mesh name="group1457147635" geometry={nodes.group1457147635.geometry} material={materials['mat15.002']} position={[-3.703, 2.964, -0.504]} rotation={[0, 1.571, 0]} scale={0.867} />
      <mesh name="group1601593260" geometry={nodes.group1601593260.geometry} material={materials['mat23.005']} position={[-3.703, 2.964, -0.504]} rotation={[0, 1.571, 0]} scale={0.867} />
      {/* <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={rugTextureMaterials} position={[0.853, 0.237, 1.366]} scale={2.316} /> */}
      <group name="Wall" position={[0, -0.052, 0]} scale={4}>
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={floorTextureMaterials} />
        <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={floorTextureMaterials} />
      </group>
      <group name="group1885116500001" position={[-3.493, 0.383, 1.576]} scale={0.23}>
        <mesh name="mesh1885116500001" geometry={nodes.mesh1885116500001.geometry} material={materials['mat21.004']} />
        <mesh name="mesh1885116500001_1" geometry={nodes.mesh1885116500001_1.geometry} material={materials['mat20.001']} />
        <mesh name="mesh1885116500001_2" geometry={nodes.mesh1885116500001_2.geometry} material={materials['mat9.002']} />
      </group>
      <group name="group1885116500002" position={[2.003, 1.559, -3.215]} rotation={[0, 0.256, 0]} scale={0.169}>
        <mesh name="mesh1885116500002" geometry={nodes.mesh1885116500002.geometry} material={materials['mat21.005']} />
        <mesh name="mesh1885116500002_1" geometry={nodes.mesh1885116500002_1.geometry} material={materials['mat20.002']} />
        <mesh name="mesh1885116500002_2" geometry={nodes.mesh1885116500002_2.geometry} material={materials['mat9.003']} />
      </group>
    </group>
  )
}

useGLTF.preload('models/scene.gltf')
export function Chair(props) {
  const { nodes, materials } = useGLTF('./models/scene.gltf');

  return (
    <group {...props}>
      <group name="RootNode005" position={[-0.356, 0.121, -1.441]} rotation={[-Math.PI, 0.575, -Math.PI]} scale={1.805}>
        <group name="OfficeChair" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh name="OfficeChair_1" geometry={nodes.OfficeChair_1.geometry} material={materials.Grey} />
          <mesh name="OfficeChair_2" geometry={nodes.OfficeChair_2.geometry} material={materials.Black} />
          <mesh name="OfficeChair_3" geometry={nodes.OfficeChair_3.geometry} material={materials.Chair} />
        </group>
      </group>
    </group>
  );
}
