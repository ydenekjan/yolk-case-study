const LoadingDots = () => {
  return (
    <div className="flex space-x-2 justify-center items-center h-fit">
      <div className="h-4 aspect-square bg-foreground rounded-full animate-bounce [animation-delay:-0.6s]" />
      <div className="h-4 aspect-square bg-foreground rounded-full animate-bounce [animation-delay:-0.45s]" />
      <div className="h-4 aspect-square bg-foreground rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="h-4 aspect-square bg-foreground rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="h-4 aspect-square bg-foreground rounded-full animate-bounce" />
    </div>
  );
};

export default LoadingDots;
