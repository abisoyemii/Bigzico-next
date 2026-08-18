const faqs = [
  { question: 'How long does delivery take?', answer: 'Same-day delivery is available in Lagos, Abuja and major parts of Port Harcourt. Nationwide delivery usually takes 3-5 business days.' },
  { question: 'Are your products genuine?', answer: 'Yes. We only stock authentic appliances from trusted brands and provide manufacturer-backed warranties on eligible products.' },
  { question: 'Do you offer installation services?', answer: 'Absolutely. We offer professional installation for ACs, refrigerators, washing machines, and more through our certified technicians.' },
  { question: 'What is your return policy?', answer: 'You can return unused items in original condition within 7 days of delivery, subject to our returns policy and product eligibility.' },
];

export function FAQ() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16" aria-label="Frequently asked questions">
      <div className="mb-8 text-center sm:mb-12">
        <h2 className="font-display text-2xl font-bold sm:text-3xl md:text-4xl">Frequently Asked Questions</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">Got questions? We have got answers</p>
      </div>
      <div className="mx-auto max-w-3xl space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <details key={faq.question} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm" open={index === 0}>
            <summary className="cursor-pointer list-none font-semibold text-slate-900">{faq.question}</summary>
            <p className="mt-3 text-sm text-gray-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
