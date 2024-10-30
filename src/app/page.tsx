import Link from "next/link";

export default function Home() {
  const message = process.env["MESSAGE"] || "finally it works!!!";
  return (
    <main className="content">
      <h1 className="heading">Hello Sofia and passed!</h1>
      <p>{message}</p>
    </main>
  );
}
