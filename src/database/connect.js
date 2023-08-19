const mongoose = require('mongoose')

const connectToDatabase = async () => {
 try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ti1lrut.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Conexão com o banco de dados realizada com sucesso");
  } catch (error) {
    console.error("Ocorreu um erro ao se conectar ao banco de dados:", error);
  }
};


module.exports = connectToDatabase 

