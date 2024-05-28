const ErrorHandler = (type) => {
    switch (type) {
        case 'SequelizeValidationError': {
            res.status(400).json({message: err.errors[0].message})
            break;
        }

        case 'SequelizeUniqueConstraintError': {
            res.status(400).json({message: "Email must be Unique"})
            break;
        }

        default: {
            res.status(500).json({message: "Internal Server Error"})
            break;
        }
    }
}

module.exports = ErrorHandler