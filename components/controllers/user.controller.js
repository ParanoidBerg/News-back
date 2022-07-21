const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.userController = {
    getUser:async( req, res)=>{
        try {
            const user = await User.find()
            return res.json(user)
        } catch (error) {
            return res.json({error: error.message})
        }
    },
  createUser: async (req, res) => {
    try {
      const hash = await bcrypt.hash(
        req.body.password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      const data = await User.create({
        login: req.body.login,
        password: hash,
        admin: req.body.admin
      });
      res.json(data);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },
  logIn: async (req, res) => {
    try {
      const candidate = await User.findOne({ login: req.body.login });
      if (!candidate) {
        return res.status(401).json({ error: "Неверный логин" });
      }
      const valid = await bcrypt.compare(req.body.password, candidate.password);
      if (!valid) {
        return res.status(401).json({ error: "Неверный пароль" });
      }

      const payload = {
        id: candidate._id,
        login: candidate.login,
        admin: candidate.admin

      };
      const token = await jwt.sign(payload, process.env.KEY, {
        expiresIn: "24h",
      });
      res.json({ token, name: payload.login, user: payload.id, admin: payload.admin });
    } catch (err) {
      res.json(err);
    }
  },
  delUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id)
      res.json(req.params.id)
    }catch (err) {
      res.json(err);
    }
  }
};
