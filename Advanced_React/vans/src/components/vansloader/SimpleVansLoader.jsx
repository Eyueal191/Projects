import { json } from "react-router-dom";

export default async function SimpleVansLoader() {
  try {
    let res = await fetch("/api/vans?type=simple");
    if (!res.ok) {
      throw new Error("failed to load the data");
      return;
    }
    let data = await res.json();
    let simplevans = data.vans;
    return simplevans;
  } catch (err) {
    console.log(err);
  }
}
