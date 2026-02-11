export type Pet = {
  id: number;
  name: string;
  image: string;
  species: string;
};

export async function getPets(species: string) {
  const res = await fetch(
    `https://dog.ceo/api/breeds/image/random/6?ts=${Date.now()}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  return data.message.map((img: string, i: number) => ({
    id: i,
    name: `${species} ${i + 1}`,
    image: img,
    species,
  }));
}
