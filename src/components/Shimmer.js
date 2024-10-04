function Shimmer() {
    // Create an array of 10 elements and map them to render 10 divs
    return (
        <>
        <div className="shimmer">
            {Array(10).fill("").map((_, index) => (
                <div key={index} className="card"></div>
            ))}
            </div>
        </>
    );
}

export default Shimmer;
