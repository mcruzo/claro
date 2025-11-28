import GuideModal from "./components/GuideModal";
import { Data } from "./types";

const d = new Date();
const year = d.getFullYear();
const month = (d.getMonth() + 1).toString().padStart(2, '0');
const day = d.getDate().toString().padStart(2, '0');
const today = year + month + day + "000000";
const tomorrow = year + month + day + "240000";
const API_URL =
  `https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=guatemala&HKS=web61144bb49d549&user_id=54343080&date_from=${today}&date_to=${tomorrow}&quantity=200`;

export default async function Page() {
  const res = await fetch(API_URL);

  if (!res.ok) {
    console.error("Error al obtener data", await res.text());
    throw new Error("No se pudo obtener la información de la data");
  }
  const data: Data = await res.json();
  console.log("data:::::::", data)

  return (
    <main className="w-full h-screen flex items-center justify-center bg-black">
      <GuideModal data={data} />
    </main>
  );
}
