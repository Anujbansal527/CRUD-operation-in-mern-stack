import User from "../model/userModel.js";

export const addUser = async (req, res) => {
  try {
    const userData = req.body;

    const newUser = new User(userData);

    //creating validations

    await newUser.save();

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);

    return res.status(409).json({ message: `User not created ${error}` });
  }
};

export const allUser = async (req, res) => {
  try {
    const users = await User.find({
      //here we write conditon on whic basis data will find if not written the ereturn all data
   });
   
    return res.status(200).json(users);
    
  } catch (error) {
    console.log(error);

    return res.status(409).json({ message: `User not found ${error}` });
  }
};

export const getUser = async (req,res) => {
  console.log(req.params.id);
  try {
    const users =await User.findById(req.params.id)
    return res.status(200).json(users);

  } catch (error) {
    console.log(error);

    return res.status(409).json({ message: `User not found ${error}` });
  }
}

export const editUser = async (req, res) => {
  //validate
  let user = req.body;

  const editUser = new User(user);
  try{
      await User.updateOne({_id: req.params.id}, editUser);

      res.status(201).json(editUser);

  } catch (error) {
    console.log(error);

    return res.status(409).json({ message: `User not update ${error}` });
  }
};


export const  deleteUser = async (req,res) =>{
  console.log(req.params.id);
  try {
    await User.deleteOne({_id: req.params.id});

    res.status(201).json("User deleted Successfully");

  } catch (error) {
    console.log(error);

    return res.status(409).json({ message: `User not delete ${error}` });
 
  }
}