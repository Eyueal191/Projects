export default async function LuxuryVansLoader() {
  try {
    let res = await fetch("/api/vans?type=luxury");

    if (!res.ok) {
      throw new Error("Failed to load the data");
    }

    let data = await res.json();
    let LuxuryVans = data.vans;
    return LuxuryVans; // returning the fetched data
  } catch (err) {
    console.log("Error loading luxury vans:", err);
  }
}
