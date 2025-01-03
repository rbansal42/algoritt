import { openPositions } from '@/constants/careers'
import Link from 'next/link'
import HeroSection from '@/components/ui/careers/HeroSection'
import DetailsSection from '@/components/ui/careers/DetailsSection'
import SimilarPositions from '@/components/ui/careers/SimilarPositions'
import ApplicationFormContainer from '@/components/ui/careers/ApplicationFormContainer'

type PageProps = {
  params: Promise<{ id: string }>
}

export default async function CareerPositionPage({ params }: PageProps) {
  const { id } = await params;
  const position = openPositions.find(p => p.id === id);

  if (!position) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Position Not Found</h1>
          <Link 
            href="/careers"
            className="text-purple-400 hover:text-purple-300"
          >
            View all positions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900">
      <HeroSection position={position} />

      {/* Content Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-8 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-5">
                <DetailsSection position={position} />
              </div>

              <ApplicationFormContainer position={position} />
            </div>
          </div>
        </div>
      </section>

      <SimilarPositions currentPosition={position} positions={openPositions} />
    </main>
  );
} 