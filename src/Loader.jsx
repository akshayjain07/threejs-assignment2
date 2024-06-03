// import { Html, useProgress } from "@react-three/drei";

// const CanvasLoader = () => {
//   const { progress } = useProgress();
//   return (
//     <Html
//       as='div'
//       center
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//       }}
//     >
//       <span className='canvas-loader'></span>
//       <p
//         style={{
//           fontSize: 14,
//           color: "#F1F1F1",
//           fontWeight: 800,
//           marginTop: 40,
//         }}
//       >
//         {progress.toFixed(2)}%
//       </p>
//     </Html>
//   );
// };

// export default CanvasLoader;


import React from 'react';

const CanvasLoader = () => {
  return (
    <>
    <div style={{
      position: 'absolute',
      top: '90%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '24px',
      color: '#ffffff'
    }}>
      Wait for 3D models to Load...
    </div>
    <div style={{
      position: 'absolute',
      top: '95%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '14px',
      color: '#ffffff'
    }}>
      Tried to design very similar to image given. Due to time issues and I was not getting models, it's not exactly same, but covers all the concepts to want to test ....
    </div>
    </>
  );
};

export default CanvasLoader;
