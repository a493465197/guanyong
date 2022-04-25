module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const ConfigSchema = new Schema({
        isVilad: {
            type: String
        },
    });
    return mongoose.model('Config', ConfigSchema, 'config');
}