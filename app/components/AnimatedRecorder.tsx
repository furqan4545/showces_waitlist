export default function AnimatedRecorder() {
  return (
    <svg 
      className="w-full h-auto max-w-[600px]"
      viewBox="0 0 400 300" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="50"
        y="50"
        width="300"
        height="200"
        rx="8"
        className="stroke-primary fill-background"
        strokeWidth="4"
      />
      <circle
        cx="200"
        cy="150"
        r="40"
        className="fill-primary/20 stroke-primary"
        strokeWidth="4"
      >
        <animate
          attributeName="r"
          values="40;45;40"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="200"
        cy="150"
        r="20"
        className="fill-primary"
      >
        <animate
          attributeName="opacity"
          values="1;0.8;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
