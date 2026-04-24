const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");



// REGISTER USER

exports.registerUser = async (req, res) => {

    try {

        const { username, email, password } = req.body;


        // check existing user

        const existingUser = await User.findOne({ email });


        if (existingUser) {

            return res.status(400).json({

                message: "User already exists"

            });

        }


        // hash password

        const hashedPassword = await bcrypt.hash(password, 10);


        // create user

        await User.create({

            username,

            email,

            password: hashedPassword

        });


        res.status(201).json({

            message: "User registered successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};




// LOGIN USER

exports.loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;


        // find user

        const user = await User.findOne({ email });


        if (!user) {

            return res.status(400).json({

                message: "Invalid email or password"

            });

        }


        // compare password

        const isMatch = await bcrypt.compare(password, user.password);


        if (!isMatch) {

            return res.status(400).json({

                message: "Invalid email or password"

            });

        }


        // create token

        const token = jwt.sign(

            {

                id: user._id,

                email: user.email

            },

            process.env.JWT_SECRET,

            {

                expiresIn: "1d"

            }

        );


        res.status(200).json({

            message: "Login successful",

            token

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};




// GET USER

exports.getUser = async (req, res) => {

    try {

        res.status(200).json({

            message: "User fetched successfully",

            user: req.user

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};