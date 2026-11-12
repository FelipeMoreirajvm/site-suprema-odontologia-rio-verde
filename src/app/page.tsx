import { clinic } from "@/config/clinic";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-bold">{clinic.name}</h1>
      <p>
        {clinic.address.city} - {clinic.address.state}
      </p>
    </div>
  );
}
