// import/prefer-default-export (typescript-jsx override: warn for .tsx)
export function A({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function B({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
