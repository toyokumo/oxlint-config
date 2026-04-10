// nextjs/no-img-element
function A() {
  return <img src="/logo.png" alt="Logo" />;
}

// nextjs/no-head-element
function B() {
  return (
    <head>
      <title>Page</title>
    </head>
  );
}

// nextjs/no-sync-scripts
function C() {
  return <script src="https://example.com/script.js"></script>;
}

export default function Page() {
  return (
    <div>
      <A />
      <B />
      <C />
    </div>
  );
}
