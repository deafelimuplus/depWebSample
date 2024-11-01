import Link from "next/link";
import { Preloader, Features, Header } from "./components";

export default function Home() {
  const message = process.env["MESSAGE"] || "Hello!";
  const company = process.env["COMPANY"] || "Deaf eLimu Plus Limited";
  const company_short = process.env["COMPANY_SHORT"] || "DEP";
  return (
    <>
      <Preloader />
      <Header />
      <Features />
    </>
  );
}
