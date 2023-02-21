import BounceLoader from "react-spinners/BounceLoader";

export default function Loading() {
  return (
    <div className="bg-primary flex justify-center items-center w-full h-screen">
      <BounceLoader color="#2A9D8F" />
    </div>
  );
}
