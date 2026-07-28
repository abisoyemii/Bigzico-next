export function WhatsAppButton({ label = 'Order on WhatsApp', className = '' }: { label?: string; className?: string }) {
  return (
    <a href="https://wa.me/2348030000000?text=Hello%20BIGZICO%2C%20I%20would%20like%20to%20place%20an%20order" className={`inline-flex items-center justify-center rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700 ${className}`}>
      {label}
    </a>
  );
}
