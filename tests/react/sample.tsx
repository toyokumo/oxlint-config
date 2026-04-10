import { useState } from 'react';

// react/jsx-no-useless-fragment
function A({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}

// react/self-closing-comp
function B() {
  return <div></div>;
}

// react/button-has-type
function C() {
  return <button>Click</button>;
}

// react/jsx-boolean-value
function D() {
  return <input disabled={true} />;
}

// react/jsx-curly-brace-presence
function E() {
  return <div className={'test'}>{'text'}</div>;
}

// react/jsx-no-target-blank
function F() {
  return (
    <a href="https://example.com" target="_blank">
      link
    </a>
  );
}

// jsx-a11y/alt-text
function G() {
  return <img src="test.png" />;
}

// jsx-a11y/anchor-has-content
function H() {
  return <a href="https://example.com"></a>;
}

function Home() {
  const [n, setN] = useState(0);
  return (
    <button type="button" onClick={() => setN(n + 1)}>
      {n}
    </button>
  );
}

Home.A = A;
Home.B = B;
Home.C = C;
Home.D = D;
Home.E = E;
Home.F = F;
Home.G = G;
Home.H = H;

export default Home;
