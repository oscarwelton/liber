import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserFollowers = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const followers = await Promise.all(
      user.followers.map((id) => User.findBy(id))
    );
    const formattedFollowers = followers.map(
      ({ _id, firstName, lastName, bio, location, picturePath })
    )
    res.status(200).json(formattedFollowers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addRemoveFollower = async (req, res) => {

}
