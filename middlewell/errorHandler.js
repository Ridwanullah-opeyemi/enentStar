const errorhanddler = async (err, req, res, next) => {
    console.error("errorhand",err); // Use console.error for actual errors
    // res.status(500).send({ error: "Something went wrong", message: err });

    if (err.name === "ValidationError") {
        res.status(400).json({
            status: "error",
            message: "ValidationError: Path `password,email,tel,name` is required"
        })
    }
};

module.exports = errorhanddler


