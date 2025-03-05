// import { animated, useSpring } from "@react-spring/web";

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   image: string;
//   link: string;
// }

// export default function ProjectCard({
//   title,
//   description,
//   image,
//   link,
// }: ProjectCardProps) {
//   const animation = useSpring({
//     transform: "scale(1)",
//     from: { transform: "scale(0.95)" },
//     config: { tension: 300 },
//   });
// // @ts-nocheck
//   return (
//     <animated.div style={animation}>
//       <Card
//         className="glass-effect border-none"
//         cover={
//           <div className="aspect-video overflow-hidden relative">
//             <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
//             <img
//               src={image}
//               alt={title}
//               className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
//             />
//           </div>
//         }
//       >
//         <Card.Meta
//           title={<h3 className="text-xl font-semibold">{title}</h3>}
//           description={
//             <>
//               <p className="mt-2 text-muted-foreground">{description}</p>
//               <a
//                 href={link}
//                 className="mt-4 inline-block text-sm font-medium text-primary hover:text-primary/80 transition-colors"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View Project →
//               </a>
//             </>
//           }
//         />
//       </Card>
//     </animated.div>
//   );
// }