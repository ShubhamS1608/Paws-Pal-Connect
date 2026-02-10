export const dynamic = "force-dynamic";

import { getPets } from "@/lib/data";
import SearchBar from "@/components/SearchBar";
import StatusButton from "@/components/StatusButton";
import DarkToggle from "@/components/DarkToggle";

type Props = {
  searchParams: { species?: string };
};

export default async function Home({ searchParams }: Props) {
  const species = searchParams?.species ?? "dog";
  const pets = await getPets(species);

  return (
    <div className="min-h-screen bg-[#f4e6d4] dark:bg-gray-900 dark:text-white">
      
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b px-8 py-5 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">
            Paws Pal Connect
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Pet Management Dashboard
          </p>
        </div>

        <DarkToggle />
      </div>

      {/* Content */}
      <div className="px-8 pt-32">
        <SearchBar />

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {pets.map((pet) => (
            <div
              key={pet.id}
              className="bg-white dark:bg-gray-800 border rounded-lg overflow-hidden"
            >
              <img
                src={pet.image}
                className="h-44 w-full object-cover"
                alt="pet"
              />

              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-base font-medium capitalize">
                    {pet.name}
                  </h2>

                  <StatusButton />
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                  Species:{" "}
                  <span className="capitalize">{pet.species}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
