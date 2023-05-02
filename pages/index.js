// This function runs only on the server side
export async function getStaticProps() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
  const json = await response.json();
  return { props: { json } }
}

export default function Home({ json }) {
  return (
    <>
      { JSON.stringify(json) }
    </>
  )
}