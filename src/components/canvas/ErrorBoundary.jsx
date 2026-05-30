import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("WebGL / 3D Canvas Error Caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className='flex flex-col justify-center items-center w-full h-full min-h-[300px] bg-transparent text-white p-4 border border-dashed border-secondary/20 rounded-2xl'>
          <p className='text-sm font-semibold text-secondary text-center'>
            Failed to load 3D interactive graphics.
          </p>
          <span className='text-xs text-secondary mt-1 text-center opacity-60'>
            Your device might be low on WebGL memory or hardware acceleration is disabled.
          </span>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
