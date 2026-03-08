# Kotoba Node

### 1. First-screen `Streaming` Rendering

To eliminate initial load latency and minimize `Time to First Byte (TTFB)`, the homepage utilizes the `Next.js RSC` + `Suspense` pattern.

**&middot; Component Decomposition:** Data-fetching is isolated within independent server component to prevent blocking the main rendering thread.

**&middot; Streaming Strategy:** The application serves a static shell immediately, while the data-fetching component streams in from the background. `Suspense` provides skeleton state and manages the transition.
