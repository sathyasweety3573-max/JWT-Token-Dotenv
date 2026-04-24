const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) => {

    try {

        // get token from headers

        const authHeader = req.headers.authorization;


        // check token exists

        if (!authHeader) {

            return res.status(401).json({

                message: "No token provided"

            });

        }


        // split Bearer token

        const token = authHeader.split(" ")[1];


        // verify token

        const decoded = jwt.verify(

            token,

            process.env.JWT_SECRET

        );


        // save decoded data

        req.user = decoded;


        next();

    }

    catch (error) {

        return res.status(401).json({

            message: "Invalid token"

        });

    }

};


module.exports = verifyToken;