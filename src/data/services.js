import {
  Stethoscope,
  HeartPulse,
  Ribbon,
  Leaf,
  ScanLine,
  Ambulance,
  Pill,
  Siren,
} from "lucide-react";

// Service keys map to translation entries in translations[lang].services[key].
// `image` is the slot filename in /public/images.
export const serviceItems = [
  { key: "opd", Icon: Stethoscope, image: "service-opd.jpg" },
  { key: "gyne", Icon: HeartPulse, image: "service-gyne.jpg" },
  { key: "onco", Icon: Ribbon, image: "service-eye.jpg" },
  { key: "homeo", Icon: Leaf, image: "service-homeo.jpg" },
  { key: "diag", Icon: ScanLine, image: "service-ultrasound.jpg" },
  { key: "emergency", Icon: Siren, image: "service-ecg.jpg" },
  { key: "pharmacy", Icon: Pill, image: "service-pharmacy.jpg" },
  { key: "ambulance", Icon: Ambulance, image: "service-ambulance.jpg" },
];
