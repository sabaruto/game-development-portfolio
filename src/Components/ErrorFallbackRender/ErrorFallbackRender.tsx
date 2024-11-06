function FallbackRender(props: { error: Error; resetErrorBoundary: (...args: any[]) => void }) {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.

    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <p>{props.error.message}</p>
        </div>
    );
}

export default FallbackRender;
