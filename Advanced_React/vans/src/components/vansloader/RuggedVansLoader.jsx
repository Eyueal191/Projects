import { json } from "react-router-dom";

export default async function RuggedVansLoader() {
  try {
    let res = await fetch("/api/vans?type=rugged");
    if (!res.ok) {
      throw new Error("failed to load the data");
      return;
    }
    let data = await res.json();
    let ruggedvans = data.vans;
    return ruggedvans;
  } catch (err) {
    console.log(err);
  }
}
