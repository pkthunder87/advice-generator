async function getURL(URL) {
  const res = await fetch(`${URL}`);
  if (!res.ok) throw new Error(`Failed to load advice, ${res.status}`);
  return await res.json();
}

export default getURL;
