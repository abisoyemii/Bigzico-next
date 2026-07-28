import { notFound } from 'next/navigation';
import { CategoryPageTemplate } from '@/components/category/CategoryPageTemplate';
import { getCategoryPageContent } from '@/data/categories';
import { categories } from '@/lib/mock-data';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = getCategoryPageContent(slug);
  const category = categories.find((item) => item.slug === slug);

  return {
    title: `${content.name} | BIGZICO`,
    description: content.description,
    keywords: content.keywords.join(', '),
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = getCategoryPageContent(slug);
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  return <CategoryPageTemplate category={category} content={content} />;
}