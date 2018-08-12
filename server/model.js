const mongoose = require('mongoose')

//连接mongo
const DB_URL = 'mongodb://localhost:27017/imooc-chat'
mongoose.connect(DB_URL)
const models = {
    user: {
        'user': { 'type': String, 'required': true },
        'pwd': { 'type': String, 'require': true },
        'type': { 'type': String, 'require': true },
        'avatar': { 'type': String },
        'desc': { 'type': String },
        'title': { 'type': String },
        'company': { 'type': String },
        'money':{'type':String}
    },
    chat: {
        'chatid': { type: String, require: true },
        'form': { type: String, require: true },
        'to': { type: String, require: true },
        'read': { type:Boolean, require: false },
        'content': { type: String, require: true, default: '' },
        'create_time': { type: Number, default: new Date().getTime() }
    }
}

for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function(name){
        return mongoose.model(name)
    }
}