import EntryPoint from "@/app/_core/ui/components/EntryPoint";
export default function Home({children}) {
  return (
      <main>

    {/*// <main className="flex min-h-screen flex-col items-start justify-between p-24">*/}
    {/*//   <div className="z-10 max-w-5xl w-full items-start justify-between font-mono text-sm lg:flex text-amber-50 flex-col">*/}
        <EntryPoint/>
      {/*</div>*/}
    </main>
  );
}
