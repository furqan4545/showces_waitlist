import AnimatedRecorder from "./AnimatedRecorder";
import WaitlistForm from "./WaitlistForm";

// export default function Hero() {
//   return (
//     <div className="flex flex-col items-center pt-24 md:pt-32 py-12 sm:py-20 gap-8 sm:gap-12">
//       <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 w-full">
//         <div className="flex-1 space-y-6">
//           <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
//             Make Demos that
//             <br />
//             <span className="text-primary">WOW Your Users</span>
//           </h1>
//           <p className="text-lg sm:text-xl text-muted-foreground max-w-[600px]">
//             Showces brings professional screen recording to your fingertips.
//             Capture, edit, and share with unprecedented ease.
//           </p>
//           <WaitlistForm />
//         </div>
//         <div className="flex-1">
//           <AnimatedRecorder />
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Hero() {
  return (
    <div className="flex flex-col items-center pt-24 md:pt-32 py-12 sm:py-20 gap-8 sm:gap-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 w-full">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight space-y-2">
            {" "}
            {/* Added space-y-2 */}
            <div>Make Demos that</div> {/* Wrapped in div */}
            <div className="text-primary">WOW your audience!</div>{" "}
            {/* Wrapped in div */}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-[600px]">
            Showces converts boring screen recordings into magical demos. And
            it's AI voiceover makes it easy to explain your product.
          </p>
          <WaitlistForm />
        </div>
        <div className="flex-1">
          <AnimatedRecorder />
        </div>
      </div>
    </div>
  );
}
