const mongoose=require('mongoose')
const chat=require('./model/chat')

const main=async()=>{
  await mongoose.connect('mongodb://127.0.0.1:27017/myapp')
}
main().then(()=>{
console.log("connected sucessfully")
})

const messages = [
    {
        from: 'john',
        to: 'doe',
        msg: 'good morning!',
        created_at: new Date().toString()
    },
    {
        from: 'alice',
        to: 'bob',
        msg: 'how are you?',
        created_at: new Date().toString()
    },
    {
        from: 'emma',
        to: 'oliver',
        msg: 'happy birthday!',
        created_at: new Date().toString()
    },
    {
        from: 'michael',
        to: 'sophia',
        msg: 'see you soon!',
        created_at: new Date().toString()
    },
    {
        from: 'david',
        to: 'elena',
        msg: 'let’s catch up later.',
        created_at: new Date().toString()
    },
    {
        from: 'lucas',
        to: 'mia',
        msg: 'congratulations on your promotion!',
        created_at: new Date().toString()
    },
    {
        from: 'ethan',
        to: 'ava',
        msg: 'did you finish the project?',
        created_at: new Date().toString()
    },
    {
        from: 'ryan',
        to: 'sophia',
        msg: 'call me when you’re free.',
        created_at: new Date().toString()
    },
    {
        from: 'daniel',
        to: 'hannah',
        msg: 'movie night tomorrow?',
        created_at: new Date().toString()
    },
    {
        from: 'noah',
        to: 'charlotte',
        msg: 'miss you!',
        created_at: new Date().toString()
    }
];

chat.insertMany(messages)




