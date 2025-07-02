import { FaBoxOpen, FaTruck, FaCheckCircle, FaPalette } from "react-icons/fa";
import browntape from "../assets/42_files/powerfixit.pdf-image-004.jpg"
import colurtape from "../assets/42_files/powerfixit.pdf-image-005.jpg"
import dormewear from "../assets/42_files/powerfixit.pdf-image-032.jpg"
import redrock from "../assets/42_files/powerfixit.pdf-image-033.png"
import kakkar from "../assets/42_files/powerfixit.pdf-image-035.jpg"
import powerfixit from "../assets/42_files/powerfixit.pdf-image-036.jpg"        
import hyeto from "../assets/42_files/powerfixit.pdf-image-037.jpg"
import ciel from "../assets/42_files/powerfixit.pdf-image-043.jpg"
import vaikunth from "../assets/42_files/powerfixit.pdf-image-039.jpg"
import snapdo from "../assets/42_files/powerfixit.pdf-image-048.jpg"
import swadhin from "../assets/42_files/powerfixit.pdf-image-037.jpg"
import bhopa from "../assets/42_files/powerfixit.pdf-image-042.jpg"
import pearl from "../assets/42_files/powerfixit.pdf-image-006.png" 
import krishna from "../assets/42_files/powerfixit.pdf-image-047.jpg"
import pharmacy from "../assets/42_files/powerfixit.pdf-image-052.jpg"
import yellow from "../assets/42_files/powerfixit.pdf-image-045.png"
import zcpi from "../assets/42_files/powerfixit.pdf-image-053.jpg"

const services = [
  {
    title: "BOPP Transparent & Brown Packing Tapes",
    desc: "BOPP packing tape is made of biaxial oriented polypropylene (BOPP) film. Polypropylene is a thermoplastic polymer which means it is pliable above a certain temperature, and returns to the solid state after cooling. The structure also makes the automated and manual application of the packaging tape easier.",
    img: browntape // Replace with your own image if available
  },
  {
    title: "BOPP Colour Tapes",
    desc: "BOPP packing tape is prepared from biaxial oriented polypropylene (BOPP) film. Polypropylene is detailed above. BOPP Colour tape if use for stationary & highlighting work.",
    img: colurtape // Replace with your own image if available
  }
];

const printedTapeClients = [
  { name: "Dormewear", img: dormewear },
  { name: "Red Rock", img: redrock },
  { name: "Kakkar", img: kakkar },
  { name: "Power Fixit", img: powerfixit },
  { name: "Hyeto", img: hyeto },
  { name: "Ciel Sports", img: ciel },
  { name: "Vaikunth", img: vaikunth },
  { name: "Snapdo", img: snapdo },
  { name: "Swadhin Biri", img: swadhin },
  { name: "Bhopa", img: bhopa },
  { name: "Pearl", img: pearl },
  { name: "Krishna", img: krishna },
  { name: "Pharmacy Healthcare", img: pharmacy },
  { name: "Yellow", img: yellow },
  { name: "ZCPI", img: zcpi }
];

const productTable = [
  { brand: "POWER FIXIT", length: "25 to 650 mtr.", colour: "Clear", core: "Inner", thickness: "36", size: "12", jumbo: "144" },
  { brand: "WONDER BRO", length: "Body Jumbo Length", colour: "Red, Yellow", core: "Diameter", thickness: "38", size: "48", jumbo: "210" },
  { brand: "MARUTI GOLD", length: "1500 mtr.", colour: "Green", core: "Oil core", thickness: "42", size: "36", jumbo: "246" },
  { brand: "SHREE GEE", length: "Jumbo Length 1025/1315", colour: "Yellow", core: "76 mm", thickness: "48", size: "48", jumbo: "280" },
  { brand: "POWER GRIP", length: "4000 mtr.", colour: "Blue", core: "76 mm", thickness: "55", size: "72", jumbo: "1315" }
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 text-center relative overflow-hidden" id="services">
      <div className="absolute left-0 top-0 w-40 h-40 bg-yellow-200 rounded-full opacity-30 blur-2xl -z-10" />
      <div className="absolute right-0 bottom-0 w-60 h-60 bg-yellow-300 rounded-full opacity-20 blur-3xl -z-10" />
      <h2 className="text-4xl font-bold mb-3">Trust Our Expertise In Adhesive Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 mt-12 mb-16">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-yellow-100 flex flex-col items-center">
            <img src={s.img} alt={s.title} className="w-50 h-50 object-contain mb-5 rounded-2xl shadow" />
            <h3 className="text-xl font-bold mb-3 text-yellow-800 uppercase">{s.title}</h3>
            <p className="text-gray-700 text-base leading-relaxed text-left">{s.desc}</p>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-bold mb-6 text-yellow-700">BOPP Printed Tapes</h3>
      <div className="relative w-[95%] mx-auto overflow-hidden mb-12">
        <div className="flex gap-6 px-2 py-2 whitespace-nowrap animate-scroll-logos" style={{ minWidth: '400px' }}>
          {printedTapeClients.concat(printedTapeClients).map((client, i) => (
            <div key={i} className="bg-white p-3 rounded shadow border border-yellow-100 flex items-center justify-center w-32 h-20 flex-shrink-0">
              <img src={client.img} alt={client.name} className="max-h-12 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto max-w-4xl mx-auto">
        <table className="min-w-full bg-white rounded-xl shadow border border-yellow-100">
          <thead>
            <tr className="bg-yellow-200 text-yellow-900">
              <th className="py-2 px-3">Brand</th>
              <th className="py-2 px-3">Standard Length</th>
              <th className="py-2 px-3">Colour</th>
              <th className="py-2 px-3">Core ID</th>
              <th className="py-2 px-3">Thickness</th>
              <th className="py-2 px-3">Size (mm)</th>
              <th className="py-2 px-3">Size (Jumbo) (mm)</th>
            </tr>
          </thead>
          <tbody>
            {productTable.map((row, i) => (
              <tr key={i} className="border-t border-yellow-100">
                <td className="py-2 px-3 font-semibold text-yellow-800">{row.brand}</td>
                <td className="py-2 px-3">{row.length}</td>
                <td className="py-2 px-3">{row.colour}</td>
                <td className="py-2 px-3">{row.core}</td>
                <td className="py-2 px-3">{row.thickness}</td>
                <td className="py-2 px-3">{row.size}</td>
                <td className="py-2 px-3">{row.jumbo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}