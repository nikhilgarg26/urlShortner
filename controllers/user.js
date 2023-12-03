const User = require("../model/user")
const {setUser} = require("../service/auth");

const handleSignup =async (req, res) => {
    const body = req.body
    const user = new User({
        name: body.name,
        email: body.email,
        password: body.password
    })
    await user.save()

    res.status(200).redirect("login")
}

const handleLogin=async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email, password })

    if (!user) return res.redirect("/signup")

    // const sessionId = uuidv4();

    const token=setUser(user);

    res.cookie("uuid", token);

    return res.redirect("/");
}

module.exports = {
    handleLogin,
    handleSignup
}