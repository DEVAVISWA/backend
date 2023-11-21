const User = require('../models/user')

const userRouter = require('express').Router() //4

userRouter.get('/', (req,res)=> {
    User.find({},{})
        .then(users=> {
            res.status(200).json(users)
        })
})

userRouter.post('/', (req, res) => {
    const user = new User(req.body)
    user.save()
        .then(() => {
            res.status(201).json({ message: 'note created successfully' })
        })
})

userRouter.get('/:id', (req, res) => {
    const id = req.params.id
    User.findById(id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(404).json({ message: 'id dsnt exist' })
        })
})

userRouter.delete('/:id', (req, res) => {
    const id = req.params.id
    User.findByIdAndDelete(id)
        .then(deletedUser => {
            if (deletedUser) {
                res.status(204).json({ message: 'note deletes successfully' })
            } else {
                res.status(404).json({ message: 'id dsnt exits' })
            }
        })
        .catch(err => {
            res.status(404).json({ message: 'error deleting the note' })
        })
})

userRouter.put('/:id', (req, res) => {
    const id = req.params.id
    const userToReplace = req.body
    User.findByIdAndUpdate(id, userToReplace)
        .then(updatedUser => {
            if (updatedUser) {
                res.status(200).json({ message: 'note replaced successfully' })
            } else {
                response.status(404).json({ message: 'id does not exists' });
            }
        })
        .catch(err => {
            response.status(404).json({ message: 'replacing the note failed...' });
        })
})


userRouter.patch('/:id', (req, res) => {
    const id = req.params.id
    const userToPatch = req.body
    User.findByIdAndUpdate(id, userToPatch)
        .then(patchedUser => {
            if (patchedUser) {
                res.status(200).json({ message: 'note patched successfully' })
            } else {
                response.status(404).json({ message: 'id does not exists' });
            }
        })
        .catch(err => {
            response.status(404).json({ message: 'patching the note failed...' });
        })
})


module.exports= userRouter //5