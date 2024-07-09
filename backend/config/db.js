import mongoose from 'mongoose'

export const connectDb = async() => {
    await mongoose.connect(`mongodb+srv://bansalsarthak504:VkQAzbP9vDIqkrCr@cluster0.hi5vdjw.mongodb.net/food-del`).then(() => {
        console.log("Connected to MongoDB");
    })
}