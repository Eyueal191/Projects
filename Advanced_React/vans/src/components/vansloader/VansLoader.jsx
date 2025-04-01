import { json } from "react-router-dom";

export default async function VansLoader() {
  try {
    let res = await fetch("/api/vans");
    if (!res.ok) {
      throw new Error("failed to load the data");
      return;
    }
    let data = await res.json();
    let vans = data.vans;
    return vans;
  } catch (err) {
    console.log(err);
  }
}
