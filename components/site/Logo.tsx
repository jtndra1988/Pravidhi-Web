import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-2" aria-label="ZypoSoft Home">
      {/* Updated Dimensions:
         1. h-20 (80px) makes it significantly larger.
         2. w-auto ensures the rectangle shape is preserved.
         3. object-contain ensures it doesn't get cut off.
      */}
      <Image 
        src="/icons/Zyposoft.png" 
        alt="ZypoSoft Logo" 
        width={200} 
        height={120} 
        className="h-16 w-auto object-contain" 
        priority
      />
    </Link>
  );
}