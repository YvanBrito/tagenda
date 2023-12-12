export default async function Home() {
  const response = await fetch('http://localhost:3001/api/generate', {
    cache: 'no-store',
  })
  const generatedData = await response.json()

  return (
    <main>
      <ul>
        <li>randfloat: {generatedData.randfloat}</li>
        <li>randint: {generatedData.randint}</li>
      </ul>
    </main>
  )
}
