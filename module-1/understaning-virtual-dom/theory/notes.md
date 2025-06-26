# Understanding virtual dom and reconcilation process.

#### What is virtual DOM?

- Virtual DOM is the in-memory representation of the actual DOM or copy of actual DOM.
- React uses virtual DOM to optimize UI rendering perfomance by minimizing direct DOM manipulation.
- Instead of updating the actual DOM directly, React first updates the virtual DOM and based on the differene between both of DOM changes, re-rendering will start.

#### How React uses Virtual DOM?

- initial Rendering: React creates a virtual DOM tree representing the UI
- state change: When state changes, React creates a new virtual DOM.
- Diffing: React compares the newly created virtual DOM with the old one to identify changes.
- Reconciliation: React calculates the most efficient way to update the real DOM.
- update: only the neccassary parts of the real DOM where updated.